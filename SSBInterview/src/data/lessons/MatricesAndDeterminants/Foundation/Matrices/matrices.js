
const matricesAndDeterminantsQuestion = {
  id: "matricesAndDeterminants",
  title: "Matrices and Determinants",
  subject: "math",
  topic: "Matrices and Determinants",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand the determinant of a square matrix.",
    "Learn the determinant property of a transpose.",
    "Understand the determinant of a product of matrices.",
    "Use determinant properties to simplify expressions.",
    "Practise NDA-style questions on matrices and determinants."
  ],

  teachingSteps: [
    {
      id: "understand-determinant-properties",
      type: "concept",
      concept: "Determinants of Transpose and Product",

      explanation:
        "A determinant is a number calculated from a square matrix. Two useful properties make questions easier: first, the determinant of a transpose is unchanged, so |Aᵀ| = |A|. Second, the determinant of a product is the product of the determinants, so |AB| = |A||B|. Therefore, |AAᵀ| = |A||Aᵀ| = |A|². If |A| = -2, then |AAᵀ| = (-2)² = 4.",

      example: {
        title: "Learn through worked examples",

        examples: [
          {
            expression: "|A| = 3. Find |Aᵀ|.",

            result: "3",

            explanation:
              "The determinant of a matrix and its transpose are equal. Therefore, |Aᵀ| = |A| = 3."
          },
          {
            expression: "|A| = 5 and |B| = 2. Find |AB|.",

            result: "10",

            explanation:
              "Use |AB| = |A||B| = 5 × 2 = 10."
          },
          {
            expression: "|A| = -2. Find |AAᵀ|.",

            result: "4",

            explanation:
              "Use |AAᵀ| = |A||Aᵀ|. Since |Aᵀ| = |A| = -2, the answer is (-2)(-2) = 4."
          }
        ]
      }
    }
  ],

  skills: [
    {
      id: "determinant-basics",
      questionIds: [
        "matrices-determinants-001",
        "matrices-determinants-002",
        "matrices-determinants-003"
      ]
    },
    {
      id: "determinant-properties",
      questionIds: [
        "matrices-determinants-004",
        "matrices-determinants-005",
        "matrices-determinants-006"
      ]
    },
    {
      id: "nda-matrices-determinants",
      questionIds: [
        "matrices-determinants-007",
        "matrices-determinants-008",
        "matrices-determinants-009",
        "matrices-determinants-010"
      ]
    }
  ],

  practice: [
    {
      id: "matrices-determinants-001",
      difficulty: "Basic",

      prompt:
        "If |A| = 4, what is |Aᵀ|?",

      options: ["-4", "0", "4", "16"],

      correctAnswer: "4",

      hint:
        "Remember the relationship between a matrix's determinant and the determinant of its transpose.",

      feedback: {
        correct:
          "Correct! The determinant of a transpose is unchanged, so |Aᵀ| = |A| = 4.",

        incorrect:
          "Use the property |Aᵀ| = |A|. Therefore, the answer is 4."
      }
    },

    {
      id: "matrices-determinants-002",
      difficulty: "Basic",

      prompt:
        "If |A| = 3 and |B| = 2, find |AB|.",

      options: ["5", "6", "1", "12"],

      correctAnswer: "6",

      hint:
        "Multiply the determinants of A and B.",

      feedback: {
        correct:
          "Correct! |AB| = |A||B| = 3 × 2 = 6.",

        incorrect:
          "The determinant of a product is the product of the determinants: 3 × 2 = 6."
      }
    },

    {
      id: "matrices-determinants-003",
      difficulty: "Basic",

      prompt:
        "If |A| = -5, what is |Aᵀ|?",

      options: ["5", "-5", "25", "-25"],

      correctAnswer: "-5",

      hint:
        "Transposing a matrix does not change its determinant.",

      feedback: {
        correct:
          "Correct! |Aᵀ| = |A| = -5.",

        incorrect:
          "The determinant of a transpose equals the original determinant, so the answer is -5."
      }
    },

    {
      id: "matrices-determinants-004",
      difficulty: "Intermediate",

      prompt:
        "If |A| = 4, find |AAᵀ|.",

      options: ["4", "8", "16", "-16"],

      correctAnswer: "16",

      hint:
        "Use |AAᵀ| = |A||Aᵀ|.",

      feedback: {
        correct:
          "Correct! |AAᵀ| = 4 × 4 = 16.",

        incorrect:
          "Since |Aᵀ| = |A| = 4, we get |AAᵀ| = 4 × 4 = 16."
      }
    },

    {
      id: "matrices-determinants-005",
      difficulty: "Intermediate",

      prompt:
        "If |A| = -3 and |B| = 4, find |AB|.",

      options: ["-12", "12", "1", "-7"],

      correctAnswer: "-12",

      hint:
        "Multiply -3 by 4.",

      feedback: {
        correct:
          "Correct! |AB| = |A||B| = (-3) × 4 = -12.",

        incorrect:
          "The determinant of the product is (-3) × 4 = -12."
      }
    },

    {
      id: "matrices-determinants-006",
      difficulty: "Intermediate",

      prompt:
        "If |A| = 2, find |A²|.",

      options: ["2", "4", "8", "-4"],

      correctAnswer: "4",

      hint:
        "Write A² as AA and use the product property.",

      feedback: {
        correct:
          "Correct! |A²| = |AA| = |A||A| = 2 × 2 = 4.",

        incorrect:
          "Since A² = AA, its determinant is |A|² = 2² = 4."
      }
    },

    {
      id: "matrices-determinants-007",
      difficulty: "Advanced",

      prompt:
        "If |A| = -4, find |AAᵀ|.",

      options: ["-16", "-8", "8", "16"],

      correctAnswer: "16",

      hint:
        "The determinant of the transpose is also -4.",

      feedback: {
        correct:
          "Correct! |AAᵀ| = |A||Aᵀ| = (-4)(-4) = 16.",

        incorrect:
          "Since |Aᵀ| = -4, the required determinant is (-4) × (-4) = 16."
      }
    },

    {
      id: "matrices-determinants-008",
      difficulty: "Advanced",

      prompt:
        "If |A| = 2 and |B| = -3, find |ABᵀ|.",

      options: ["-6", "6", "-1", "12"],

      correctAnswer: "-6",

      hint:
        "Use |Bᵀ| = |B| before applying the product property.",

      feedback: {
        correct:
          "Correct! |ABᵀ| = |A||Bᵀ| = 2 × (-3) = -6.",

        incorrect:
          "Because |Bᵀ| = |B| = -3, we get |ABᵀ| = 2 × (-3) = -6."
      }
    },

    {
      id: "matrices-determinants-009",
      difficulty: "Advanced",

      prompt:
        "If |A| = -2, find |(AAᵀ)A|.",

      options: ["-8", "-4", "4", "8"],

      correctAnswer: "-8",

      hint:
        "Use the product property for all three matrix factors.",

      feedback: {
        correct:
          "Correct! |(AAᵀ)A| = |A||Aᵀ||A| = (-2)(-2)(-2) = -8.",

        incorrect:
          "The determinant of the product is (-2) × (-2) × (-2) = -8."
      }
    },

    {
      id: "matrices-determinants-010",
      difficulty: "NDA-style",

      prompt:
        "NDA 2026 Matrices & Determinants PYQ: If A is a square matrix such that |A| = -2, then |AAᵀ|, where Aᵀ is the transpose of A, is equal to:",

      options: ["-4", "1", "2", "4"],

      correctAnswer: "4",

      hint:
        "Use |AB| = |A||B| and |Aᵀ| = |A|.",

      feedback: {
        correct:
          "Correct! |AAᵀ| = |A||Aᵀ| = (-2)(-2) = 4. Therefore, option (d) is correct.",

        incorrect:
          "The determinant of a transpose equals the original determinant, so |Aᵀ| = -2. Therefore, |AAᵀ| = (-2)(-2) = 4. The correct answer is option (d)."
      }
    }
  ]
};

export default matricesAndDeterminantsQuestion;
