
const propertiesOfDeterminantsQuestion = {
  id: "propertiesOfDeterminants",
  title: "Properties of Determinants",
  subject: "math",
  topic: "Matrices and Determinants",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand what a determinant is.",
    "Learn how to calculate 2×2 and 3×3 determinants.",
    "Understand important properties of determinants.",
    "Solve NDA-style determinant questions."
  ],

  teachingSteps: [
    {
      id: "understand-properties-of-determinants",
      type: "concept",
      concept: "Understanding Determinants",

      explanation:
        "A determinant is a number calculated from a square matrix. For a 2×2 determinant, multiply the top-left number by the bottom-right number, then subtract the product of the other diagonal. For a 3×3 determinant, expand using a row or column. Remember these important properties: if a row or column is multiplied by a number k, the determinant is also multiplied by k. If two rows or columns are identical, the determinant is zero. If a row or column contains only zeros, the determinant is zero. For NDA questions, look for these properties before doing lengthy calculations.",

      example: {
        title: "Learn through worked examples",

        examples: [
          {
            expression: "| 2  3; 4  5 |",

            result: "-2",

            explanation:
              "Multiply the main diagonal: 2 × 5 = 10. Multiply the other diagonal: 3 × 4 = 12. Subtract: 10 - 12 = -2."
          },
          {
            expression:
              "| 1  2  0; 3  4  0; 0  0  1 |",

            result: "-2",

            explanation:
              "Expand using the third column. Only the last entry is nonzero, so the determinant equals 1 × |1 2; 3 4| = 1 × (4 - 6) = -2."
          },
          {
            expression:
              "A determinant has its first column multiplied by p and its third column multiplied by q.",

            result: "New determinant = pqΔ",

            explanation:
              "Multiplying one column by p multiplies the determinant by p. Multiplying another column by q multiplies it by q. Therefore, the new determinant is pqΔ."
          }
        ]
      }
    }
  ],

  skills: [
    {
      id: "determinants-basic",
      questionIds: [
        "determinants-001",
        "determinants-002",
        "determinants-003"
      ]
    },
    {
      id: "determinants-properties",
      questionIds: [
        "determinants-004",
        "determinants-005",
        "determinants-006"
      ]
    },
    {
      id: "determinants-nda-practice",
      questionIds: [
        "determinants-007",
        "determinants-008",
        "determinants-009",
        "determinants-010"
      ]
    }
  ],

  practice: [
    {
      id: "determinants-001",
      difficulty: "Basic",

      prompt:
        "Find the value of the determinant | 2  3; 4  5 |.",

      options: ["-2", "2", "22", "-22"],

      correctAnswer: "-2",

      hint:
        "Multiply the main diagonal, then subtract the product of the other diagonal.",

      feedback: {
        correct:
          "Correct! The determinant is (2 × 5) - (3 × 4) = 10 - 12 = -2.",

        incorrect:
          "For a 2×2 determinant, use ad - bc. Here, (2 × 5) - (3 × 4) = 10 - 12 = -2."
      }
    },

    {
      id: "determinants-002",
      difficulty: "Basic",

      prompt:
        "Find the value of | 3  0; 0  4 |.",

      options: ["0", "7", "12", "-12"],

      correctAnswer: "12",

      hint:
        "Multiply the two diagonal entries. The other diagonal has a product of zero.",

      feedback: {
        correct:
          "Correct! The determinant is (3 × 4) - (0 × 0) = 12.",

        incorrect:
          "Use ad - bc. The answer is (3 × 4) - (0 × 0) = 12."
      }
    },

    {
      id: "determinants-003",
      difficulty: "Basic",

      prompt:
        "What is the value of a determinant if one of its rows contains only zeros?",

      options: [
        "1",
        "The sum of the other entries",
        "0",
        "It is always undefined"
      ],

      correctAnswer: "0",

      hint:
        "A row of zeros makes every term in the determinant expansion zero.",

      feedback: {
        correct:
          "Correct! A determinant with an entire row of zeros has value zero.",

        incorrect:
          "Every term in the determinant expansion contains an entry from that row. Since all those entries are zero, the determinant is zero."
      }
    },

    {
      id: "determinants-004",
      difficulty: "Intermediate",

      prompt:
        "If Δ is a determinant and every entry in its first column is multiplied by 3, what is the new determinant?",

      options: ["Δ", "3Δ", "Δ + 3", "9Δ"],

      correctAnswer: "3Δ",

      hint:
        "Multiplying one entire column by a number multiplies the determinant by that number.",

      feedback: {
        correct:
          "Correct! Multiplying one column by 3 changes the determinant from Δ to 3Δ.",

        incorrect:
          "Only one column is multiplied by 3, so the new determinant is 3Δ, not 9Δ."
      }
    },

    {
      id: "determinants-005",
      difficulty: "Intermediate",

      prompt:
        "If two rows of a determinant are identical, what is its value?",

      options: ["1", "-1", "0", "It depends on the entries"],

      correctAnswer: "0",

      hint:
        "Remember the property for two identical rows.",

      feedback: {
        correct:
          "Correct! A determinant with two identical rows has value zero.",

        incorrect:
          "When two rows are identical, the determinant is zero. This is an important property for NDA questions."
      }
    },

    {
      id: "determinants-006",
      difficulty: "Intermediate",

      prompt:
        "If Δ is the value of a determinant and one column is multiplied by 2 while another column is multiplied by 5, what is the new determinant?",

      options: ["2Δ", "5Δ", "7Δ", "10Δ"],

      correctAnswer: "10Δ",

      hint:
        "Multiply the determinant by both column multipliers.",

      feedback: {
        correct:
          "Correct! The new determinant is 2 × 5 × Δ = 10Δ.",

        incorrect:
          "Each column multiplier affects the determinant. Therefore, the new value is 2 × 5 × Δ = 10Δ."
      }
    },

    {
      id: "determinants-007",
      difficulty: "Advanced",

      prompt:
        "Find the value of | 1  2  0; 3  4  0; 0  0  1 |.",

      options: ["-2", "2", "0", "4"],

      correctAnswer: "-2",

      hint:
        "Expand using the third column, which contains two zeros.",

      feedback: {
        correct:
          "Correct! Expanding along the third column gives 1 × |1 2; 3 4| = (1 × 4) - (2 × 3) = -2.",

        incorrect:
          "Expand along the third column. The result is 1 × (1 × 4 - 2 × 3) = 4 - 6 = -2."
      }
    },

    {
      id: "determinants-008",
      difficulty: "Advanced",

      prompt:
        "If Δ = | a₁ b₁ c₁; a₂ b₂ c₂; a₃ b₃ c₃ |, what is the value of | 2a₁ b₁ 3c₁; 2a₂ b₂ 3c₂; 2a₃ b₃ 3c₃ |?",

      options: [
        "2Δ",
        "3Δ",
        "5Δ",
        "6Δ"
      ],

      correctAnswer: "6Δ",

      hint:
        "The first column is multiplied by 2 and the third column by 3.",

      feedback: {
        correct:
          "Correct! The first column contributes a factor of 2 and the third contributes a factor of 3. The new determinant is 2 × 3 × Δ = 6Δ.",

        incorrect:
          "Multiply the determinant by each column multiplier: 2 × 3 × Δ = 6Δ."
      }
    },

    {
      id: "determinants-009",
      difficulty: "Advanced",

      prompt:
        "Evaluate | 1  2  3; 1  2  3; 4  5  6 |.",

      options: ["0", "1", "6", "-6"],

      correctAnswer: "0",

      hint:
        "Compare the first and second rows.",

      feedback: {
        correct:
          "Correct! The first and second rows are identical. Therefore, the determinant is zero.",

        incorrect:
          "The first and second rows contain exactly the same entries. A determinant with two identical rows is zero."
      }
    },

    {
      id: "determinants-010",
      difficulty: "NDA PYQ",

      prompt:
        "Question 1 — NDA 2021-II: What is the value of the following determinant? Δ = | cos C  tan A  0; sin B  0  -tan A; 0  sin B  cos C |.",

      options: [
        "-1",
        "0",
        "2 tan A sin B sin C",
        "-2 tan A sin B sin C"
      ],

      correctAnswer: "0",

      hint:
        "Expand the determinant along the first row. The third entry in that row is zero, so its term disappears. Then simplify the remaining two terms.",

      feedback: {
        correct:
          "Correct! Expanding along the first row gives Δ = cos C × [0 × cos C - (-tan A × sin B)] - tan A × [sin B × cos C - (-tan A × 0)] + 0. Simplifying, Δ = tan A sin B cos C - tan A sin B cos C = 0. Therefore, option (b) is correct.",

        incorrect:
          "Expand along the first row. The first term is cos C × (tan A sin B) = tan A sin B cos C. The second term is -tan A × (sin B cos C) = -tan A sin B cos C. The third term is zero. The first two terms cancel, so Δ = 0. Choose option (b)."
      }
    }
  ]
};

export default propertiesOfDeterminantsQuestion;
