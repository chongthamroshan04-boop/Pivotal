import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import pool from "../database/db.js";

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT *
       FROM mission_progress
       WHERE user_id = $1
       ORDER BY mission_id`,
      [req.user.userId]
    );

    res.status(200).json({
      progress: result.rows,
    });
  } catch (error) {
    console.error("Get mission progress error:", error);

    res.status(500).json({
      message: "Failed to get mission progress",
    });
  }
});

router.post("/", authMiddleware, async (req, res) => {
  const {
    missionId,
    lessonId,
    currentTeachingStep,
    attempts,
    masteryReached,
    masteredSkills,
    weakSkills,
      completed,
  } = req.body;

  try {
       const result = await pool.query(
      `INSERT INTO mission_progress (
        user_id,
        mission_id,
        lesson_id,
        current_teaching_step,
        attempts,
        mastery_reached,
        mastered_skills,
        weak_skills,
        completed
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      ON CONFLICT (user_id, mission_id)
      DO UPDATE SET
        lesson_id = EXCLUDED.lesson_id,
        current_teaching_step = EXCLUDED.current_teaching_step,
        attempts = EXCLUDED.attempts,
        mastery_reached = EXCLUDED.mastery_reached,
        mastered_skills = EXCLUDED.mastered_skills,
        weak_skills = EXCLUDED.weak_skills,
        completed = mission_progress.completed OR EXCLUDED.completed,
        updated_at = CURRENT_TIMESTAMP
      RETURNING *`,
      [
        req.user.userId,
        missionId,
        lessonId,
        currentTeachingStep,
        JSON.stringify(attempts || []),
        masteryReached || false,
        JSON.stringify(masteredSkills || []),
        JSON.stringify(weakSkills || []),
        completed === true,
      ]
    );

    res.status(200).json({
      message: "Mission progress saved successfully",
      progress: result.rows[0],
    });
  } catch (error) {
    console.error("Save mission progress error:", error);

    res.status(500).json({
      message: "Failed to save mission progress",
    });
  }
});

export default router;