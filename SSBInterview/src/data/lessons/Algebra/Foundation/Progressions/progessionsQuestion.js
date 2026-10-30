const algebraSequencesSeriesQuestion = {
  id: "algebra-sequences-series",
  title: "Sequences and Series: AP, GP and HP",
  subject: "Mathematics",
  topic: "Algebra",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Recognize arithmetic, geometric, and harmonic progressions.",
    "Understand the relationships between consecutive terms.",
    "Use logarithms to test whether terms form an arithmetic progression.",
    "Apply progression concepts to NDA-level questions.",
    "Build the skills needed to solve the final NDA previous-year question.",
  ],

  skills: [
    {
      id: "recognize-ap",
      questionIds: [
        "algebra-sequences-series-001",
        "algebra-sequences-series-004",
        "algebra-sequences-series-007",
      ],
    },
    {
      id: "recognize-gp",
      questionIds: [
        "algebra-sequences-series-002",
        "algebra-sequences-series-005",
        "algebra-sequences-series-008",
      ],
    },
    {
      id: "recognize-hp",
      questionIds: [
        "algebra-sequences-series-003",
        "algebra-sequences-series-006",
        "algebra-sequences-series-009",
      ],
    },
  ],

  teachingSteps: [
    {
      id: "understand-ap-gp-hp",
      type: "concept",
      concept: "Understanding AP, GP and HP",

      explanation:
        "An arithmetic progression (AP) has a constant difference between consecutive terms. A geometric progression (GP) has a constant ratio between consecutive nonzero terms. A harmonic progression (HP) is a sequence whose reciprocals form an AP.",

      example: {
        title: "Recognize the three progressions",
        examples: [
          {
            expression: "2, 5, 8, 11",
            result: "AP",
            explanation:
              "The difference between consecutive terms is always 3.",
          },
          {
            expression: "2, 6, 18, 54",
            result: "GP",
            explanation:
              "Each term is obtained by multiplying the previous term by 3.",
          },
          {
            expression: "1, 1/2, 1/3, 1/4",
            result: "HP",
            explanation:
              "The reciprocals are 1, 2, 3, 4, which form an AP.",
          },
        ],
      },

      interaction: {
        type: "single-choice",
        questionId: "algebra-sequences-series-001",
        skill: "recognize-ap",
      },
    },
  ],

  practice: [
    // Q1 — Very easy: recognize AP
    {
      id: "algebra-sequences-series-001",
      difficulty: "Basic",
      prompt:
        "Which sequence is an arithmetic progression (AP)?",
      options: [
        "2, 4, 6, 8",
        "2, 4, 8, 16",
        "1, 2, 4, 8",
        "1, 1/2, 1/3, 1/4",
      ],
      correctAnswer: "2, 4, 6, 8",
      feedback: {
        correct:
          "Correct! An AP has a constant difference between consecutive terms. Here, each term increases by 2.",
        incorrect:
          "Check the difference between consecutive terms. In an AP, the difference must remain constant. In 2, 4, 6, 8, each difference is 2.",
      },
      hint:
        "Subtract each term from the term immediately after it.",
    },

    // Q2 — Very easy: recognize GP
    {
      id: "algebra-sequences-series-002",
      difficulty: "Basic",
      prompt:
        "Which sequence is a geometric progression (GP)?",
      options: [
        "3, 6, 9, 12",
        "2, 6, 18, 54",
        "1, 3, 5, 7",
        "4, 7, 10, 13",
      ],
      correctAnswer: "2, 6, 18, 54",
      feedback: {
        correct:
          "Correct! Each term is obtained by multiplying the previous term by 3. The common ratio is 3.",
        incorrect:
          "A GP has a constant ratio between consecutive terms. Divide each term by the previous term to check the ratio.",
      },
      hint:
        "Instead of subtracting consecutive terms, divide them.",
    },

    // Q3 — Easy: recognize HP
    {
      id: "algebra-sequences-series-003",
      difficulty: "Basic",
      prompt:
        "Which sequence is a harmonic progression (HP)?",
      options: [
        "1, 2, 3, 4",
        "2, 4, 8, 16",
        "1, 1/2, 1/3, 1/4",
        "2, 5, 8, 11",
      ],
      correctAnswer: "1, 1/2, 1/3, 1/4",
      feedback: {
        correct:
          "Correct! The reciprocals of these terms are 1, 2, 3, 4, which form an AP.",
        incorrect:
          "An HP is identified by taking the reciprocals of its terms. Those reciprocals must form an AP.",
      },
      hint:
        "Take the reciprocal of every term, then check whether the new sequence is an AP.",
    },

    // Q4 — Easy to medium: identify the common difference
    {
      id: "algebra-sequences-series-004",
      difficulty: "Basic",
      prompt:
        "The sequence 7, 11, 15, 19, ... is an AP. What is its common difference?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "4",
      feedback: {
        correct:
          "Correct! Subtract consecutive terms: 11 − 7 = 4 and 15 − 11 = 4. The common difference is 4.",
        incorrect:
          "The common difference is found by subtracting one term from the next. Here, 11 − 7 = 4.",
      },
      hint:
        "Subtract the first term from the second term.",
    },

    // Q5 — Medium: find the common ratio
    {
      id: "algebra-sequences-series-005",
      difficulty: "Intermediate",
      prompt:
        "The sequence 3, 6, 12, 24, ... is a GP. What is its common ratio?",
      options: ["2", "3", "4", "6"],
      correctAnswer: "2",
      feedback: {
        correct:
          "Correct! Divide consecutive terms: 6 ÷ 3 = 2 and 12 ÷ 6 = 2. The common ratio is 2.",
        incorrect:
          "The common ratio is the quotient of a term divided by the previous term. Here, 6 ÷ 3 = 2.",
      },
      hint:
        "Divide the second term by the first term.",
    },

    // Q6 — Medium: use the relationship for three GP terms
    {
      id: "algebra-sequences-series-006",
      difficulty: "Intermediate",
      prompt:
        "If a, b, c are consecutive positive terms of a GP, which relationship must hold?",
      options: [
        "b = a + c",
        "b² = ac",
        "a² = bc",
        "a + b = c",
      ],
      correctAnswer: "b² = ac",
      feedback: {
        correct:
          "Correct! In a GP, b/a = c/b. Multiplying across gives b² = ac.",
        incorrect:
          "For consecutive nonzero GP terms, the ratio from a to b equals the ratio from b to c: b/a = c/b. Therefore, b² = ac.",
      },
      hint:
        "Set the ratio of the second term to the first equal to the ratio of the third term to the second.",
    },

    // Q7 — Medium to hard: logarithms and AP
    {
      id: "algebra-sequences-series-007",
      difficulty: "Intermediate",
      prompt:
        "If x, y, z are positive terms in GP, which statement is always true?",
      options: [
        "ln(x), ln(y), ln(z) are in AP",
        "ln(x), ln(y), ln(z) are in GP",
        "x, y, z must be in HP",
        "ln(x) + ln(y) = ln(z) for every such GP",
      ],
      correctAnswer: "ln(x), ln(y), ln(z) are in AP",
      feedback: {
        correct:
          "Correct! Since x, y, z are in GP, y² = xz. Taking natural logarithms gives 2 ln(y) = ln(x) + ln(z), which is the condition for three terms to be in AP.",
        incorrect:
          "Since x, y, z are positive and in GP, y² = xz. Taking logarithms gives 2 ln(y) = ln(x) + ln(z), so their logarithms form an AP.",
      },
      hint:
        "Start with y² = xz, then take the natural logarithm of both sides.",
    },

    // Q8 — Harder: combine AP and GP concepts
    {
      id: "algebra-sequences-series-008",
      difficulty: "Hard",
      prompt:
        "Three positive numbers x, y, z are in GP. If x = 2 and z = 18, what is y?",
      options: ["6", "8", "9", "10"],
      correctAnswer: "6",
      feedback: {
        correct:
          "Correct! For three consecutive GP terms, y² = xz. Thus y² = 2 × 18 = 36. Because y is positive, y = 6.",
        incorrect:
          "Use y² = xz for three consecutive GP terms. Substituting x = 2 and z = 18 gives y² = 36. Since y is positive, y = 6.",
      },
      hint:
        "Use the square of the middle term and the product of the outer terms.",
    },

    // Q9 — Hard: prepare for the final multi-statement question
    {
      id: "algebra-sequences-series-009",
      difficulty: "Hard",
      prompt:
        "Positive numbers x, y, z are in GP. Which statement must be true?\n\n1. y² = xz.\n2. ln(x), ln(y), ln(z) form an AP.\n3. ln(x) + ln(y) = ln(z).",
      options: [
        "1 only",
        "2 only",
        "1 and 2 only",
        "1, 2 and 3",
      ],
      correctAnswer: "1 and 2 only",
      feedback: {
        correct:
          "Correct! Statement 1 follows from the GP relationship. Taking logarithms of y² = xz gives 2 ln(y) = ln(x) + ln(z), so statement 2 is true. Statement 3 is not generally true.",
        incorrect:
          "Check each statement separately. A GP satisfies y² = xz. Taking logarithms shows that ln(x), ln(y), ln(z) form an AP. However, ln(x) + ln(y) = ln(z) does not follow from the GP condition.",
      },
      hint:
        "Use the GP relationship first, then take logarithms. Check whether each statement follows for every positive GP.",
    },

    // Q10 — Actual NDA PYQ from your book.
    // Verify statement 2 from the printed book before publishing.
    {
      id: "algebra-sequences-series-nda-010",
      difficulty: "Hard",
      source: {
        type: "previous-year-question",
        exam: "NDA",
        year: 2021,
        session: "II",
        verificationStatus: "wording-needs-verification",
      },
      prompt:
        "If x, y, z are in GP, then which of the following is/are correct?\n\n1. ln(3x), ln(3y), ln(3z) are in AP.\n2. [Verify the exact wording of statement 2 from your book.]\n\nSelect the correct answer using the code given below.",
      options: [
        "1 only",
        "2 only",
        "Both 1 and 2",
        "Neither 1 nor 2",
      ],
      correctAnswer: null,
      feedback: {
        correct:
          "Review the GP relationship and test each statement separately before choosing the answer.",
        incorrect:
          "Use the definitions of GP and AP, and check each statement independently. Confirm the exact wording of statement 2 in the original book.",
      },
      hint:
        "For statement 1, use the relationship between x, y and z in a GP and apply logarithms.",
    },
  ],
};

export default algebraSequencesSeriesQuestion;