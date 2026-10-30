import dotenv from "dotenv"; //dotenv is a package that helps your Node.js backend load environment variables from a .env file.

dotenv.config();

import Express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import missionProgressRoutes from "./routes/missionProgressRoutes.js";
import pool from "./database/db.js";
const App = Express();

App.use(cors());
App.use(Express.json());

App.use("/users", userRoutes);
App.use("/auth", authRoutes);
App.use("/mission-progress", missionProgressRoutes);
App.get("/", (req, res) => {
  res.status(200).send("PivoTal API is running");
});

App.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await pool.query("SELECT NOW()");

    console.log("PostgreSQL connected");

    const server = App.listen(PORT, (error) => {
      if (error) {
        console.error("Server failed to start:", error);
        process.exit(1);
      }

      console.log(`Server running on port ${PORT}`);
    });

    process.on("SIGTERM", () => {
      console.log("SIGTERM received. Shutting down server...");

      server.close(async () => {
        await pool.end();

        console.log("Server closed");
        process.exit(0);
      });
    });
  } catch (error) {
    console.error("PostgreSQL connection failed:", error.message);
    process.exit(1);
  }
}

startServer();