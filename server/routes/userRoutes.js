import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import pool from "../database/db.js";

const router = express.Router();
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT
        users.id,
        users.email,
        users.name,
        users.picture,
        users.onboarding_completed,

        student_profiles.exam_date,
        student_profiles.level,
        student_profiles.study_time,
        student_profiles.mock_experience,
        student_profiles.challenge,
        student_profiles.math_topic,
        student_profiles.gat_topic

       FROM users

       LEFT JOIN student_profiles
         ON users.id = student_profiles.user_id

       WHERE users.google_id = $1`,
      [req.user.sub]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Get user error:", error);

    res.status(500).json({
      message: "Failed to get user",
    });
  }
});

router.post("/onboarding", authMiddleware, async (req, res) => {
  const {
    examDate,
    level,
    studyTime,
    mockExperience,
    challenge,
    mathTopic,
    gatTopic,
  } = req.body;

  try {
    // Find the PostgreSQL user using the Google ID
    const userResult = await pool.query(
      "SELECT id FROM users WHERE google_id = $1",
      [req.user.sub]
    );

    if (userResult.rows.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const userId = userResult.rows[0].id;

    // Save the onboarding information
   const result = await pool.query(
  `INSERT INTO student_profiles
    (
      user_id,
      exam_date,
      level,
      study_time,
      mock_experience,
      challenge,
      math_topic,
      gat_topic
    )
   VALUES ($1, $2, $3, $4, $5, $6, $7, $8)

   ON CONFLICT (user_id)
   DO UPDATE SET
     exam_date = EXCLUDED.exam_date,
     level = EXCLUDED.level,
     study_time = EXCLUDED.study_time,
     mock_experience = EXCLUDED.mock_experience,
     challenge = EXCLUDED.challenge,
     math_topic = EXCLUDED.math_topic,
     gat_topic = EXCLUDED.gat_topic,
     updated_at = CURRENT_TIMESTAMP

   RETURNING *`,
  [
    userId,
    examDate,
    level,
    studyTime,
    mockExperience,
    challenge,
    mathTopic || null,
    gatTopic || null,
  ]
);
    // Mark onboarding as completed
    await pool.query(
      `UPDATE users
       SET onboarding_completed = TRUE
       WHERE id = $1`,
      [userId]
    );

    res.status(201).json({
      message: "Onboarding saved successfully",
      profile: result.rows[0],
    });
  } catch (error) {
    console.error("Onboarding save error:", error);

    res.status(500).json({
      message: "Failed to save onboarding",
    });
  }
});

export default router;