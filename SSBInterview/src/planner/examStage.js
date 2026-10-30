// ========================================
// examStage.js
// Responsibility:
// 1. Receive the user's exam date.
// 2. Calculate how many days remain.
// 3. Decide the preparation stage.
// 4. Return the result.
// ========================================

// Input:
// examDate
// Example: "2026-09-15"

// Output:
// {
//   daysRemaining: 67,
//   stage: "Practice"
// }

// Rules:
//
// Days > 180
// → Foundation
//
// Days > 90
// → Learning
//
// Days > 30
// → Practice
//
// Days <= 30
// → Revision
const examStage = (examDate) => {
  // Parse the exam date string into a Date object.
  const exam = new Date(examDate);

  // If the input is invalid, return a standardized error result.
  if (Number.isNaN(exam.getTime())) {
    return {
      daysRemaining: null,
      stage: 'Invalid date',
    };
  }

  const today = new Date();
  // Normalize to midnight UTC to avoid time-of-day issues when comparing dates.
  const utcToday = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const utcExam = Date.UTC(exam.getFullYear(), exam.getMonth(), exam.getDate());

  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const daysRemaining = Math.ceil((utcExam - utcToday) / millisecondsPerDay);

  if (daysRemaining < 0) {
    return {
      daysRemaining,
      stage: 'Past date',
    };
  }

  let stage;
  if (daysRemaining > 180) {
    stage = 'Foundation';
  } else if (daysRemaining > 90) {
    stage = 'Learning';
  } else if (daysRemaining > 30) {
    stage = 'Practice';
  } else {
    stage = 'Revision';
  }

  return {
    daysRemaining,
    stage,
  };
};

export default examStage;

