
const initeIntegralQuestion = {
  id: "Definite_Integral",
  title: "Definite Integrals",
  subject: "math",
  topic: "Definite Integral",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand the meaning of a definite integral.",
    "Learn the relationship between differentiation and integration.",
    "Recognize derivatives of common functions.",
    "Evaluate definite integrals using antiderivatives.",
    "Apply substitution to solve integrals involving square roots and trigonometric functions.",
    "Practise NDA-style questions on definite integrals."
  ],

  teachingSteps: [
    {
      id: "understand-definite-integrals",
      type: "concept",
      concept: "Understanding Definite Integrals",

      explanation:
        "A definite integral calculates the accumulated value of a function between two limits. An indefinite integral finds a family of antiderivatives and includes a constant of integration, C. If F'(x) = f(x), then ∫ f(x) dx = F(x) + C. For a definite integral, the Fundamental Theorem of Calculus gives ∫ₐᵇ f(x) dx = F(b) − F(a).",

      example: {
        title: "Learn through worked examples",

        examples: [
          {
            expression: "Evaluate ∫ 2x dx.",

            result: "x² + C",

            explanation:
              "Since the derivative of x² is 2x, an antiderivative of 2x is x². Add the constant of integration C."
          },
          {
            expression: "Evaluate ∫₁² 2x dx.",

            result: "3",

            explanation:
              "An antiderivative of 2x is x². Applying the limits gives [x²]₁² = 2² − 1² = 4 − 1 = 3."
          },
          {
            expression: "Evaluate ∫ x² dx.",

            result: "x³/3 + C",

            explanation:
              "Using the power rule for integration, increase the exponent by one and divide by the new exponent. Therefore, ∫ x² dx = x³/3 + C."
          }
        ]
      }
    },

    {
      id: "understand-substitution",
      type: "concept",
      concept: "Substitution in Integration",

      explanation:
        "Substitution is useful when an integral contains a function and a related derivative. Choose a suitable expression as a new variable, differentiate it, and rewrite the integral using that variable. For integrals involving square roots such as √(1 − u²), inverse trigonometric derivatives can also be useful. In particular, the derivative of sin⁻¹(u) is u'/√(1 − u²), wherever the expression is defined and differentiable.",

      example: {
        title: "Learn through worked examples",

        examples: [
          {
            expression: "Evaluate ∫ x/√(1 − x²) dx.",

            result: "−√(1 − x²) + C",

            explanation:
              "Let u = 1 − x². Then du = −2x dx. Substituting gives −1/2 ∫ u^(−1/2) du = −√u + C. Replacing u gives −√(1 − x²) + C."
          },
          {
            expression: "Evaluate ∫ 1/√(1 − x²) dx.",

            result: "sin⁻¹(x) + C",

            explanation:
              "The derivative of sin⁻¹(x) is 1/√(1 − x²). Therefore, the integral is sin⁻¹(x) + C for −1 < x < 1."
          }
        ]
      }
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
      id: "intermediate-definite-integrals",
      questionIds: [
        "definite-integral-004",
        "definite-integral-005",
        "definite-integral-006"
      ]
    },
    {
      id: "advanced-and-nda-integrals",
      questionIds: [
        "definite-integral-007",
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

      prompt: "Evaluate ∫ 2x dx.",

      options: [
        "x² + C",
        "2x² + C",
        "x + C",
        "x²"
      ],

      correctAnswer: "x² + C",

      hint:
        "Think of a function whose derivative is 2x.",

      feedback: {
        correct:
          "Correct! The derivative of x² is 2x, so the indefinite integral is x² + C.",

        incorrect:
          "The derivative of x² is 2x. Remember to include the constant of integration C."
      }
    },

    {
      id: "definite-integral-002",
      difficulty: "Basic",

      prompt: "Evaluate ∫ x² dx.",

      options: [
        "2x + C",
        "x³/3 + C",
        "x³ + C",
        "x²/2 + C"
      ],

      correctAnswer: "x³/3 + C",

      hint:
        "Use the power rule for integration.",

      feedback: {
        correct:
          "Correct! Increase the power from 2 to 3 and divide by 3, giving x³/3 + C.",

        incorrect:
          "Using the power rule, ∫ x² dx = x³/3 + C."
      }
    },

    {
      id: "definite-integral-003",
      difficulty: "Basic",

      prompt: "Evaluate ∫₀¹ 2x dx.",

      options: [
        "0",
        "1",
        "2",
        "4"
      ],

      correctAnswer: "1",

      hint:
        "Find an antiderivative and evaluate it at both limits.",

      feedback: {
        correct:
          "Correct! [x²]₀¹ = 1² − 0² = 1.",

        incorrect:
          "The antiderivative is x². Substituting the upper and lower limits gives 1 − 0 = 1."
      }
    },

    {
      id: "definite-integral-004",
      difficulty: "Intermediate",

      prompt: "Evaluate ∫ 1/√(1 − x²) dx.",

      options: [
        "sin⁻¹(x) + C",
        "cos⁻¹(x) + C",
        "tan⁻¹(x) + C",
        "ln|x| + C"
      ],

      correctAnswer: "sin⁻¹(x) + C",

      hint:
        "Recall the derivative formula for an inverse trigonometric function involving √(1 − x²).",

      feedback: {
        correct:
          "Correct! The derivative of sin⁻¹(x) is 1/√(1 − x²), so the integral is sin⁻¹(x) + C.",

        incorrect:
          "The derivative of sin⁻¹(x) is 1/√(1 − x²). The derivative of cos⁻¹(x) has the opposite sign, and the other options have different derivatives."
      }
    },

    {
      id: "definite-integral-005",
      difficulty: "Intermediate",

      prompt: "Evaluate ∫ x/√(1 − x²) dx.",

      options: [
        "√(1 − x²) + C",
        "−√(1 − x²) + C",
        "sin⁻¹(x) + C",
        "−sin⁻¹(x) + C"
      ],

      correctAnswer: "−√(1 − x²) + C",

      hint:
        "Choose the expression inside the square root as the substitution variable.",

      feedback: {
        correct:
          "Correct! Differentiating −√(1 − x²) gives x/√(1 − x²).",

        incorrect:
          "The derivative of −√(1 − x²) is x/√(1 − x²). The positive square root has the opposite sign, while the inverse sine options have different derivatives."
      }
    },

    {
      id: "definite-integral-006",
      difficulty: "Intermediate",

      prompt: "Evaluate ∫₁² 3x² dx.",

      options: [
        "7",
        "8",
        "9",
        "10"
      ],

      correctAnswer: "7",

      hint:
        "An antiderivative of 3x² is x³.",

      feedback: {
        correct:
          "Correct! [x³]₁² = 2³ − 1³ = 8 − 1 = 7.",

        incorrect:
          "Integrate 3x² to obtain x³, then apply the limits: 8 − 1 = 7."
      }
    },

    {
      id: "definite-integral-007",
      difficulty: "Advanced",

      prompt: "Evaluate ∫ 3x²/√(1 − x⁶) dx.",

      options: [
        "sin⁻¹(x³) + C",
        "3 sin⁻¹(x³) + C",
        "cos⁻¹(x³) + C",
        "tan⁻¹(x³) + C"
      ],

      correctAnswer: "sin⁻¹(x³) + C",

      hint:
        "Use u = x³ and find du before rewriting the integral.",

      feedback: {
        correct:
          "Correct! Let u = x³, so du = 3x² dx. The integral becomes ∫ du/√(1 − u²) = sin⁻¹(u) + C = sin⁻¹(x³) + C.",

        incorrect:
          "With u = x³, du = 3x² dx. The integral becomes ∫ du/√(1 − u²), whose antiderivative is sin⁻¹(u) + C."
      }
    },

    {
      id: "definite-integral-008",
      difficulty: "Advanced",

      prompt: "Evaluate ∫ x²/√(1 − x³) dx.",

      options: [
        "−(2/3)√(1 − x³) + C",
        "(2/3)√(1 − x³) + C",
        "sin⁻¹(x³) + C",
        "−ln|1 − x³| + C"
      ],

      correctAnswer: "−(2/3)√(1 − x³) + C",

      hint:
        "Use u = 1 − x³ to simplify the square root.",

      feedback: {
        correct:
          "Correct! Let u = 1 − x³, so du = −3x² dx. The integral becomes −1/3 ∫ u^(−1/2) du = −(2/3)√u + C.",

        incorrect:
          "Substitute u = 1 − x³, so du = −3x² dx. Integrating u^(−1/2) gives 2√u, with the negative factor from du."
      }
    },

    {
      id: "definite-integral-009",
      difficulty: "Advanced",

      prompt: "Evaluate ∫ x²/√(1 − x⁶) dx.",

      options: [
        "(1/3)sin⁻¹(x³) + C",
        "(1/3)sin⁻¹(x) + C",
        "sin⁻¹(x³) + C",
        "(2/3)sin⁻¹(x³) + C"
      ],

      correctAnswer: "(1/3)sin⁻¹(x³) + C",

      hint:
        "Use u = x³. Notice that du = 3x² dx.",

      feedback: {
        correct:
          "Correct! With u = x³, x² dx = du/3. The integral becomes (1/3)∫ du/√(1 − u²) = (1/3)sin⁻¹(x³) + C.",

        incorrect:
          "Substitute u = x³, so x² dx = du/3. The resulting integral includes the factor 1/3 and gives (1/3)sin⁻¹(x³) + C."
      }
    },

    {
      id: "definite-integral-010",
      difficulty: "NDA-style",

      prompt:
        "NDA-style — Indefinite Integral: What is ∫ √x/√(1 − x³) dx equal to?",

      options: [
        "(2/3)sin⁻¹(x^(3/2)) + C",
        "(3/2)sin⁻¹(x^(3/2)) + C",
        "(2/3)cos⁻¹(x^(3/2)) + C",
        "(3/2)tan⁻¹(x^(3/2)) + C"
      ],

      correctAnswer: "(2/3)sin⁻¹(x^(3/2)) + C",

      hint:
        "Choose u = x^(3/2) and compare du with the numerator √x dx.",

      feedback: {
        correct:
          "Correct! Let u = x^(3/2). Then du = (3/2)√x dx, so √x dx = (2/3)du. The integral becomes (2/3)∫ du/√(1 − u²) = (2/3)sin⁻¹(u) + C = (2/3)sin⁻¹(x^(3/2)) + C.",

        incorrect:
          "Let u = x^(3/2), so du = (3/2)√x dx. Therefore, √x dx = (2/3)du. Using ∫ du/√(1 − u²) = sin⁻¹(u) + C gives (2/3)sin⁻¹(x^(3/2)) + C."
      }
    }
  ]
};

export default initeIntegralQuestion;
