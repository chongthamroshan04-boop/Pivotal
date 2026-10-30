const LEVEL_OPTIONS = {
  beginner: {
    level: "Beginner",
    difficulty: "Basic",
    explanation: "full",
    showExamples: true,
    showHints: true,
    guidedPractice: true,
    timedPractice: false,
    allowSkipLesson: false,
  },

  intermediate: {
    level: "Intermediate",
    difficulty: "Standard",
    explanation: "medium",
    showExamples: true,
    showHints: true,
    guidedPractice: false,
    timedPractice: false,
    allowSkipLesson: true,
  },

  advanced: {
    level: "Advanced",
    difficulty: "Advanced",
    explanation: "brief",
    showExamples: false,
    showHints: false,
    guidedPractice: false,
    timedPractice: true,
    allowSkipLesson: true,
  },
};

export function createLevelPlan(level) {
  const plan = LEVEL_OPTIONS[level?.toLowerCase()];

  if (!plan) {
    throw new Error(`Unsupported preparation level: ${level}`);
  }

  return { ...plan };
}

export default createLevelPlan;
