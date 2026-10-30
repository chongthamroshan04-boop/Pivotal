export function createMissionProgress(mission) {
  return {
    missionId: mission?.id || "mission-1",
    lessonId: mission?.lessonId || null,

    currentTeachingStep: 0,

    attempts: [],

    masteryReached: false,

    masteredSkills: [],

    weakSkills: [],
  };
}

export function addMissionAttempt(progress, attempt) {
  return {
    ...progress,

    attempts: [...progress.attempts, attempt],
  };
}

export function updateMissionMastery(progress, analysis) {
  return {
    ...progress,

    masteryReached: analysis.masteryReached,

    masteredSkills: analysis.masteredSkills,

    weakSkills: analysis.weakSkills,
  };
}

export function moveToTeachingStep(progress, nextStep) {
  return {
    ...progress,

    currentTeachingStep: nextStep,
  };
}