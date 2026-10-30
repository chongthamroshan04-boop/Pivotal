
const EXPERIENCE_OPTIONS = {
  No: {
    level: "Beginner",
    practiceType: "Mini Quiz",
    fullMock: false,
  },
  Yes: {
    level: "Experienced",
    practiceType: "Full Mock",
    fullMock: true,
  },
};

/**
 * Chooses the appropriate practice format from mock-test experience.
 *
 * @param {"Yes" | "No"} mockExperience Whether the student has taken mock tests.
 * @returns {{level: string, practiceType: string, fullMock: boolean}}
 */
export function createExperiencePlan(mockExperience) {
  const plan = EXPERIENCE_OPTIONS[mockExperience];

  if (!plan) {
    throw new Error(`Unsupported mock-test experience: ${mockExperience}`);
  }

  return { ...plan };
}

export default createExperiencePlan;