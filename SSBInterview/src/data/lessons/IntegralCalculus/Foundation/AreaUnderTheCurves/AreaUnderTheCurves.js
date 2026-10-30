const areaUnderTheCurves = {
  id: "Area_Under_The_Curves",
  title: "Area Under the Curves",
  subject: "math",
  topic: "Area Under the Curves",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand how definite integrals calculate areas between curves.",
    "Identify the upper and lower curves on a given interval.",
    "Calculate the area bounded by two curves and vertical lines.",
    "Understand how absolute values affect the equations of curves.",
    "Apply area-under-the-curves concepts to NDA-style questions."
  ],

  teachingSteps: [
    {
      id: "understand-area-between-curves",
      title: "Understanding Area Between Curves",
      explanation:
        "The area between two curves over an interval [a, b] can be calculated by integrating the upper curve minus the lower curve. If f(x) is above g(x) throughout the interval, the area is A = ∫ₐᵇ [f(x) − g(x)] dx. The area is measured in square units.",
      examples: [
        {
          problem: "Find the area between y = 2x and y = x² from x = 0 to x = 1.",
          solution:
            "On [0, 1], 2x is above x². Therefore, A = ∫₀¹ (2x − x²) dx = [x² − x³/3]₀¹ = 1 − 1/3 = 2/3 square unit."
        },
        {
          problem: "Find the area between y = 3 and y = x from x = 0 to x = 2.",
          solution:
            "On [0, 2], y = 3 is above y = x. Therefore, A = ∫₀² (3 − x) dx = [3x − x²/2]₀² = 6 − 2 = 4 square units."
        }
      ]
    },
    {
      id: "understand-absolute-value-curves",
      title: "Understanding Absolute-Value Curves",
      explanation:
        "The absolute value |x| equals x when x ≥ 0 and equals −x when x < 0. Therefore, y = 2|x| becomes y = 2x on the non-negative side of the x-axis. When calculating an area over an interval such as [0, 1], we can use y = 2x directly. To find the area between two curves, identify which curve is above the other and integrate their difference.",
      examples: [
        {
          problem: "Find the area between y = x² and y = 2|x| from x = 0 to x = 1.",
          solution:
            "Since x ≥ 0, |x| = x, so the curves are y = x² and y = 2x. On [0, 1], 2x is above x². The area is A = ∫₀¹ (2x − x²) dx = [x² − x³/3]₀¹ = 1 − 1/3 = 2/3 square unit."
        }
      ]
    }
  ],

  skills: [
    {
      id: "area-between-curves-basics",
      questionIds: [
        "area-under-curves-001",
        "area-under-curves-002",
        "area-under-curves-003"
      ]
    },
    {
      id: "definite-integrals-for-area",
      questionIds: [
        "area-under-curves-004",
        "area-under-curves-005",
        "area-under-curves-006",
        "area-under-curves-007"
      ]
    },
    {
      id: "nda-area-under-curves-practice",
      questionIds: [
        "area-under-curves-008",
        "area-under-curves-009",
        "area-under-curves-010"
      ]
    }
  ],

  practice: [
    {
      id: "area-under-curves-001",
      difficulty: "Basic",
      prompt: "What does the definite integral of a non-negative function represent geometrically?",
      options: [
        "The area under the curve and above the x-axis",
        "The slope of the curve",
        "The derivative of the function",
        "The x-coordinate of the maximum point"
      ],
      correctAnswer: "The area under the curve and above the x-axis",
      hint: "Think about the geometric meaning of integration when the function is non-negative.",
      feedback: {
        correct:
          "Correct! For a non-negative function, its definite integral over an interval represents the area between the curve and the x-axis.",
        incorrect:
          "When the function is non-negative over the interval, its definite integral gives the area between the curve and the x-axis."
      }
    },
    {
      id: "area-under-curves-002",
      difficulty: "Basic",
      prompt: "On the interval [0, 1], which curve lies above the other: y = 2x or y = x²?",
      options: [
        "y = 2x",
        "y = x²",
        "Both curves are always equal",
        "Neither curve"
      ],
      correctAnswer: "y = 2x",
      hint: "Compare 2x and x² for values of x between 0 and 1.",
      feedback: {
        correct:
          "Correct! On [0, 1], 2x ≥ x², so y = 2x lies above y = x².",
        incorrect:
          "For 0 ≤ x ≤ 1, 2x − x² = x(2 − x) ≥ 0. Therefore, y = 2x lies above y = x²."
      }
    },
    {
      id: "area-under-curves-003",
      difficulty: "Basic",
      prompt: "For x ≥ 0, what is |x| equal to?",
      options: ["−x", "x", "x²", "1"],
      correctAnswer: "x",
      hint: "The absolute value of a non-negative number is the number itself.",
      feedback: {
        correct:
          "Correct! For x ≥ 0, |x| = x.",
        incorrect:
          "Absolute value removes the negative sign when necessary. For x ≥ 0, |x| = x."
      }
    },
    {
      id: "area-under-curves-004",
      difficulty: "Basic",
      prompt: "What is the formula for the area between two curves when f(x) is above g(x) on [a, b]?",
      options: [
        "∫ₐᵇ [f(x) + g(x)] dx",
        "∫ₐᵇ [g(x) − f(x)] dx",
        "∫ₐᵇ [f(x) − g(x)] dx",
        "f(b) − g(a)"
      ],
      correctAnswer: "∫ₐᵇ [f(x) − g(x)] dx",
      hint: "Subtract the lower curve from the upper curve.",
      feedback: {
        correct:
          "Correct! Area between curves is found by integrating upper curve minus lower curve.",
        incorrect:
          "When f(x) is above g(x), the area is ∫ₐᵇ [f(x) − g(x)] dx."
      }
    },
    {
      id: "area-under-curves-005",
      difficulty: "Intermediate",
      prompt: "Find the area under y = 2x from x = 0 to x = 1.",
      options: [
        "1/2 square unit",
        "1 square unit",
        "2 square units",
        "3 square units"
      ],
      correctAnswer: "1 square unit",
      hint: "Evaluate ∫₀¹ 2x dx.",
      feedback: {
        correct:
          "Correct! ∫₀¹ 2x dx = [x²]₀¹ = 1 square unit.",
        incorrect:
          "Integrate 2x to obtain x². Evaluating between 0 and 1 gives 1 − 0 = 1 square unit."
      }
    },
    {
      id: "area-under-curves-006",
      difficulty: "Intermediate",
      prompt: "Find the area between y = 2x and y = x² from x = 0 to x = 1.",
      options: [
        "1/3 square unit",
        "1/2 square unit",
        "2/3 square unit",
        "1 square unit"
      ],
      correctAnswer: "2/3 square unit",
      hint: "Set up the integral ∫₀¹ (2x − x²) dx.",
      feedback: {
        correct:
          "Correct! The area is ∫₀¹ (2x − x²) dx = [x² − x³/3]₀¹ = 2/3 square unit.",
        incorrect:
          "The upper curve is 2x and the lower curve is x². Integrating their difference gives [x² − x³/3]₀¹ = 2/3 square unit."
      }
    },
    {
      id: "area-under-curves-007",
      difficulty: "Intermediate",
      prompt: "Evaluate ∫₀¹ (3x² + 2x) dx.",
      options: [
        "1 square unit",
        "2 square units",
        "3 square units",
        "4 square units"
      ],
      correctAnswer: "2 square units",
      hint: "An antiderivative is x³ + x².",
      feedback: {
        correct:
          "Correct! [x³ + x²]₀¹ = 1 + 1 = 2.",
        incorrect:
          "Integrate term by term: ∫(3x² + 2x) dx = x³ + x². Evaluating from 0 to 1 gives 2."
      }
    },
    {
      id: "area-under-curves-008",
      difficulty: "Advanced",
      prompt: "For x in [0, 1], simplify y = 2|x|.",
      options: [
        "y = −2x",
        "y = 2x",
        "y = x²",
        "y = 2x²"
      ],
      correctAnswer: "y = 2x",
      hint: "Every x in this interval is non-negative.",
      feedback: {
        correct:
          "Correct! Since x ≥ 0 on [0, 1], |x| = x, so 2|x| = 2x.",
        incorrect:
          "Because x is non-negative on [0, 1], |x| = x. Therefore, y = 2x."
      }
    },
    {
      id: "area-under-curves-009",
      difficulty: "Advanced",
      prompt: "Find the area between y = 4x and y = 2x² from x = 0 to x = 1.",
      options: [
        "1/3 square unit",
        "2/3 square unit",
        "1 square unit",
        "4/3 square units"
      ],
      correctAnswer: "5/3 square units",
      hint: "Integrate the upper curve minus the lower curve: ∫₀¹ (4x − 2x²) dx.",
      feedback: {
        correct:
          "Correct! The area is [2x² − (2/3)x³]₀¹ = 2 − 2/3 = 4/3 square units.",
        incorrect:
          "The correct calculation is ∫₀¹ (4x − 2x²) dx = [2x² − (2/3)x³]₀¹ = 4/3 square units."
      }
    },
    {
      id: "area-under-curves-010",
      difficulty: "NDA-style",
      prompt:
        "NDA 2026 — Area Under the Curves: Consider the curves y = x² and y = 2|x|. What is the area bounded by the curves and the lines x = 0 and x = 1?",
      options: [
        "(a) 1 square unit",
        "(b) 2/3 square unit",
        "(c) 1/2 square unit",
        "(d) 1/3 square unit"
      ],
      correctAnswer: "(b) 2/3 square unit",
      hint:
        "On [0, 1], |x| = x. Identify the upper curve and integrate the difference between the curves.",
      feedback: {
        correct:
          "Correct! On [0, 1], 2|x| = 2x, which lies above x². The area is ∫₀¹ (2x − x²) dx = [x² − x³/3]₀¹ = 1 − 1/3 = 2/3 square unit.",
        incorrect:
          "On [0, 1], |x| = x, so the curves are y = x² and y = 2x. The upper curve is 2x. Therefore, the area is ∫₀¹ (2x − x²) dx = 2/3 square unit. The correct answer is (b)."
      }
    }
  ]
};

export default areaUnderTheCurves;