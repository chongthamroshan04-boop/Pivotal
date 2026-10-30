const limitContinuityAndDifferentiabilityQuestion = {
  id: "Limit_Continuity_And_Differentiability",
  title: "Limits, Continuity and Differentiability",
  subject: "math",
  topic: "Limit, Continuity and Differentiability",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand the meaning of a limit.",
    "Learn standard trigonometric and exponential limits.",
    "Apply limit formulas to evaluate mathematical expressions.",
    "Understand how L'Hôpital's rule can evaluate certain limits.",
    "Practise NDA-style questions on limits and differential calculus."
  ],

  teachingSteps: [
    {
      id: "understand-standard-limits",
      type: "concept",
      concept: "Standard Limits and Exponential Functions",

      explanation:
        "A limit describes the value that a function approaches when x approaches a particular number. In limit questions, directly substituting a value may sometimes give the indeterminate form 0/0. In such cases, we may simplify the expression or use a suitable limit formula. Two important standard limits are lim(x→0) (sin x)/x = 1 and lim(x→0) (aˣ − 1)/x = ln a, where a > 0. Angles in standard trigonometric limits are measured in radians. Another useful formula is lim(x→0) (1 − cos x)/x² = 1/2. L'Hôpital's rule can also be used for suitable 0/0 or infinity/infinity forms by differentiating the numerator and denominator separately.",

      example: {
        title: "Learn through worked examples",

        examples: [
          {
            expression: "lim(x→0) (sin x)/x",

            result: "1",

            explanation:
              "This is a standard trigonometric limit. As x approaches zero, sin x divided by x approaches 1."
          },
          {
            expression: "lim(x→0) (2ˣ − 1)/x",

            result: "ln 2",

            explanation:
              "Use the standard exponential limit lim(x→0) (aˣ − 1)/x = ln a. Here a = 2, so the answer is ln 2."
          },
          {
            expression: "lim(x→0) (10^(sin x) − 1)/(tan x)",

            result: "ln 10",

            explanation:
              "As x approaches zero, both the numerator and denominator approach zero. Using L'Hôpital's rule, differentiate the numerator and denominator separately. The numerator's derivative is 10^(sin x) × ln 10 × cos x, and the denominator's derivative is sec² x. Substituting x = 0 gives (1 × ln 10 × 1)/1 = ln 10."
          }
        ]
      }
    }
  ],

  skills: [
    {
      id: "standard-trigonometric-limits",
      questionIds: [
        "limits-continuity-differentiability-001",
        "limits-continuity-differentiability-002",
        "limits-continuity-differentiability-003"
      ]
    },
    {
      id: "standard-exponential-limits",
      questionIds: [
        "limits-continuity-differentiability-004",
        "limits-continuity-differentiability-005",
        "limits-continuity-differentiability-006"
      ]
    },
    {
      id: "advanced-and-nda-limits",
      questionIds: [
        "limits-continuity-differentiability-007",
        "limits-continuity-differentiability-008",
        "limits-continuity-differentiability-009",
        "limits-continuity-differentiability-010"
      ]
    }
  ],

  practice: [
    {
      id: "limits-continuity-differentiability-001",
      difficulty: "Basic",

      prompt:
        "Evaluate lim(x→0) (sin x)/x.",

      options: ["0", "1", "-1", "Does not exist"],

      correctAnswer: "1",

      hint:
        "Recall the standard trigonometric limit involving sin x divided by x.",

      feedback: {
        correct:
          "Correct! The standard limit lim(x→0) (sin x)/x = 1.",

        incorrect:
          "This is a standard trigonometric limit. As x approaches zero, (sin x)/x approaches 1."
      }
    },

    {
      id: "limits-continuity-differentiability-002",
      difficulty: "Basic",

      prompt:
        "Evaluate lim(x→0) (tan x)/x.",

      options: ["0", "1", "2", "Does not exist"],

      correctAnswer: "1",

      hint:
        "Write tan x as sin x divided by cos x.",

      feedback: {
        correct:
          "Correct! Since tan x = sin x/cos x, the limit is 1/1 = 1.",

        incorrect:
          "Use tan x = sin x/cos x. Then (tan x)/x = [(sin x)/x]/cos x. The limit is 1/1 = 1."
      }
    },

    {
      id: "limits-continuity-differentiability-003",
      difficulty: "Basic",

      prompt:
        "Evaluate lim(x→0) (sin 3x)/x.",

      options: ["1", "2", "3", "0"],

      correctAnswer: "3",

      hint:
        "Rewrite the expression as 3 × (sin 3x)/(3x).",

      feedback: {
        correct:
          "Correct! Write (sin 3x)/x = 3 × (sin 3x)/(3x). The standard limit is 1, so the answer is 3.",

        incorrect:
          "Multiply and divide by 3: (sin 3x)/x = 3 × (sin 3x)/(3x). As x approaches zero, the second factor approaches 1. Therefore, the answer is 3."
      }
    },

    {
      id: "limits-continuity-differentiability-004",
      difficulty: "Intermediate",

      prompt:
        "Evaluate lim(x→0) (2ˣ − 1)/x.",

      options: ["0", "1", "ln 2", "2"],

      correctAnswer: "ln 2",

      hint:
        "Use the standard exponential limit lim(x→0) (aˣ − 1)/x = ln a.",

      feedback: {
        correct:
          "Correct! Applying the standard exponential limit with a = 2 gives ln 2.",

        incorrect:
          "The standard formula is lim(x→0) (aˣ − 1)/x = ln a. Substituting a = 2 gives ln 2."
      }
    },

    {
      id: "limits-continuity-differentiability-005",
      difficulty: "Intermediate",

      prompt:
        "Evaluate lim(x→0) (eˣ − 1)/x.",

      options: ["0", "1", "e", "2"],

      correctAnswer: "1",

      hint:
        "Remember that eˣ is the exponential function whose natural logarithm is 1.",

      feedback: {
        correct:
          "Correct! Using lim(x→0) (aˣ − 1)/x = ln a, with a = e, gives ln e = 1.",

        incorrect:
          "Apply the exponential limit formula. The result is ln e, and ln e = 1."
      }
    },

    {
      id: "limits-continuity-differentiability-006",
      difficulty: "Intermediate",

      prompt:
        "Evaluate lim(x→0) (1 − cos x)/x².",

      options: ["0", "1", "1/2", "2"],

      correctAnswer: "1/2",

      hint:
        "Recall the standard limit involving 1 − cos x divided by x squared.",

      feedback: {
        correct:
          "Correct! The standard limit lim(x→0) (1 − cos x)/x² = 1/2.",

        incorrect:
          "This is a standard trigonometric limit: lim(x→0) (1 − cos x)/x² = 1/2."
      }
    },

    {
      id: "limits-continuity-differentiability-007",
      difficulty: "Advanced",

      prompt:
        "Evaluate lim(x→0) (e^(2x) − 1)/x.",

      options: ["1", "2", "e²", "0"],

      correctAnswer: "2",

      hint:
        "Let u = 2x and rewrite the expression using (eᵘ − 1)/u.",

      feedback: {
        correct:
          "Correct! Rewrite (e^(2x) − 1)/x as 2 × (e^(2x) − 1)/(2x). The standard limit is 1, so the answer is 2.",

        incorrect:
          "Rewrite the expression as 2 × (e^(2x) − 1)/(2x). Since lim(u→0) (eᵘ − 1)/u = 1, the required limit is 2."
      }
    },

    {
      id: "limits-continuity-differentiability-008",
      difficulty: "Advanced",

      prompt:
        "Evaluate lim(x→0) (3^(sin x) − 1)/(tan x).",

      options: ["0", "1", "ln 3", "log₃ e"],

      correctAnswer: "ln 3",

      hint:
        "Use the exponential limit formula with u = sin x, and remember that sin x/tan x = cos x.",

      feedback: {
        correct:
          "Correct! Write the expression as [(3^(sin x) − 1)/sin x] × [sin x/tan x]. The first factor approaches ln 3 and the second approaches 1. Therefore, the answer is ln 3.",

        incorrect:
          "Rewrite the expression as [(3^(sin x) − 1)/sin x] × cos x. The first factor approaches ln 3, and cos x approaches 1. The answer is ln 3."
      }
    },

    {
      id: "limits-continuity-differentiability-009",
      difficulty: "Advanced",

      prompt:
        "Evaluate lim(x→0) (10^(2x) − 1)/(sin x).",

      options: ["ln 10", "2 ln 10", "10 ln 10", "0"],

      correctAnswer: "2 ln 10",

      hint:
        "Multiply and divide by 2x, then use the exponential limit and sin x/x → 1.",

      feedback: {
        correct:
          "Correct! Rewrite the expression as [(10^(2x) − 1)/(2x)] × [2x/sin x]. The first factor approaches ln 10 and the second approaches 2. Therefore, the answer is 2 ln 10.",

        incorrect:
          "Rewrite the expression as [(10^(2x) − 1)/(2x)] × [2x/sin x]. These factors approach ln 10 and 2, respectively, so the answer is 2 ln 10."
      }
    },

    {
      id: "limits-continuity-differentiability-010",
      difficulty: "NDA-style",

      prompt:
        "NDA 2026 Mathematics Paper 1 — Limit, Continuity and Differentiability PYQ: What is lim(x→0) (10^(sin x) − 1)/(tan x) equal to?",

      options: ["0", "1", "ln 10", "log₁₀ e"],

      correctAnswer: "ln 10",

      hint:
        "The expression gives the indeterminate form 0/0. You can use L'Hôpital's rule by differentiating the numerator and denominator separately.",

      feedback: {
        correct:
          "Correct! By L'Hôpital's rule, differentiate the numerator to get 10^(sin x) × ln 10 × cos x and the denominator to get sec² x. At x = 0, the expression becomes (1 × ln 10 × 1)/1 = ln 10. Therefore, option (c) is correct.",

        incorrect:
          "As x approaches zero, both the numerator and denominator approach zero. By L'Hôpital's rule, the limit becomes [10^(sin x) × ln 10 × cos x]/sec² x. Substituting x = 0 gives ln 10, so option (c) is correct."
      }
    }
  ]
};

export default limitContinuityAndDifferentiabilityQuestion;
