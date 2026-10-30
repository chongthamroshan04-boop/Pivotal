// This function chooses one question for the student.
//
// "questions" = the list of questions available from the lesson.
// "difficulty" = the difficulty we want to give the student,
//                 for example: "basic", "standard", or "advanced".
//
// We need both because:
// - We need to know WHAT questions are available.
// - We need to know WHICH difficulty we are looking for.
function chooseQuestion(questions, difficulty) {

  // Look through every question in the list.
  //
  // filter() creates a NEW array containing only the questions
  // whose difficulty matches the difficulty we requested.
  //
  // Example:
  // difficulty = "basic"
  //
  // [basic, basic, standard, advanced]
  //   ↓
  // [basic, basic]
  const matchingQuestions = questions.filter(
    (question) => question.difficulty === difficulty
  );

  // Return the first question that matched the requested difficulty.
  //
  // [0] means:
  // "Give me the first item in the array."
  //
  // If there is no matching question, matchingQuestions[0]
  // will be undefined.
  //
  // ?? means:
  // "If the value on the left is missing (null or undefined),
  // use the value on the right instead."
  //
  // So if there is no question with the requested difficulty,
  // we use the first available question as a fallback.
  return matchingQuestions[0] ?? questions[0];
}

// Export the function so another file, such as StudyTopic.jsx,
// can import and use it.
export default chooseQuestion;