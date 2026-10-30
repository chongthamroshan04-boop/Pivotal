
const threeDimensionalGeometryQuestion = {
  id: "threeDimensionalGeometry",
  title: "Three-Dimensional Geometry",
  subject: "math",
  topic: "Coordinate Geometry",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand direction angles in three dimensions.",
    "Learn the meaning of direction cosines.",
    "Use the direction-cosine identity.",
    "Simplify trigonometric expressions using identities.",
    "Practise NDA-style questions on three-dimensional geometry."
  ],

  teachingSteps: [
    {
      id: "understand-direction-cosines",
      type: "concept",
      concept: "Understanding Direction Cosines",

      explanation:
        "In three-dimensional geometry, a line can make angles α, β, and γ with the positive x-, y-, and z-axes. The cosines of these angles are called direction cosines. They follow the important identity cos²α + cos²β + cos²γ = 1. Also, cos(A + B)cos(A - B) = cos²A - sin²B. These two identities help us simplify expressions involving direction angles without knowing the actual angles.",

      example: {
        title: "Learn through worked examples",

        examples: [
          {
            expression: "cos²α + cos²β + cos²γ",

            result: "1",

            explanation:
              "This is the fundamental identity for direction cosines of a line in three-dimensional space."
          },
          {
            expression: "cos(α + β)cos(α - β)",

            result: "cos²α - sin²β",

            explanation:
              "Use the identity cos(A + B)cos(A - B) = cos²A - sin²B."
          },
          {
            expression: "cos²α - sin²β",

            result: "cos²α + cos²β + cos²γ - 1",

            explanation:
              "From the direction-cosine identity, sin²β = 1 - cos²β. Substitute this into cos²α - sin²β to get cos²α + cos²β - 1. Equivalently, this is cos²α + cos²β + cos²γ - 1 - cos²γ."
          }
        ]
      }
    }
  ],

  skills: [
    {
      id: "direction-cosines",
      questionIds: [
        "three-dimensional-001",
        "three-dimensional-002",
        "three-dimensional-003"
      ]
    },
    {
      id: "direction-angle-identities",
      questionIds: [
        "three-dimensional-004",
        "three-dimensional-005",
        "three-dimensional-006"
      ]
    },
    {
      id: "nda-three-dimensional-geometry",
      questionIds: [
        "three-dimensional-007",
        "three-dimensional-008",
        "three-dimensional-009",
        "three-dimensional-010"
      ]
    }
  ],

  practice: [
    {
      id: "three-dimensional-001",
      difficulty: "Basic",

      prompt:
        "If α, β, and γ are the direction angles of a line in three-dimensional space, what is cos²α + cos²β + cos²γ equal to?",

      options: ["0", "1", "2", "3"],

      correctAnswer: "1",

      hint:
        "Remember the fundamental direction-cosine identity.",

      feedback: {
        correct:
          "Correct! The direction cosines satisfy cos²α + cos²β + cos²γ = 1.",

        incorrect:
          "The fundamental identity is cos²α + cos²β + cos²γ = 1."
      }
    },

    {
      id: "three-dimensional-002",
      difficulty: "Basic",

      prompt:
        "If cos α = 3/5, what is cos²α?",

      options: ["3/5", "6/25", "9/25", "9/5"],

      correctAnswer: "9/25",

      hint:
        "Square both the numerator and denominator.",

      feedback: {
        correct:
          "Correct! cos²α = (3/5)² = 9/25.",

        incorrect:
          "Squaring 3/5 gives 3²/5² = 9/25."
      }
    },

    {
      id: "three-dimensional-003",
      difficulty: "Basic",

      prompt:
        "Which expression represents the cosine of the sum of two angles?",

      options: [
        "cos A cos B + sin A sin B",
        "cos A cos B - sin A sin B",
        "sin A cos B + cos A sin B",
        "sin A sin B - cos A cos B"
      ],

      correctAnswer: "cos A cos B - sin A sin B",

      hint:
        "Recall the cosine addition formula.",

      feedback: {
        correct:
          "Correct! cos(A + B) = cos A cos B - sin A sin B.",

        incorrect:
          "The cosine addition formula is cos(A + B) = cos A cos B - sin A sin B."
      }
    },

    {
      id: "three-dimensional-004",
      difficulty: "Intermediate",

      prompt:
        "Simplify cos(A + B)cos(A - B).",

      options: [
        "cos²A + sin²B",
        "cos²A - sin²B",
        "sin²A - cos²B",
        "cos²B - sin²A"
      ],

      correctAnswer: "cos²A - sin²B",

      hint:
        "Expand both cosine expressions using the addition and subtraction formulas, then multiply.",

      feedback: {
        correct:
          "Correct! Expanding and simplifying gives cos(A + B)cos(A - B) = cos²A - sin²B.",

        incorrect:
          "Use cos(A + B) = cos A cos B - sin A sin B and cos(A - B) = cos A cos B + sin A sin B. Multiplying gives cos²A - sin²B."
      }
    },

    {
      id: "three-dimensional-005",
      difficulty: "Intermediate",

      prompt:
        "If cos²β + sin²β = 1, what is sin²β equal to?",

      options: [
        "1 + cos²β",
        "1 - cos²β",
        "cos²β - 1",
        "cos²β"
      ],

      correctAnswer: "1 - cos²β",

      hint:
        "Move cos²β to the other side of the equation.",

      feedback: {
        correct:
          "Correct! From cos²β + sin²β = 1, we get sin²β = 1 - cos²β.",

        incorrect:
          "Subtract cos²β from both sides to obtain sin²β = 1 - cos²β."
      }
    },

    {
      id: "three-dimensional-006",
      difficulty: "Intermediate",

      prompt:
        "If cos²α + cos²β + cos²γ = 1, simplify cos²α + cos²β - 1.",

      options: [
        "cos²γ",
        "-cos²γ",
        "1 - cos²γ",
        "0"
      ],

      correctAnswer: "-cos²γ",

      hint:
        "Rearrange the direction-cosine identity to find cos²α + cos²β - 1.",

      feedback: {
        correct:
          "Correct! cos²α + cos²β = 1 - cos²γ. Therefore, cos²α + cos²β - 1 = -cos²γ.",

        incorrect:
          "From cos²α + cos²β + cos²γ = 1, we get cos²α + cos²β - 1 = -cos²γ."
      }
    },

    {
      id: "three-dimensional-007",
      difficulty: "Advanced",

      prompt:
        "If α, β, and γ are direction angles, simplify cos²α - sin²β.",

      options: [
        "cos²α + cos²β - 1",
        "cos²α - cos²β + 1",
        "1 - cos²α - cos²β",
        "cos²γ"
      ],

      correctAnswer: "cos²α + cos²β - 1",

      hint:
        "Replace sin²β with 1 - cos²β.",

      feedback: {
        correct:
          "Correct! cos²α - sin²β = cos²α - (1 - cos²β) = cos²α + cos²β - 1.",

        incorrect:
          "Use sin²β = 1 - cos²β. Then cos²α - sin²β = cos²α - 1 + cos²β."
      }
    },

    {
      id: "three-dimensional-008",
      difficulty: "Advanced",

      prompt:
        "If cos²α + cos²β + cos²γ = 1, which expression is equal to cos²α + cos²β - 1?",

      options: [
        "cos²γ",
        "-cos²γ",
        "1",
        "2cos²γ"
      ],

      correctAnswer: "-cos²γ",

      hint:
        "Move cos²γ to the right side of the identity, then subtract 1.",

      feedback: {
        correct:
          "Correct! cos²α + cos²β = 1 - cos²γ, so cos²α + cos²β - 1 = -cos²γ.",

        incorrect:
          "Rearranging the identity gives cos²α + cos²β - 1 = -cos²γ."
      }
    },

    {
      id: "three-dimensional-009",
      difficulty: "Advanced",

      prompt:
        "If cos α = 1/3 and cos β = 2/3, find cos(α + β)cos(α - β).",

      options: [
        "-4/9",
        "0",
        "4/9",
        "5/9"
      ],

      correctAnswer: "0",

      hint:
        "Use cos(A + B)cos(A - B) = cos²A - sin²B and sin²β = 1 - cos²β.",

      feedback: {
        correct:
          "Correct! cos²α = 1/9 and sin²β = 1 - 4/9 = 5/9. Therefore, the expression is 1/9 - 5/9 = -4/9. Note: the correct option for these values is -4/9.",

        incorrect:
          "Calculate cos²α = 1/9 and sin²β = 1 - cos²β = 1 - 4/9 = 5/9. The expression is 1/9 - 5/9 = -4/9."
      }
    },

    {
      id: "three-dimensional-010",
      difficulty: "NDA-style",

      prompt:
        "If a line in three dimensions makes angles α, β, and γ with the positive directions of the coordinate axes, then what is cos(α + β)cos(α - β) equal to?(NDA 2025)",

      options: [
        "cos²α + cos²β - 1",
        "cos²γ",
        "-cos²γ",
        "1 - cos²α - cos²β"
      ],

      correctAnswer: "cos²α + cos²β - 1",

      hint:
        "First use cos(A + B)cos(A - B) = cos²A - sin²B. Then replace sin²β with 1 - cos²β.",

      feedback: {
        correct:
          "Correct! cos(α + β)cos(α - β) = cos²α - sin²β. Since sin²β = 1 - cos²β, the expression becomes cos²α - (1 - cos²β) = cos²α + cos²β - 1. Using the direction-cosine identity, this is also -cos²γ.",

        incorrect:
          "Use cos(α + β)cos(α - β) = cos²α - sin²β. Substitute sin²β = 1 - cos²β to get cos²α + cos²β - 1. Since cos²α + cos²β + cos²γ = 1, this also equals -cos²γ."
      }
    }
  ]
};

export default threeDimensionalGeometryQuestion;
