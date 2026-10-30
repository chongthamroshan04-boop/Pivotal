function analyzeMissionPerformance(results) {
  const totalQuestions = results.length;

  const correctAnswers = results.filter(
    (result) => result.correct
  ).length;

  const incorrectAnswers =
    totalQuestions - correctAnswers;

  const accuracy =
    totalQuestions > 0
      ? correctAnswers / totalQuestions
      : 0;
const skillPerformance = {};

results.forEach((result) => {
  const skill = result.skill;

  if (!skill) return;

  if (!skillPerformance[skill]) {
    skillPerformance[skill] = {
      correct: 0,
      incorrect: 0,
    };
  }

  if (result.correct) {
    skillPerformance[skill].correct += 1;
  } else {
    skillPerformance[skill].incorrect += 1;
  }
});
 return {
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  accuracy,
  skillPerformance,

  masteredSkills: Object.entries(skillPerformance)
    .filter(
      ([, performance]) =>
        performance.correct > performance.incorrect
    )
    .map(([skill]) => skill),

  weakSkills: Object.entries(skillPerformance)
    .filter(
      ([, performance]) =>
        performance.incorrect >= performance.correct
    )
    .map(([skill]) => skill),

  masteryReached:
    totalQuestions > 0 &&
    accuracy >= 0.8 &&
    Object.keys(skillPerformance).length > 0 &&
    Object.values(skillPerformance).every(
      (performance) => performance.correct > performance.incorrect
    ),
};
}

export default analyzeMissionPerformance;