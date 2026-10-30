
const differentialEquations = {
  id: "DifferentialEquations",
  title: "Differential Equations",
  subject: "math",
  topic: "Differential Equations",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand the meaning of a differential equation.",
    "Recognize the derivative dy/dx in a differential equation.",
    "Understand how to integrate a constant derivative.",
    "Apply the initial condition to find an unknown constant.",
    "Solve NDA-style questions involving differential equations."
  ],

  teachingSteps: [
    {
      id: "understanding-differential-equations",
      title: "Understanding Differential Equations",
      explanation:
        "A differential equation is an equation that contains a derivative of an unknown function. The derivative dy/dx describes how y changes with respect to x. Solving a differential equation means finding a function y that satisfies the equation.",
      examples: [
        {
          problem: "If dy/dx = 3, find y.",
          solution:
            "Integrate both sides with respect to x: y = ∫3 dx = 3x + C, where C is an arbitrary constant."
        },
        {
          problem: "If dy/dx = 2x, find y.",
          solution:
            "Integrate both sides: y = ∫2x dx = x² + C, where C is an arbitrary constant."
        }
      ]
    },
    {
      id: "solving-with-initial-conditions",
      title: "Using Initial Conditions",
      explanation:
        "An initial condition gives a value of the function at a particular point, such as y(0) = q. After integrating a differential equation, substitute the given x and y values to determine the constant of integration.",
      examples: [
        {
          problem: "Solve dy/dx = 2 given y(0) = 5.",
          solution:
            "Integrating gives y = 2x + C. Using y(0) = 5, we get 5 = 2(0) + C, so C = 5. Therefore, y = 2x + 5."
        },
        {
          problem: "Solve dy/dx = p given y(0) = q, where p and q are constants.",
          solution:
            "Integrating dy/dx = p gives y = px + C. Since y(0) = q, substituting x = 0 and y = q gives C = q. Therefore, y = px + q. Rearranging for x ≠ 0 gives (y − q)/x = p, so the equivalent inverse-cosine form in the supplied question must be checked against its original differential equation before being accepted."
        }
      ]
    }
  ],

  skills: [
    {
      id: "differential-equations-basics",
      questionIds: [
        "differential-equations-001",
        "differential-equations-002",
        "differential-equations-003"
      ]
    },
    {
      id: "integration-and-initial-conditions",
      questionIds: [
        "differential-equations-004",
        "differential-equations-005",
        "differential-equations-006",
        "differential-equations-007"
      ]
    },
    {
      id: "nda-differential-equations-practice",
      questionIds: [
        "differential-equations-008",
        "differential-equations-009",
        "differential-equations-010"
      ]
    }
  ],

  practice: [
    {
      id: "differential-equations-001",
      difficulty: "Basic",
      prompt: "What is a differential equation?",
      options: [
        "An equation containing a derivative",
        "An equation containing only constants",
        "An equation that always has no solution",
        "An equation containing only multiplication"
      ],
      correctAnswer: "An equation containing a derivative",
      hint: "Look for a quantity such as dy/dx.",
      feedback: {
        correct:
          "Correct! A differential equation contains a derivative of an unknown function.",
        incorrect:
          "A differential equation contains a derivative, such as dy/dx."
      }
    },
    {
      id: "differential-equations-002",
      difficulty: "Basic",
      prompt: "What does dy/dx represent?",
      options: [
        "The rate of change of y with respect to x",
        "The product of x and y",
        "The sum of x and y",
        "The value of y when x is zero"
      ],
      correctAnswer: "The rate of change of y with respect to x",
      hint: "Think about what a derivative measures.",
      feedback: {
        correct:
          "Correct! dy/dx describes the rate at which y changes as x changes.",
        incorrect:
          "dy/dx is the derivative of y with respect to x, describing its rate of change."
      }
    },
    {
      id: "differential-equations-003",
      difficulty: "Basic",
      prompt: "If dy/dx = 4, what is the general solution?",
      options: [
        "y = 4x + C",
        "y = 4 + C",
        "y = x⁴ + C",
        "y = 4x² + C"
      ],
      correctAnswer: "y = 4x + C",
      hint: "Integrate the constant 4 with respect to x.",
      feedback: {
        correct:
          "Correct! Integrating 4 gives y = 4x + C.",
        incorrect:
          "Integrating dy/dx = 4 gives y = ∫4 dx = 4x + C."
      }
    },
    {
      id: "differential-equations-004",
      difficulty: "Basic",
      prompt: "What is the integral of 2x with respect to x?",
      options: [
        "x² + C",
        "2x² + C",
        "2 + C",
        "x + C"
      ],
      correctAnswer: "x² + C",
      hint: "Increase the power of x by one and divide by the new power.",
      feedback: {
        correct:
          "Correct! ∫2x dx = x² + C.",
        incorrect:
          "The integral of 2x is x² + C because the derivative of x² is 2x."
      }
    },
    {
      id: "differential-equations-005",
      difficulty: "Intermediate",
      prompt: "Solve dy/dx = 3 given y(0) = 2.",
      options: [
        "y = 3x + 2",
        "y = 3x − 2",
        "y = 2x + 3",
        "y = 3x"
      ],
      correctAnswer: "y = 3x + 2",
      hint: "First integrate to get y = 3x + C, then use y(0) = 2.",
      feedback: {
        correct:
          "Correct! The initial condition gives C = 2, so y = 3x + 2.",
        incorrect:
          "Integrating gives y = 3x + C. Substituting x = 0 and y = 2 gives C = 2."
      }
    },
    {
      id: "differential-equations-006",
      difficulty: "Intermediate",
      prompt: "If dy/dx = 2x and y(0) = 4, find y.",
      options: [
        "y = x² + 4",
        "y = 2x² + 4",
        "y = x² − 4",
        "y = 2x + 4"
      ],
      correctAnswer: "y = x² + 4",
      hint: "Integrate first, then use the initial condition.",
      feedback: {
        correct:
          "Correct! Integration gives y = x² + C, and y(0) = 4 gives C = 4.",
        incorrect:
          "Integrating 2x gives x² + C. The condition y(0) = 4 makes C = 4."
      }
    },
    {
      id: "differential-equations-007",
      difficulty: "Intermediate",
      prompt: "The general solution of dy/dx = p, where p is constant, is:",
      options: [
        "y = px + C",
        "y = p + C",
        "y = x + p²",
        "y = p/x + C"
      ],
      correctAnswer: "y = px + C",
      hint: "Integrate the constant p with respect to x.",
      feedback: {
        correct:
          "Correct! Integrating p gives y = px + C.",
        incorrect:
          "Since p is constant, ∫p dx = px + C."
      }
    },
    {
      id: "differential-equations-008",
      difficulty: "Advanced",
      prompt: "If dy/dx = p and y(0) = q, where p and q are constants, what is the particular solution?",
      options: [
        "y = px + q",
        "y = qx + p",
        "y = px − q",
        "y = p + q"
      ],
      correctAnswer: "y = px + q",
      hint: "Integrate first, then substitute x = 0 and y = q.",
      feedback: {
        correct:
          "Correct! Integration gives y = px + C. The initial condition gives C = q.",
        incorrect:
          "Integrating gives y = px + C. Since y(0) = q, C = q, so y = px + q."
      }
    },
    {
      id: "differential-equations-009",
      difficulty: "Advanced",
      prompt: "If y = px + q, where p and q are constants, which expression equals p when x ≠ 0?",
      options: [
        "(y − q)/x",
        "(y − p)/x",
        "(x − q)/y",
        "(y + q)/x"
      ],
      correctAnswer: "(y − q)/x",
      hint: "Subtract q from both sides and divide by x.",
      feedback: {
        correct:
          "Correct! From y = px + q, we obtain y − q = px, so p = (y − q)/x for x ≠ 0.",
        incorrect:
          "Rearranging y = px + q gives y − q = px. Dividing by x gives p = (y − q)/x."
      }
    },
    {
      id: "differential-equations-010",
      difficulty: "NDA-style",
      prompt:
        "NDA 2026 — Differential Equations: What is the solution of cos(dy/dx) = p when y(0) = q? Choose the answer supplied in the question.",
      options: [
        "(a) cos((xy − q)/y) = p",
        "(b) cos((xy − p)/x) = q",
        "(c) cos⁻¹((xy − q)/x) = p",
        "(d) cos⁻¹((xy − p)/x) = q"
      ],
      correctAnswer: "(c) cos⁻¹((xy − q)/x) = p",
      hint:
        "First isolate dy/dx by taking the inverse cosine. Then integrate and apply the initial condition. Check whether the resulting expression matches the options.",
      feedback: {
        correct:
          "This is the answer supplied in the question: option (c). However, it does not follow from cos(dy/dx) = p as written.",
        incorrect:
          "For the equation as written, cos(dy/dx) = p implies dy/dx = ± arccos(p) + 2πk for integer k, where applicable. Integrating gives a linear family of solutions. The supplied option (c) is not equivalent to this result, so the original question may contain a typo."
      }
    }
  ]
};

export default differentialEquations;
