export async function getMissionProgress() {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "http://localhost:5000/mission-progress",
    {
      method: "GET",

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to get mission progress"
    );
  }

  return data.progress;
}

export async function saveMissionProgress(progress) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "http://localhost:5000/mission-progress",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        missionId: progress.missionId,
        lessonId: progress.lessonId,
        currentTeachingStep: progress.currentTeachingStep,
        attempts: progress.attempts,
        masteryReached: progress.masteryReached,
        masteredSkills: progress.masteredSkills,
        weakSkills: progress.weakSkills,
           completed: progress.completed,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to save mission progress"
    );
  }

  return data.progress;
}