const CHALLENGE_OPTIONS = {
  "I don't know where to start studying.": {
    type: "structured-start",
    prioritySubject: "Mathematics",
    focus: "First study task",
    recommendation:
      "Start with a structured study order and complete today's first task.",
  },

  "I don't know which subject to study first.": {
    type: "subject-guidance",
    prioritySubject: "Mathematics",
    focus: "Core concepts",
    recommendation:
      "Begin with the highest-priority subject before moving to other topics.",
  },

  "I struggle to finish the paper on time.": {
    type: "time-management",
    focus: "Speed and accuracy",
    recommendation:
      "Practice exam pacing, question selection, and timed decision-making.",
  },

  "I find Mathematics difficult.": {
    type: "topic-selection",
    subject: "Mathematics",
    recommendation:
      "Choose the Mathematics topics you want to improve.",
  },

  "I find GAT difficult.": {
    type: "topic-selection",
    subject: "GAT",
    recommendation:
      "Choose the GAT topics you want to improve.",
  },
};


/**
 * Identifies the student's highest-priority focus area from their main challenge.
 *
 * @param {string} challenge The student's selected study challenge.
 * @returns {{prioritySubject: string, focus: string, recommendation: string}}
 */
export function createChallengePlan(challenge) {
  const plan = CHALLENGE_OPTIONS[challenge];

  if (!plan) {
    throw new Error(`Unsupported challenge: ${challenge}`);
  }

  return { ...plan };
}

export default createChallengePlan;
