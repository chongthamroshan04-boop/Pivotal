const monotonicFunctionAndMaximaMinima = {
  id: "Monotonic_Functions_And_Maxima_Minima",
  title: "Monotonic Functions and Maxima-Minima",
  subject: "math",
  topic: "Monotonic Functions and Maxima-Minima",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand increasing and decreasing functions.",
    "Learn how derivatives help determine monotonicity.",
    "Understand local and absolute maximum and minimum values.",
    "Determine maximum and minimum values of continuous functions on closed intervals.",
    "Apply maxima-minima concepts to NDA-style questions."
  ],

  teachingSteps: [
    {
      id: "understand-monotonic-functions",
      title: "Understanding Monotonic Functions",
      explanation:
        "A function is increasing on an interval if its values increase as x increases. A function is decreasing if its values decrease as x increases. Derivatives help us determine these behaviours: when f'(x) is positive throughout an interval, the function is increasing there; when f'(x) is negative throughout an interval, the function is decreasing there.",
      examples: [
        {
          problem: "Determine whether f(x) = x² is increasing or decreasing on [1, 3].",
          solution:
            "Differentiate to obtain f'(x) = 2x. Since 2x is positive throughout [1, 3], the function is increasing on this interval."
        },
        {
          problem: "Determine whether f(x) = -x² is increasing or decreasing on [1, 3].",
          solution:
            "Differentiate to obtain f'(x) = -2x. Since -2x is negative throughout [1, 3], the function is decreasing on this interval."
        }
      ]
    },
    {
      id: "understand-maxima-minima",
      title: "Understanding Maximum and Minimum Values",
      explanation:
        "A maximum value is the greatest value a function attains, while a minimum value is the smallest value it attains. A continuous function on a closed, bounded interval [a, b] always attains both an absolute maximum and an absolute minimum. To find them, check the function values at the endpoints and at critical points inside the interval where the derivative is zero or undefined.",
      examples: [
        {
          problem: "Does f(x) = x² attain a maximum and minimum on [-1, 2]?",
          solution:
            "The function is continuous on the closed interval [-1, 2], so it attains both an absolute maximum and an absolute minimum. Its endpoint values are f(-1) = 1 and f(2) = 4. Its critical point is x = 0, where f(0) = 0. Therefore, the absolute maximum is 4 and the absolute minimum is 0."
        },
        {
          problem: "Consider f(x) = x³ - 3x + 2 on [-2, 2]. Does it attain both a maximum and a minimum?",
          solution:
            "The function is a polynomial, so it is continuous on the closed interval [-2, 2]. By the Extreme Value Theorem, it attains both an absolute maximum and an absolute minimum. Therefore, both statements are correct."
        }
      ]
    }
  ],

  skills: [
    {
      id: "monotonic-function-basics",
      questionIds: [
        "monotonic-maxima-minima-001",
        "monotonic-maxima-minima-002",
        "monotonic-maxima-minima-003"
      ]
    },
    {
      id: "maximum-and-minimum-values",
      questionIds: [
        "monotonic-maxima-minima-004",
        "monotonic-maxima-minima-005",
        "monotonic-maxima-minima-006",
        "monotonic-maxima-minima-007"
      ]
    },
    {
      id: "nda-maxima-minima-practice",
      questionIds: [
        "monotonic-maxima-minima-008",
        "monotonic-maxima-minima-009",
        "monotonic-maxima-minima-010"
      ]
    }
  ],

  practice: [
    {
      id: "monotonic-maxima-minima-001",
      difficulty: "Basic",
      prompt: "If f'(x) > 0 throughout an interval, what can we conclude about f(x)?",
      options: [
        "It is increasing",
        "It is decreasing",
        "It is constant",
        "It must have a maximum"
      ],
      correctAnswer: "It is increasing",
      hint: "Think about what a positive derivative tells us about the function.",
      feedback: {
        correct:
          "Correct! A positive derivative throughout an interval indicates that the function is increasing there.",
        incorrect:
          "When f'(x) > 0 throughout an interval, the function is increasing on that interval."
      }
    },
    {
      id: "monotonic-maxima-minima-002",
      difficulty: "Basic",
      prompt: "If f'(x) < 0 throughout an interval, what can we conclude about f(x)?",
      options: [
        "It is increasing",
        "It is decreasing",
        "It is constant",
        "It must have a minimum"
      ],
      correctAnswer: "It is decreasing",
      hint: "A negative derivative indicates a downward trend.",
      feedback: {
        correct:
          "Correct! A negative derivative throughout an interval indicates that the function is decreasing there.",
        incorrect:
          "When f'(x) < 0 throughout an interval, the function is decreasing on that interval."
      }
    },
    {
      id: "monotonic-maxima-minima-003",
      difficulty: "Basic",
      prompt: "What is the derivative of f(x) = x³ - 3x + 2?",
      options: [
        "3x² - 3",
        "x² - 3",
        "3x - 3",
        "3x² + 2"
      ],
      correctAnswer: "3x² - 3",
      hint: "Differentiate each term separately using the power rule.",
      feedback: {
        correct:
          "Correct! The derivative of x³ is 3x², the derivative of -3x is -3, and the derivative of 2 is 0.",
        incorrect:
          "Apply the power rule: d(x³)/dx = 3x², d(-3x)/dx = -3, and d(2)/dx = 0. Therefore, f'(x) = 3x² - 3."
      }
    },
    {
      id: "monotonic-maxima-minima-004",
      difficulty: "Basic",
      prompt: "What does an absolute maximum value represent?",
      options: [
        "The greatest value attained by the function on its domain or specified interval",
        "The smallest value attained by the function",
        "The value of the derivative at every point",
        "A point where the function must equal zero"
      ],
      correctAnswer:
        "The greatest value attained by the function on its domain or specified interval",
      hint: "Maximum means greatest, while minimum means smallest.",
      feedback: {
        correct:
          "Correct! An absolute maximum is the greatest function value attained on the specified domain or interval.",
        incorrect:
          "An absolute maximum is the greatest value the function actually attains on the specified domain or interval."
      }
    },
    {
      id: "monotonic-maxima-minima-005",
      difficulty: "Intermediate",
      prompt: "What does an absolute minimum value represent?",
      options: [
        "The greatest function value",
        "The smallest function value attained",
        "A point where the derivative is always positive",
        "A point where the function is undefined"
      ],
      correctAnswer: "The smallest function value attained",
      hint: "Minimum means the lowest value.",
      feedback: {
        correct:
          "Correct! An absolute minimum is the smallest function value attained on the specified domain or interval.",
        incorrect:
          "The absolute minimum is the smallest value that the function actually attains."
      }
    },
    {
      id: "monotonic-maxima-minima-006",
      difficulty: "Intermediate",
      prompt: "Which theorem guarantees that a continuous function on a closed, bounded interval attains both an absolute maximum and an absolute minimum?",
      options: [
        "Intermediate Value Theorem",
        "Extreme Value Theorem",
        "Mean Value Theorem",
        "Binomial Theorem"
      ],
      correctAnswer: "Extreme Value Theorem",
      hint: "Look for the theorem specifically about attaining maximum and minimum values.",
      feedback: {
        correct:
          "Correct! The Extreme Value Theorem guarantees both an absolute maximum and an absolute minimum for a continuous function on a closed, bounded interval.",
        incorrect:
          "The Extreme Value Theorem states that a continuous function on a closed, bounded interval attains both an absolute maximum and an absolute minimum."
      }
    },
    {
      id: "monotonic-maxima-minima-007",
      difficulty: "Intermediate",
      prompt: "For f(x) = x² on [-1, 2], what is the absolute minimum value?",
      options: ["-1", "0", "1", "4"],
      correctAnswer: "0",
      hint: "Check the critical point x = 0 and the two endpoints.",
      feedback: {
        correct:
          "Correct! f(0) = 0, which is the smallest value on [-1, 2].",
        incorrect:
          "The critical point is x = 0, and f(0) = 0. The endpoint values are 1 and 4, so the absolute minimum is 0."
      }
    },
    {
      id: "monotonic-maxima-minima-008",
      difficulty: "Advanced",
      prompt: "For f(x) = x² on [-1, 2], what is the absolute maximum value?",
      options: ["0", "1", "2", "4"],
      correctAnswer: "4",
      hint: "Compare f(-1), f(0), and f(2).",
      feedback: {
        correct:
          "Correct! f(-1) = 1, f(0) = 0, and f(2) = 4. The absolute maximum is 4.",
        incorrect:
          "Check the endpoints and critical point: f(-1) = 1, f(0) = 0, and f(2) = 4. The largest value is 4."
      }
    },
    {
      id: "monotonic-maxima-minima-009",
      difficulty: "Advanced",
      prompt: "Consider f(x) = x³ - 3x + 2 on [-2, 2]. What is f(2)?",
      options: ["0", "2", "4", "8"],
      correctAnswer: "4",
      hint: "Substitute x = 2 into x³ - 3x + 2.",
      feedback: {
        correct:
          "Correct! f(2) = 2³ - 3(2) + 2 = 8 - 6 + 2 = 4.",
        incorrect:
          "Substitute x = 2: f(2) = 8 - 6 + 2 = 4."
      }
    },
    {
      id: "monotonic-maxima-minima-010",
      difficulty: "NDA-style",
      prompt:
        "Consider the function f(x) = x³ - 3x + 2 in the interval [-2, 2]. Consider the following statements: (1) The function attains maximum value. (2) The function attains minimum value. Which statements are correct?",
      options: [
        "(a) 1 only",
        "(b) 2 only",
        "(c) Both 1 and 2",
        "(d) Neither 1 nor 2"
      ],
      correctAnswer: "(c) Both 1 and 2",
      hint:
        "The function is a polynomial. Recall the theorem about continuous functions on closed, bounded intervals.",
      feedback: {
        correct:
          "Correct! f(x) = x³ - 3x + 2 is a polynomial, so it is continuous on [-2, 2]. Since [-2, 2] is a closed and bounded interval, the Extreme Value Theorem guarantees that the function attains both an absolute maximum and an absolute minimum. Therefore, both statements 1 and 2 are correct.",
        incorrect:
          "A polynomial is continuous everywhere, and [-2, 2] is a closed, bounded interval. By the Extreme Value Theorem, the function attains both an absolute maximum and an absolute minimum. The correct answer is (c), Both 1 and 2."
      }
    }
  ]
};

export default monotonicFunctionAndMaximaMinima;