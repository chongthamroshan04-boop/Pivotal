const RANGE_DASH = String.fromCharCode(0x2013);

const STUDY_TIME_OPTIONS = {
  "Less than 1 hour": { totalStudyMinutes: 60, totalTasks: 2 },
  [`1${RANGE_DASH}2 hours`]: { totalStudyMinutes: 120, totalTasks: 3 },
  [`2${RANGE_DASH}4 hours`]: { totalStudyMinutes: 180, totalTasks: 4 },
  "More than 4 hours": { totalStudyMinutes: 240, totalTasks: 5 },
};

/**
 * Creates the time and task limits for today's study plan.
 * Subject and chapter selection belong in generateStudyPlan.js.
 *
 * @param {string} studyTime The student's selected daily study-time range.
 * @returns {{totalStudyMinutes: number, totalTasks: number, minutesPerTask: number}}
 */
export function createStudyTimePlan(studyTime) {
  const plan = STUDY_TIME_OPTIONS[studyTime];

  if (!plan) {
    throw new Error(`Unsupported study time: ${studyTime}`);
  }

  return {
    ...plan,
    minutesPerTask: plan.totalStudyMinutes / plan.totalTasks,
  };
}

export default createStudyTimePlan;
