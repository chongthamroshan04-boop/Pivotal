
const hyperbolicFunctionsQuestion = {
  id: "hyperbolicFunctions",
  title: "Hyperbolic Functions",
  subject: "math",
  topic: "Trigonometry",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand sinh x and cosh x.",
    "Learn the main hyperbolic identities.",
    "Solve double-angle and triple-angle questions.",
    "Prepare for NDA-style questions on hyperbolic functions."
  ],

  teachingSteps: [
    {
      id: "understand-hyperbolic-functions",
      type: "concept",
      concept: "Understanding Hyperbolic Functions",

      explanation:
        "Hyperbolic functions are similar in notation to ordinary trigonometric functions, but they have different identities. The two main functions are sinh x = (eˣ - e⁻ˣ)/2 and cosh x = (eˣ + e⁻ˣ)/2. Remember the most important identity: cosh² x - sinh² x = 1. The double-angle identities are cosh 2x = cosh² x + sinh² x and sinh 2x = 2 sinh x cosh x. The triple-angle identity is sinh 3x = 3 sinh x + 4 sinh³ x. Also, sinh x + cosh x = eˣ and sinh x - cosh x = -e⁻ˣ.",

      example: {
        title: "Learn the main identities",

        examples: [
          {
            expression: "cosh² x - sinh² x",

            result: "1",

            explanation:
              "This is the fundamental hyperbolic identity. Remember that cosh² x and sinh² x are subtracted."
          },
          {
            expression: "sinh 2x",

            result: "2 sinh x cosh x",

            explanation:
              "For sinh 2x, multiply sinh x by cosh x and then multiply the result by 2."
          }
        ]
      }
    }
  ],

  skills: [
    {
      id: "hyperbolic-basic-identities",
      questionIds: [
        "hyperbolic-001",
        "hyperbolic-002",
        "hyperbolic-003"
      ]
    },
    {
      id: "hyperbolic-angle-identities",
      questionIds: [
        "hyperbolic-004",
        "hyperbolic-005",
        "hyperbolic-006"
      ]
    },
    {
      id: "hyperbolic-exponential-identities",
      questionIds: [
        "hyperbolic-007",
        "hyperbolic-008",
        "hyperbolic-009",
        "hyperbolic-010"
      ]
    }
  ],

  practice: [
    {
      id: "hyperbolic-001",
      difficulty: "Basic",

      prompt:
        "Which of the following is the correct hyperbolic identity?",

      options: [
        "cosh² x + sinh² x = 1",
        "cosh² x - sinh² x = 1",
        "cosh² x - sinh² x = -1",
        "None of these"
      ],

      correctAnswer: "cosh² x - sinh² x = 1",

      hint:
        "Remember the fundamental identity. The two squared functions are subtracted.",

      feedback: {
        correct:
          "Correct! The fundamental identity is cosh² x - sinh² x = 1.",

        incorrect:
          "Remember: cosh² x - sinh² x = 1. Do not confuse it with the ordinary trigonometric identity sin² x + cos² x = 1."
      }
    },

    {
      id: "hyperbolic-002",
      difficulty: "Basic",

      prompt:
        "What is the correct expression for cosh 2x?",

      options: [
        "cosh² x - sinh² x",
        "cosh² x + sinh² x",
        "1 - 2sinh² x",
        "None of these"
      ],

      correctAnswer: "cosh² x + sinh² x",

      hint:
        "For cosh 2x, add the squares of cosh x and sinh x.",

      feedback: {
        correct:
          "Correct! cosh 2x = cosh² x + sinh² x.",

        incorrect:
          "The correct double-angle identity is cosh 2x = cosh² x + sinh² x."
      }
    },

    {
      id: "hyperbolic-003",
      difficulty: "Basic",

      prompt:
        "What is the value of 1 - cosh 2x?",

      options: [
        "2sinh² x",
        "-2sinh² x",
        "2cosh² x",
        "None of these"
      ],

      correctAnswer: "-2sinh² x",

      hint:
        "Use cosh 2x = 1 + 2sinh² x, then subtract cosh 2x from 1.",

      feedback: {
        correct:
          "Correct! Since cosh 2x = 1 + 2sinh² x, we get 1 - cosh 2x = -2sinh² x.",

        incorrect:
          "Substitute cosh 2x = 1 + 2sinh² x. Then 1 - cosh 2x = 1 - (1 + 2sinh² x) = -2sinh² x."
      }
    },

    {
      id: "hyperbolic-004",
      difficulty: "Intermediate",

      prompt:
        "Which identity gives the value of sinh 2x?",

      options: [
        "2sinh x cosh x",
        "-2sinh x cosh x",
        "cosh² x + sinh² x",
        "cosh² x - sinh² x"
      ],

      correctAnswer: "2sinh x cosh x",

      hint:
        "The double-angle identity for sinh uses a product of sinh x and cosh x.",

      feedback: {
        correct:
          "Correct! sinh 2x = 2sinh x cosh x.",

        incorrect:
          "Remember the formula: sinh 2x = 2sinh x cosh x."
      }
    },

    {
      id: "hyperbolic-005",
      difficulty: "Intermediate",

      prompt:
        "Which is the correct identity for sinh 3x?",

      options: [
        "3sinh x - 4sinh³ x",
        "4sinh³ x - 3sinh x",
        "3sinh x + 4sinh³ x",
        "None of these"
      ],

      correctAnswer: "3sinh x + 4sinh³ x",

      hint:
        "The hyperbolic triple-angle identity has a plus sign between its two terms.",

      feedback: {
        correct:
          "Correct! sinh 3x = 3sinh x + 4sinh³ x.",

        incorrect:
          "The correct hyperbolic triple-angle identity is sinh 3x = 3sinh x + 4sinh³ x."
      }
    },

    {
      id: "hyperbolic-006",
      difficulty: "Intermediate",

      prompt:
        "Find sinh 0 + cosh 0.",

      options: ["0", "1", "e", "1/e"],

      correctAnswer: "1",

      hint:
        "Remember that sinh 0 = 0 and cosh 0 = 1.",

      feedback: {
        correct:
          "Correct! sinh 0 + cosh 0 = 0 + 1 = 1.",

        incorrect:
          "Since sinh 0 = 0 and cosh 0 = 1, their sum is 1."
      }
    },

    {
      id: "hyperbolic-007",
      difficulty: "Intermediate",

      prompt:
        "What is sinh 3 + cosh 3?",

      options: ["e³", "e⁻³", "e³ + e⁻³", "None of these"],

      correctAnswer: "e³",

      hint:
        "Use the identity sinh x + cosh x = eˣ.",

      feedback: {
        correct:
          "Correct! sinh x + cosh x = eˣ. Putting x = 3 gives e³.",

        incorrect:
          "Using sinh x = (eˣ - e⁻ˣ)/2 and cosh x = (eˣ + e⁻ˣ)/2, their sum is eˣ. Therefore, sinh 3 + cosh 3 = e³."
      }
    },

    {
      id: "hyperbolic-008",
      difficulty: "Advanced",

      prompt:
        "Simplify sinh 2x + cosh 2x.",

      options: ["eˣ", "e²ˣ", "e⁻²ˣ", "2e⁻²ˣ"],

      correctAnswer: "e²ˣ",

      hint:
        "Use sinh t + cosh t = eᵗ, with t = 2x.",

      feedback: {
        correct:
          "Correct! sinh 2x + cosh 2x = e²ˣ.",

        incorrect:
          "Set t = 2x in the identity sinh t + cosh t = eᵗ. The result is e²ˣ."
      }
    },

    {
      id: "hyperbolic-009",
      difficulty: "Advanced",

      prompt:
        "Simplify sinh 3x - cosh 3x.",

      options: [
        "e³ˣ",
        "e⁻³ˣ",
        "-e⁻³ˣ",
        "-e³ˣ"
      ],

      correctAnswer: "-e⁻³ˣ",

      hint:
        "Use the identity sinh t - cosh t = -e⁻ᵗ, with t = 3x.",

      feedback: {
        correct:
          "Correct! sinh 3x - cosh 3x = -e⁻³ˣ.",

        incorrect:
          "Using the definitions, sinh t - cosh t = [(eᵗ - e⁻ᵗ) - (eᵗ + e⁻ᵗ)]/2 = -e⁻ᵗ. Set t = 3x."
      }
    },

    {
      id: "hyperbolic-010",
      difficulty: "NDA-style",

      prompt:
        "If sinh x = 3/4 and x is real, find sinh 2x.",

      options: [
        "3/4",
        "5/4",
        "15/8",
        "15/16"
      ],

      correctAnswer: "15/8",

      hint:
        "First use cosh² x - sinh² x = 1 to find cosh x. For real x, cosh x is positive. Then use sinh 2x = 2sinh x cosh x.",

      feedback: {
        correct:
          "Correct! cosh² x = 1 + (3/4)² = 25/16, so cosh x = 5/4. Then sinh 2x = 2 × 3/4 × 5/4 = 15/8.",

        incorrect:
          "First, cosh² x = 1 + sinh² x = 1 + 9/16 = 25/16, so cosh x = 5/4. Next, sinh 2x = 2sinh x cosh x = 2 × 3/4 × 5/4 = 15/8."
      }
    }
  ]
};

export default hyperbolicFunctionsQuestion;
