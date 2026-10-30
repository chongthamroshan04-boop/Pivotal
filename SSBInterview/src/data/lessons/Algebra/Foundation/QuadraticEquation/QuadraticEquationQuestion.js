const quadraticEquationQuestion = {
  id: "algebra-quadratic-equations",
  title: "Quadratic Equations",
  subject: "Mathematics",
  topic: "Algebra",
  level: "Beginner",
  estimatedMinutes: 25,

  objectives: [
    "Understand quadratic equations",
    "Recognize the roots of a quadratic equation",
    "Use the relationship between roots and coefficients",
    "Understand powers and repeated patterns of roots",
    "Solve NDA-style quadratic equation questions"
  ],

teachingSteps: [
  {
    id: "understand-quadratic-equations",
    type: "concept",
    concept: "Understanding Quadratic Equations",

    explanation:
      "A quadratic equation is an equation in which the highest power of x is 2. Its standard form is ax² + bx + c = 0, where a is not zero.",

    example: {
      title: "Recognize a quadratic equation",
      examples: [
        {
          expression: "x² + 2x + 1 = 0",
          result: "Quadratic equation",
          explanation:
            "The highest power of x is 2."
        },
        {
          expression: "2x + 3 = 0",
          result: "Not a quadratic equation",
          explanation:
            "The highest power of x is 1."
        }
      ]
    }
  },
  {
    id: "understand-roots-of-quadratic-equations",
    type: "concept",
    concept: "Understanding Roots",

    explanation:
      "Roots are the values of x that make an equation equal to zero.",

    example: {
      title: "Find the roots",
      examples: [
        {
          expression: "x² - 5x + 6 = 0",
          result: "x = 2 or x = 3",
          explanation:
            "Both values make the equation equal to zero."
        }
      ]
    }
  },
  {
    id: "understand-roots-and-coefficients",
    type: "concept",
    concept: "Sum and Product of Roots",

    explanation:
      "For ax² + bx + c = 0, the sum of the roots is -b/a, and their product is c/a.",

    example: {
      title: "Use the coefficients",
      examples: [
        {
          expression: "x² - 5x + 6 = 0",
          result: "Sum = 5, Product = 6",
          explanation:
            "Here a = 1, b = -5, and c = 6."
        }
      ]
    }
  },
  {
    id: "understand-powers-of-roots",
    type: "concept",
    concept: "Working with Powers",

    explanation:
      "When x² + x + 1 = 0, we can use x² + x = -1 to simplify expressions containing higher powers of x.",

    example: {
      title: "Simplify a higher power",
      examples: [
        {
          expression: "x² + x + 1 = 0",
          result: "x³ = 1",
          explanation:
            "Multiplying by x - 1 gives x³ - 1 = 0."
        }
      ]
    }
  }
],

  skills: [
    {
      id: "quadratic-basics",
      questionIds: [
        "quadratic-equations-001",
        "quadratic-equations-002",
        "quadratic-equations-003"
      ]
    },
    {
      id: "quadratic-roots",
      questionIds: [
        "quadratic-equations-004",
        "quadratic-equations-005",
        "quadratic-equations-006"
      ]
    },
    {
      id: "quadratic-powers",
      questionIds: [
        "quadratic-equations-007",
        "quadratic-equations-008",
        "quadratic-equations-009",
        "quadratic-equations-nda-010"
      ]
    }
  ],

  practice: [
    {
      id: "quadratic-equations-001",
      difficulty: "easy",
      prompt: "Which of the following is a quadratic equation?",
      options: [
        "2x + 3 = 0",
        "x² + 2x + 1 = 0",
        "x³ + x = 0",
        "1/x + 2 = 0"
      ],
      correctAnswer: "x² + 2x + 1 = 0",
      hint: "Look at the highest power of x.",
      feedback: {
        correct:
          "A quadratic equation has degree 2, meaning the highest power of its variable is 2.",
        incorrect:
          "A quadratic equation has degree 2. Check the highest power of x in each option."
      }
    },

    {
      id: "quadratic-equations-002",
      difficulty: "easy",
      prompt: "Which are the roots of x² − 5x + 6 = 0?",
      options: [
        "2 and 3",
        "1 and 6",
        "-2 and -3",
        "0 and 6"
      ],
      correctAnswer: "2 and 3",
      hint: "Find two numbers whose product is 6 and whose sum is 5.",
      feedback: {
        correct:
          "The equation factors as (x − 2)(x − 3) = 0, so its roots are 2 and 3.",
        incorrect:
          "The roots must make the equation equal zero. Factoring gives (x − 2)(x − 3) = 0."
      }
    },

    {
      id: "quadratic-equations-003",
      difficulty: "easy",
      prompt: "If x² − 7x + 12 = 0, what is the sum of its roots?",
      options: ["-7", "7", "12", "-12"],
      correctAnswer: "7",
      hint: "For ax² + bx + c = 0, the sum of roots is −b/a.",
      feedback: {
        correct:
          "The sum is −b/a. Here a = 1 and b = −7, so the sum is 7.",
        incorrect:
          "Use −b/a, not the constant term. Here −(−7)/1 = 7."
      }
    },

    {
      id: "quadratic-equations-004",
      difficulty: "medium",
      prompt: "If x² − 4x + 3 = 0, what is the product of its roots?",
      options: ["-4", "3", "4", "-3"],
      correctAnswer: "3",
      hint: "For ax² + bx + c = 0, the product of roots is c/a.",
      feedback: {
        correct:
          "The product is c/a. Here c = 3 and a = 1, so the product is 3.",
        incorrect:
          "The product of roots is c/a. The constant term is 3 and the coefficient of x² is 1."
      }
    },

    {
      id: "quadratic-equations-005",
      difficulty: "medium",
      prompt: "If x² + x + 1 = 0, what is x² + x?",
      options: ["-1", "0", "1", "2"],
      correctAnswer: "-1",
      hint: "Move the constant term to the other side of the equation.",
      feedback: {
        correct:
          "Since x² + x + 1 = 0, subtracting 1 gives x² + x = −1.",
        incorrect:
          "Rearrange the given equation: x² + x + 1 = 0, so x² + x = −1."
      }
    },

    {
      id: "quadratic-equations-006",
      difficulty: "medium",
      prompt: "If x² + x + 1 = 0, what is x³?",
      options: ["-1", "0", "1", "x"],
      correctAnswer: "1",
      hint: "Multiply x² + x + 1 = 0 by (x − 1).",
      feedback: {
        correct:
          "The identity x³ − 1 = (x − 1)(x² + x + 1) gives x³ − 1 = 0, so x³ = 1.",
        incorrect:
          "Using x³ − 1 = (x − 1)(x² + x + 1), the right side is zero, giving x³ = 1."
      }
    },

    {
      id: "quadratic-equations-007",
      difficulty: "medium",
      prompt: "If x² + x + 1 = 0, what is x⁶?",
      options: ["-1", "0", "1", "x"],
      correctAnswer: "1",
      hint: "First find x³, then square that result.",
      feedback: {
        correct:
          "Because x³ = 1, x⁶ = (x³)² = 1² = 1.",
        incorrect:
          "The earlier relationship gives x³ = 1. Therefore x⁶ = (x³)² = 1."
      }
    },

    {
      id: "quadratic-equations-008",
      difficulty: "hard",
      prompt: "If x² + x + 1 = 0, what is x⁸ + x⁹?",
      options: ["-1", "0", "1", "2"],
      correctAnswer: "-1",
      hint: "Use x³ = 1 to reduce the powers, then use x² + x = −1.",
      feedback: {
        correct:
          "Since x³ = 1, x⁸ = x² and x⁹ = 1. Thus x⁸ + x⁹ = x² + 1 = −x.",
        incorrect:
          "Reduce the powers using x³ = 1. Then x⁸ + x⁹ = x² + 1 = −x, which is not necessarily −1."
      }
    },

    {
      id: "quadratic-equations-009",
      difficulty: "hard",
      prompt: "If x² + x + 1 = 0, what is x¹⁰ + x¹¹ + x¹²?",
      options: ["-1", "0", "1", "3"],
      correctAnswer: "0",
      hint: "Factor out x¹⁰ and use x³ = 1.",
      feedback: {
        correct:
          "The expression is x¹⁰(1 + x + x²). Since x² + x + 1 = 0, the expression equals 0.",
        incorrect:
          "Factor the expression as x¹⁰(1 + x + x²). The bracket equals zero by the given equation."
      }
    },

    {
      id: "quadratic-equations-nda-010",
      difficulty: "hard",
      source: {
        type: "previous-year-question",
        exam: "NDA",
        year: 2021,
        session: "II",
        verificationStatus: "user-provided"
      },
      prompt:
        "If x² + x + 1 = 0, then what is the value of x¹⁹⁹ + x²⁰⁰ + x²⁰¹? (NDA,2021-II)      ",
      options: ["-1", "0", "1", "3"],
      correctAnswer: "0",
      hint:
        "Factor out x¹⁹⁹ and look at the expression that remains in brackets.",
      feedback: {
        correct:
          "Factor out x¹⁹⁹ to get x¹⁹⁹(1 + x + x²). The bracket is zero because x² + x + 1 = 0, so the answer is 0.",
        incorrect:
          "Factor out x¹⁹⁹. The remaining factor is 1 + x + x², which equals zero from the given equation."
      }
    }
  ]
};

export default quadraticEquationQuestion;