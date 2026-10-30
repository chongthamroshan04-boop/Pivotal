
const meanAndSummationQuestion = {
  id: "meanAndSummation",
  title: "Mean and Summation Notation",
  subject: "math",
  topic: "Statistics",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand the meaning of the arithmetic mean.",
    "Learn how to find the sum of observations using their mean.",
    "Understand summation notation.",
    "Simplify expressions involving the sum of observations.",
    "Practise NDA-style questions on mean and summation."
  ],

  teachingSteps: [
    {
      id: "understand-mean-and-summation",
      type: "concept",
      concept: "Using the Mean to Find a Sum",

      explanation:
        "The mean is the total of all observations divided by the number of observations. Therefore, Total = Mean × Number of observations. The symbol Σ (sigma) means to add the indicated terms. For example, Σxᵢ means to add all the values of xᵢ. When an expression contains a sum, you can take a constant outside the summation and add the terms inside carefully.",

      example: {
        title: "Learn through worked examples",

        examples: [
          {
            expression: "Mean = 5, Number of observations = 4",

            result: "Sum = 20",

            explanation:
              "Sum = Mean × Number of observations = 5 × 4 = 20."
          },
          {
            expression: "Mean of 10 observations = 3",

            result: "Σxᵢ = 30",

            explanation:
              "The sum of all observations is their mean multiplied by their number: 3 × 10 = 30."
          },
          {
            expression: "Σ(2xᵢ + 4), for 5 observations",

            result: "2Σxᵢ + 20",

            explanation:
              "The sum of 2xᵢ is 2Σxᵢ. The constant 4 is added five times, so its total is 4 × 5 = 20."
          }
        ]
      }
    }
  ],

  skills: [
    {
      id: "understanding-mean",
      questionIds: [
        "mean-summation-001",
        "mean-summation-002",
        "mean-summation-003"
      ]
    },
    {
      id: "sum-of-observations",
      questionIds: [
        "mean-summation-004",
        "mean-summation-005",
        "mean-summation-006"
      ]
    },
    {
      id: "nda-mean-and-summation",
      questionIds: [
        "mean-summation-007",
        "mean-summation-008",
        "mean-summation-009",
        "mean-summation-010"
      ]
    }
  ],

  practice: [
    {
      id: "mean-summation-001",
      difficulty: "Basic",

      prompt:
        "The mean of 5 observations is 4. What is their sum?",

      options: ["9", "20", "25", "10"],

      correctAnswer: "20",

      hint:
        "Multiply the mean by the number of observations.",

      feedback: {
        correct:
          "Correct! Sum = Mean × Number of observations = 4 × 5 = 20.",

        incorrect:
          "Use Sum = Mean × Number of observations. Therefore, the sum is 4 × 5 = 20."
      }
    },

    {
      id: "mean-summation-002",
      difficulty: "Basic",

      prompt:
        "The sum of 8 observations is 40. What is their mean?",

      options: ["4", "5", "8", "32"],

      correctAnswer: "5",

      hint:
        "Divide the sum by the number of observations.",

      feedback: {
        correct:
          "Correct! Mean = 40 ÷ 8 = 5.",

        incorrect:
          "Mean = Sum ÷ Number of observations = 40 ÷ 8 = 5."
      }
    },

    {
      id: "mean-summation-003",
      difficulty: "Basic",

      prompt:
        "What does the symbol Σ (sigma) generally mean in mathematics?",

      options: [
        "Subtract the values",
        "Multiply the values",
        "Add the indicated values",
        "Divide the values"
      ],

      correctAnswer: "Add the indicated values",

      hint:
        "Think about what you do when calculating a total.",

      feedback: {
        correct:
          "Correct! Σ means to add the indicated terms together.",

        incorrect:
          "The summation symbol Σ tells you to add the indicated terms."
      }
    },

    {
      id: "mean-summation-004",
      difficulty: "Intermediate",

      prompt:
        "The mean of 12 observations is 6. Find the sum of the observations.",

      options: ["18", "72", "60", "144"],

      correctAnswer: "72",

      hint:
        "Use Sum = Mean × Number of observations.",

      feedback: {
        correct:
          "Correct! The sum is 12 × 6 = 72.",

        incorrect:
          "Multiply the mean by the number of observations: 6 × 12 = 72."
      }
    },

    {
      id: "mean-summation-005",
      difficulty: "Intermediate",

      prompt:
        "If Σxᵢ = 15, what is the value of Σ(2xᵢ)?",

      options: ["15", "17", "30", "45"],

      correctAnswer: "30",

      hint:
        "A constant multiplier can be taken outside the summation.",

      feedback: {
        correct:
          "Correct! Σ(2xᵢ) = 2Σxᵢ = 2 × 15 = 30.",

        incorrect:
          "Take 2 outside the summation: Σ(2xᵢ) = 2Σxᵢ = 30."
      }
    },

    {
      id: "mean-summation-006",
      difficulty: "Intermediate",

      prompt:
        "If there are 6 observations, what is the value of Σ(xᵢ + 3) in terms of Σxᵢ?",

      options: [
        "Σxᵢ + 3",
        "Σxᵢ + 6",
        "Σxᵢ + 18",
        "3Σxᵢ + 6"
      ],

      correctAnswer: "Σxᵢ + 18",

      hint:
        "The number 3 is added once for each of the 6 observations.",

      feedback: {
        correct:
          "Correct! Σ(xᵢ + 3) = Σxᵢ + 3 × 6 = Σxᵢ + 18.",

        incorrect:
          "There are 6 terms, each containing an added 3. The extra total is 3 × 6 = 18."
      }
    },

    {
      id: "mean-summation-007",
      difficulty: "Advanced",

      prompt:
        "The mean of 10 observations x₁, x₂, ..., x₁₀ is 2. Find Σ(3xᵢ + 5), where i runs from 1 to 10.",

      options: ["110", "150", "160", "210"],

      correctAnswer: "110",

      hint:
        "First find Σxᵢ. Then calculate 3Σxᵢ + 5 × 10.",

      feedback: {
        correct:
          "Correct! Σxᵢ = 10 × 2 = 20. Therefore, Σ(3xᵢ + 5) = 3 × 20 + 5 × 10 = 110.",

        incorrect:
          "The sum is 20. Thus, 3Σxᵢ + 5 × 10 = 3 × 20 + 50 = 110."
      }
    },

    {
      id: "mean-summation-008",
      difficulty: "Advanced",

      prompt:
        "The mean of 15 observations is 2. Find Σ(4xᵢ + 2), where i runs from 1 to 15.",

      options: ["120", "150", "180", "210"],

      correctAnswer: "150",

      hint:
        "Use Σxᵢ = 15 × 2, then calculate 4Σxᵢ + 2 × 15.",

      feedback: {
        correct:
          "Correct! Σxᵢ = 30. The required sum is 4 × 30 + 2 × 15 = 120 + 30 = 150.",

        incorrect:
          "First find Σxᵢ = 15 × 2 = 30. Then 4 × 30 + 2 × 15 = 150."
      }
    },

    {
      id: "mean-summation-009",
      difficulty: "Advanced",

      prompt:
        "The mean of 20 observations is 1.5. Find the value of Σ(100(2xᵢ + 4)), where i runs from 1 to 20.",

      options: ["10,000", "12,000", "14,000", "16,000"],

      correctAnswer: "14,000",

      hint:
        "First find Σxᵢ = 20 × 1.5. Then calculate 100(2Σxᵢ + 4 × 20).",

      feedback: {
        correct:
          "Correct! Σxᵢ = 30. Therefore, 100(2 × 30 + 4 × 20) = 100(60 + 80) = 14,000.",

        incorrect:
          "The sum of the observations is 20 × 1.5 = 30. The required value is 100(2 × 30 + 4 × 20) = 14,000."
      }
    },

    {
      id: "mean-summation-010",
      difficulty: "NDA-style",

      prompt:
        "NDA 2026: The mean of 20 observations x₁, x₂, ..., x₂₀ is 1.414. Find the value of Σᵢ₌₁²⁰ 100(2xᵢ + 4).",

      options: [
        "12,656",
        "13,656",
        "14,656",
        "15,656"
      ],

      correctAnswer: "13,656",

      hint:
        "First find the sum of all observations using the mean. Then take the constant 100 outside the summation.",

      feedback: {
        correct:
          "Correct! The sum of the observations is 20 × 1.414 = 28.28. Therefore, Σ100(2xᵢ + 4) = 100(2 × 28.28 + 4 × 20) = 100(56.56 + 80) = 13,656.",

        incorrect:
          "Use Σxᵢ = 20 × 1.414 = 28.28. Then the required value is 100(2 × 28.28 + 4 × 20) = 100 × 136.56 = 13,656."
      }
    }
  ]
};

export default meanAndSummationQuestion;
