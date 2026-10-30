const definiteIntegralQuestion = {
  id: "Definite_Integral",
  title: "Definite Integrals",
  subject: "math",
  topic: "Definite Integral",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand the meaning of definite integrals.",
    "Evaluate definite integrals using antiderivatives.",
    "Recognize derivatives of functions involving powers and logarithms.",
    "Apply integration concepts to NDA-style questions."
  ],

  teachingSteps: [
    {
      id: "understand-definite-integrals",
      title: "Understanding Definite Integrals",
      explanation:
        "A definite integral calculates the accumulated value of a function between two limits. After finding an antiderivative, substitute the upper limit and subtract the value at the lower limit.",
      examples: [
        {
          problem: "Evaluate ∫₁² 2x dx.",
          solution:
            "An antiderivative of 2x is x². Substitute the limits: 2² − 1² = 4 − 1 = 3."
        }
      ]
    },
    {
      id: "recognize-derivatives",
      title: "Recognizing Derivatives",
      explanation:
        "Sometimes the expression inside an integral is already the derivative of a familiar function. Recognizing this pattern makes integration faster.",
      examples: [
        {
          problem: "Find the derivative of xˣ for x > 0.",
          solution:
            "Using logarithmic differentiation, d(xˣ)/dx = xˣ(1 + ln x)."
        }
      ]
    }
  ],

  skills: [
    {
      id: "basic-definite-integrals",
      questionIds: [
        "definite-integral-001",
        "definite-integral-002",
        "definite-integral-003"
      ]
    },
    {
      id: "integration-rules",
      questionIds: [
        "definite-integral-004",
        "definite-integral-005",
        "definite-integral-006",
        "definite-integral-007"
      ]
    },
    {
      id: "nda-integral-practice",
      questionIds: [
        "definite-integral-008",
        "definite-integral-009",
        "definite-integral-010"
      ]
    }
  ],

  practice: [
    {
      id: "definite-integral-001",
      difficulty: "Basic",
      prompt: "Evaluate ∫₀¹ 2x dx.",
      options: ["0", "1", "2", "3"],
      correctAnswer: "1",
      hint: "An antiderivative of 2x is x².",
      feedback: {
        correct: "Correct! [x²]₀¹ = 1 − 0 = 1.",
        incorrect:
          "Integrate 2x to get x², then evaluate x² at the upper and lower limits."
      }
    },
    {
      id: "definite-integral-002",
      difficulty: "Basic",
      prompt: "Evaluate ∫₁² 1 dx.",
      options: ["0", "1", "2", "3"],
      correctAnswer: "1",
      hint: "An antiderivative of 1 is x.",
      feedback: {
        correct: "Correct! [x]₁² = 2 − 1 = 1.",
        incorrect:
          "The integral is [x]₁², which means substitute 2 and subtract the value at 1."
      }
    },
    {
      id: "definite-integral-003",
      difficulty: "Basic",
      prompt: "Evaluate ∫₀² x dx.",
      options: ["1", "2", "3", "4"],
      correctAnswer: "2",
      hint: "An antiderivative of x is x²/2.",
      feedback: {
        correct: "Correct! [x²/2]₀² = 2.",
        incorrect:
          "Integrate x to get x²/2, then evaluate it between 0 and 2."
      }
    },
    {
      id: "definite-integral-004",
      difficulty: "Basic",
      prompt: "Evaluate ∫₀¹ 3x² dx.",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
      hint: "An antiderivative of 3x² is x³.",
      feedback: {
        correct: "Correct! [x³]₀¹ = 1.",
        incorrect:
          "The antiderivative is x³. Substitute the upper and lower limits."
      }
    },
    {
      id: "definite-integral-005",
      difficulty: "Intermediate",
      prompt: "Evaluate ∫₁² 2x dx.",
      options: ["2", "3", "4", "5"],
      correctAnswer: "3",
      hint: "Integrate first, then calculate 2² − 1².",
      feedback: {
        correct: "Correct! [x²]₁² = 4 − 1 = 3.",
        incorrect:
          "An antiderivative is x². Remember to subtract the lower-limit value from the upper-limit value."
      }
    },
    {
      id: "definite-integral-006",
      difficulty: "Intermediate",
      prompt: "Which expression is the derivative of xˣ for x > 0?",
      options: [
        "xˣ ln x",
        "xˣ(1 + ln x)",
        "xˣ + ln x",
        "xˣ(1 − ln x)"
      ],
      correctAnswer: "xˣ(1 + ln x)",
      hint: "Use logarithmic differentiation: take the natural logarithm of y = xˣ.",
      feedback: {
        correct:
          "Correct! Logarithmic differentiation gives d(xˣ)/dx = xˣ(1 + ln x).",
        incorrect:
          "Set y = xˣ. Taking logarithms gives ln y = x ln x. Differentiating and rearranging gives y' = xˣ(1 + ln x)."
      }
    },
    {
      id: "definite-integral-007",
      difficulty: "Intermediate",
      prompt: "Evaluate ∫₀¹ 2e^(2x) dx.",
      options: ["e²", "e² − 1", "e − 1", "2e²"],
      correctAnswer: "e² − 1",
      hint: "An antiderivative of 2e^(2x) is e^(2x).",
      feedback: {
        correct: "Correct! [e^(2x)]₀¹ = e² − 1.",
        incorrect:
          "Integrate to get e^(2x), then evaluate at 1 and subtract the value at 0."
      }
    },
    {
      id: "definite-integral-008",
      difficulty: "Advanced",
      prompt: "Evaluate ∫₁ᵉ (1/x) dx.",
      options: ["0", "1", "e", "ln 2"],
      correctAnswer: "1",
      hint: "An antiderivative of 1/x is ln x.",
      feedback: {
        correct: "Correct! [ln x]₁ᵉ = ln e − ln 1 = 1.",
        incorrect:
          "Use ln x as the antiderivative. Since ln e = 1 and ln 1 = 0, the answer is 1."
      }
    },
    {
      id: "definite-integral-009",
      difficulty: "Advanced",
      prompt: "Evaluate ∫₁² 3x² dx.",
      options: ["7", "8", "9", "10"],
      correctAnswer: "7",
      hint: "An antiderivative of 3x² is x³.",
      feedback: {
        correct: "Correct! [x³]₁² = 8 − 1 = 7.",
        incorrect:
          "Integrate 3x² to get x³, then subtract 1³ from 2³."
      }
    },
    {
      id: "definite-integral-010",
      difficulty: "NDA-style",
      prompt: "What is ∫₁² xˣ(1 + ln x) dx equal to?",
      options: ["4", "3", "2", "1"],
      correctAnswer: "3",
      hint: "Recognize that xˣ(1 + ln x) is the derivative of xˣ.",
      feedback: {
        correct:
          "Correct! Since d(xˣ)/dx = xˣ(1 + ln x), the integral is [xˣ]₁² = 2² − 1¹ = 4 − 1 = 3.",
        incorrect:
          "Notice that d(xˣ)/dx = xˣ(1 + ln x). Therefore, ∫₁² xˣ(1 + ln x) dx = [xˣ]₁² = 4 − 1 = 3."
      }
    }
  ]
};

export default definiteIntegralQuestion;