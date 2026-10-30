import express from "express";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import pool from "../database/db.js";

const router = express.Router();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post("/google", async (req, res) => {
  const { credential } = req.body;

  if (!credential) {
    return res.status(400).json({
      message: "Credential is required",
    });
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({
      message: "Server authentication is not configured",
    });
  }

  try {
    // 1. Verify Google credential
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload?.sub || !payload.email || !payload.email_verified) {
      return res.status(401).json({
        message: "Invalid Google token",
      });
    }

    // 2. Find the user in PostgreSQL
    const result = await pool.query(
      "SELECT * FROM users WHERE google_id = $1",
      [payload.sub]
    );

    const existingUser = result.rows[0];

    // 3. If the user does not exist, create them
    let user = existingUser;

    if (!existingUser) {
      const newUser = await pool.query(
        `INSERT INTO users
          (google_id, email, name, picture)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
        [
          payload.sub,
          payload.email,
          payload.name,
          payload.picture,
        ]
      );

      user = newUser.rows[0];
    }

    // 4. Create PivoTal JWT
  const token = jwt.sign(
  {
    sub: payload.sub,
    userId: user.id,
    email: payload.email,
  },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);
    // 5. Send response
    return res.status(200).json({
      message: "Google login successful",
      token: token,
      user: {
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
       onboardingCompleted: user.onboarding_completed,
    });
    
  } catch (error) {
    console.error("Google login error:", error);

    return res.status(401).json({
      message: "Google token verification failed",
    });
  }
});

export default router;