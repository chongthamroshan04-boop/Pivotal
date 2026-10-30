
const inverseTrigonometryQuestion = {
  id: "inverseTrigonometry",
  title: "Inverse Trigonometric Functions",
  subject: "math",
  topic: "Trigonometry",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand inverse trigonometric functions.",
    "Learn the principal values of inverse sine, cosine, and tangent.",
    "Evaluate common inverse trigonometric expressions.",
    "Solve NDA-style inverse trigonometry questions."
  ],

  teachingSteps: [
    {
      id: "understand-inverse-trigonometric-functions",
      type: "concept",
      concept: "Understanding Inverse Trigonometric Functions",

      explanation:
        "An inverse trigonometric function helps us find an angle when we know a trigonometric ratio. For example, sin⁻¹(1/2) = 30° = π/6 because sin 30° = 1/2. For 0 ≤ x ≤ 1, sin⁻¹x lies between 0 and π/2. Remember that sin⁻¹x means inverse sine, not 1/sin x.",

      example: {
        title: "Find the angle",

        examples: [
          {
            expression: "sin⁻¹(1/2)",

            result: "π/6 or 30°",

            explanation:
              "We know sin 30° = 1/2. Therefore, sin⁻¹(1/2) = 30° = π/6."
          },
          {
            expression: "sin⁻¹(1)",

            result: "π/2 or 90°",

            explanation:
              "Since sin 90° = 1, the inverse sine of 1 is π/2."
          }
        ]
      }
    }
  ],

  skills: [
    {
      id: "inverse-trig-basic-values",
      questionIds: [
        "inverse-trig-001",
        "inverse-trig-002",
        "inverse-trig-003"
      ]
    },
    {
      id: "inverse-trig-identities",
      questionIds: [
        "inverse-trig-004",
        "inverse-trig-005",
        "inverse-trig-006"
      ]
    },
    {
      id: "inverse-trig-nda-problems",
      questionIds: [
        "inverse-trig-007",
        "inverse-trig-008",
        "inverse-trig-009",
        "inverse-trig-010"
      ]
    }
  ],

  practice: [
    {
      id: "inverse-trig-001",
      difficulty: "Basic",

      prompt:
        "What is sin⁻¹(1)?",

      options: ["0", "π/6", "π/4", "π/2"],

      correctAnswer: "π/2",

      hint:
        "Which angle has a sine value of 1?",

      feedback: {
        correct:
          "Correct! sin 90° = 1, so sin⁻¹(1) = π/2.",

        incorrect:
          "The sine of 90° is 1. Therefore, sin⁻¹(1) = π/2."
      }
    },

    {
      id: "inverse-trig-002",
      difficulty: "Basic",

      prompt:
        "Find sin⁻¹(1/2).",

      options: ["π/6", "π/4", "π/3", "π/2"],

      correctAnswer: "π/6",

      hint:
        "Remember the sine value of 30°.",

      feedback: {
        correct:
          "Correct! sin 30° = 1/2, so sin⁻¹(1/2) = π/6.",

        incorrect:
          "Since sin 30° = 1/2, the answer is 30° or π/6."
      }
    },

    {
      id: "inverse-trig-003",
      difficulty: "Basic",

      prompt:
        "Find tan⁻¹(1).",

      options: ["π/6", "π/4", "π/3", "π/2"],

      correctAnswer: "π/4",

      hint:
        "Which angle has a tangent value of 1?",

      feedback: {
        correct:
          "Correct! tan 45° = 1, so tan⁻¹(1) = π/4.",

        incorrect:
          "tan 45° = 1. Therefore, tan⁻¹(1) = π/4."
      }
    },

    {
      id: "inverse-trig-004",
      difficulty: "Intermediate",

      prompt:
        "Find cos⁻¹(1/2).",

      options: ["π/6", "π/4", "π/3", "π/2"],

      correctAnswer: "π/3",

      hint:
        "Which angle between 0 and π has cosine 1/2?",

      feedback: {
        correct:
          "Correct! cos 60° = 1/2, so cos⁻¹(1/2) = π/3.",

        incorrect:
          "cos 60° = 1/2. Therefore, cos⁻¹(1/2) = π/3."
      }
    },

    {
      id: "inverse-trig-005",
      difficulty: "Intermediate",

      prompt:
        "For 0 ≤ x ≤ 1, if sin⁻¹x = π/6, find x.",

      options: ["0", "1/2", "√3/2", "1"],

      correctAnswer: "1/2",

      hint:
        "Apply sine to both sides.",

      feedback: {
        correct:
          "Correct! x = sin(π/6) = 1/2.",

        incorrect:
          "If sin⁻¹x = π/6, then x = sin(π/6) = 1/2."
      }
    },

    {
      id: "inverse-trig-006",
      difficulty: "Intermediate",

      prompt:
        "For 0 ≤ x ≤ 1, if sin⁻¹x = cos⁻¹x, find x.",

      options: ["0", "1/2", "1/√2", "1"],

      correctAnswer: "1/√2",

      hint:
        "The two angles add up to π/2. If they are equal, each angle is π/4.",

      feedback: {
        correct:
          "Correct! Each angle is π/4, so x = sin(π/4) = 1/√2.",

        incorrect:
          "Since sin⁻¹x + cos⁻¹x = π/2, equal angles must each be π/4. Thus x = 1/√2."
      }
    },

    {
      id: "inverse-trig-007",
      difficulty: "Advanced",

      prompt:
        "Find tan⁻¹(1) + tan⁻¹(1).",

      options: ["π/4", "π/2", "3π/4", "π"],

      correctAnswer: "π/2",

      hint:
        "First find tan⁻¹(1), then add the two equal angles.",

      feedback: {
        correct:
          "Correct! Each tan⁻¹(1) is π/4. Their sum is π/2.",

        incorrect:
          "tan⁻¹(1) = π/4. Therefore, π/4 + π/4 = π/2."
      }
    },

    {
      id: "inverse-trig-008",
      difficulty: "Advanced",

      prompt:
        "For 0 ≤ x ≤ 1, if sin⁻¹x = π/3, find x².",

      options: ["1/4", "1/2", "3/4", "1"],

      correctAnswer: "3/4",

      hint:
        "First find x using sine, then square it.",

      feedback: {
        correct:
          "Correct! x = sin(π/3) = √3/2. Therefore, x² = 3/4.",

        incorrect:
          "x = sin(π/3) = √3/2. Squaring gives x² = 3/4."
      }
    },

    {
      id: "inverse-trig-009",
      difficulty: "Advanced",

      prompt:
        "If 0 ≤ x ≤ 1 and sin⁻¹x = π/2, find x⁵.",

      options: ["0", "1/2", "1", "5"],

      correctAnswer: "1",

      hint:
        "First find x using the sine of π/2.",

      feedback: {
        correct:
          "Correct! x = sin(π/2) = 1, so x⁵ = 1.",

        incorrect:
          "Since sin(π/2) = 1, x = 1. Therefore, x⁵ = 1."
      }
    },

    {
      id: "inverse-trig-010",
      difficulty: "NDA PYQ",

      prompt:
        "Let sin⁻¹x + sin⁻¹y + sin⁻¹z = 3π/2 for 0 ≤ x, y, z ≤ 1. What is the value of x¹⁰⁰⁰ + y¹⁰⁰¹ + z¹⁰⁰²?",

      options: ["0", "1", "3", "6"],

      correctAnswer: "3",

      hint:
        "Each inverse sine value is at most π/2. What must each value be if their sum is 3π/2?",

      feedback: {
        correct:
          "Correct! Each inverse sine value is at most π/2. Their sum reaches 3π/2 only when all three equal π/2. Therefore, x = y = z = 1, and the required sum is 1 + 1 + 1 = 3.",

        incorrect:
          "Because 0 ≤ x, y, z ≤ 1, each inverse sine lies between 0 and π/2. Their sum is 3π/2, so each must equal π/2. Thus x = y = z = 1, giving 1¹⁰⁰⁰ + 1¹⁰⁰¹ + 1¹⁰⁰² = 3."
      }
    }
  ]
};

export default inverseTrigonometryQuestion;
