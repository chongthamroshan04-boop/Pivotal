
const probabilityOfDiceQuestion = {
  id: "probabilityOfDice",
  title: "Probability with Dice",
  subject: "math",
  topic: "Probability",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand the meaning of probability.",
    "Find the total number of outcomes when dice are rolled.",
    "Count outcomes that satisfy a given condition.",
    "Calculate probability using favourable outcomes.",
    "Practise NDA-style questions involving dice."
  ],

  teachingSteps: [
    {
      id: "understand-dice-probability",
      type: "concept",
      concept: "Finding Probability with Dice",

      explanation:
        "Probability tells us how likely an event is to happen. For equally likely outcomes, Probability = Number of favourable outcomes ÷ Total number of possible outcomes. A fair die has 6 possible results: 1, 2, 3, 4, 5, and 6. When several dice are rolled, multiply the number of outcomes for each die. For example, two dice have 6 × 6 = 36 possible outcomes. To find a probability, count the outcomes that satisfy the required condition and divide by the total.",

      example: {
        title: "Learn through worked examples",

        examples: [
          {
            expression: "One fair die is rolled. Find P(getting 4).",

            result: "1/6",

            explanation:
              "There is 1 favourable outcome, getting 4, out of 6 possible outcomes. Therefore, P(4) = 1/6."
          },
          {
            expression: "Two fair dice are rolled. Find P(total = 2).",

            result: "1/36",

            explanation:
              "Only the outcome (1, 1) gives a total of 2. There are 6 × 6 = 36 possible outcomes, so the probability is 1/36."
          },
          {
            expression: "Two fair dice are rolled. Find P(total = 7).",

            result: "1/6",

            explanation:
              "The favourable outcomes are (1,6), (2,5), (3,4), (4,3), (5,2), and (6,1). There are 6 favourable outcomes out of 36, so the probability is 6/36 = 1/6."
          }
        ]
      }
    }
  ],

  skills: [
    {
      id: "basic-dice-probability",
      questionIds: [
        "dice-probability-001",
        "dice-probability-002",
        "dice-probability-003"
      ]
    },
    {
      id: "counting-dice-outcomes",
      questionIds: [
        "dice-probability-004",
        "dice-probability-005",
        "dice-probability-006"
      ]
    },
    {
      id: "nda-dice-probability",
      questionIds: [
        "dice-probability-007",
        "dice-probability-008",
        "dice-probability-009",
        "dice-probability-010"
      ]
    }
  ],

  practice: [
    {
      id: "dice-probability-001",
      difficulty: "Basic",

      prompt:
        "A fair die is rolled once. What is the probability of getting 5?",

      options: ["1/2", "1/3", "1/6", "5/6"],

      correctAnswer: "1/6",

      hint:
        "There is one favourable result among six possible results.",

      feedback: {
        correct:
          "Correct! Only one face shows 5, so the probability is 1/6.",

        incorrect:
          "A fair die has 6 equally likely outcomes, and only one is 5. The probability is 1/6."
      }
    },

    {
      id: "dice-probability-002",
      difficulty: "Basic",

      prompt:
        "Two fair dice are rolled. How many total ordered outcomes are possible?",

      options: ["6", "12", "24", "36"],

      correctAnswer: "36",

      hint:
        "Each die has 6 possible results. Multiply the possibilities.",

      feedback: {
        correct:
          "Correct! There are 6 × 6 = 36 ordered outcomes.",

        incorrect:
          "Each of the 6 results on the first die can occur with any of the 6 results on the second die. Total = 6 × 6 = 36."
      }
    },

    {
      id: "dice-probability-003",
      difficulty: "Basic",

      prompt:
        "Two fair dice are rolled. What is the probability that their total is 2?",

      options: ["1/6", "1/12", "1/18", "1/36"],

      correctAnswer: "1/36",

      hint:
        "Which single outcome gives a total of 2?",

      feedback: {
        correct:
          "Correct! Only (1, 1) gives a total of 2. The probability is 1/36.",

        incorrect:
          "Only the outcome (1, 1) works. Since there are 36 total outcomes, the probability is 1/36."
      }
    },

    {
      id: "dice-probability-004",
      difficulty: "Intermediate",

      prompt:
        "Two fair dice are rolled. What is the probability that their total is 7?",

      options: ["1/12", "1/6", "1/9", "1/3"],

      correctAnswer: "1/6",

      hint:
        "List the pairs that add up to 7, then divide by 36.",

      feedback: {
        correct:
          "Correct! Six ordered pairs give a total of 7. Therefore, the probability is 6/36 = 1/6.",

        incorrect:
          "The favourable pairs are (1,6), (2,5), (3,4), (4,3), (5,2), and (6,1). Thus, the probability is 6/36 = 1/6."
      }
    },

    {
      id: "dice-probability-005",
      difficulty: "Intermediate",

      prompt:
        "Three fair dice are rolled. How many total ordered outcomes are possible?",

      options: ["18", "36", "216", "729"],

      correctAnswer: "216",

      hint:
        "Each die has 6 possible results.",

      feedback: {
        correct:
          "Correct! The total number of ordered outcomes is 6 × 6 × 6 = 216.",

        incorrect:
          "Multiply 6 possibilities for each of the three dice: 6³ = 216."
      }
    },

    {
      id: "dice-probability-006",
      difficulty: "Intermediate",

      prompt:
        "Two fair dice are rolled. What is the probability that both dice show the same number?",

      options: ["1/36", "1/6", "1/3", "1/2"],

      correctAnswer: "1/6",

      hint:
        "The matching outcomes are (1,1), (2,2), and so on up to (6,6).",

      feedback: {
        correct:
          "Correct! There are 6 matching outcomes out of 36, so the probability is 6/36 = 1/6.",

        incorrect:
          "There are 6 doubles among the 36 possible ordered outcomes. The probability is 6/36 = 1/6."
      }
    },

    {
      id: "dice-probability-007",
      difficulty: "Advanced",

      prompt:
        "Three fair dice are rolled. What is the probability that their total is 4?",

      options: ["1/72", "1/36", "1/18", "1/12"],

      correctAnswer: "1/72",

      hint:
        "The only possible number patterns are (1,1,2) and its arrangements.",

      feedback: {
        correct:
          "Correct! The sum 4 can occur as (1,1,2), with 3 distinct arrangements. There are 6³ = 216 total outcomes, so the probability is 3/216 = 1/72.",

        incorrect:
          "The favourable outcomes are (1,1,2), (1,2,1), and (2,1,1). Thus, the probability is 3/216 = 1/72."
      }
    },

    {
      id: "dice-probability-008",
      difficulty: "Advanced",

      prompt:
        "Four fair dice are rolled. How many ordered outcomes give a total of 7?",

      options: ["12", "16", "20", "24"],

      correctAnswer: "16",

      hint:
        "The possible patterns are (1,1,1,4) and (1,1,2,3). Count the distinct arrangements of each pattern.",

      feedback: {
        correct:
          "Correct! The pattern (1,1,1,4) has 4 arrangements. The pattern (1,1,2,3) has 4!/2! = 12 arrangements. Total = 4 + 12 = 16.",

        incorrect:
          "There are 4 arrangements of (1,1,1,4) and 12 arrangements of (1,1,2,3), giving 16 favourable ordered outcomes."
      }
    },

    {
      id: "dice-probability-009",
      difficulty: "Advanced",

      prompt:
        "Four fair dice are rolled. What is the probability that their total is 7?",

      options: ["1/1296", "7/324", "1/81", "5/324"],

      correctAnswer: "1/81",

      hint:
        "There are 6⁴ total ordered outcomes. First count the favourable outcomes for a total of 7.",

      feedback: {
        correct:
          "Correct! There are 16 favourable outcomes and 6⁴ = 1296 total outcomes. Therefore, P(total = 7) = 16/1296 = 1/81.",

        incorrect:
          "The favourable outcomes number 16: four arrangements of (1,1,1,4) and twelve of (1,1,2,3). The probability is 16/1296 = 1/81."
      }
    },

    {
      id: "dice-probability-010",
      difficulty: "NDA-style",

      prompt:
        "NDA II 2026, Q105: Four dice are rolled. What is the probability of getting a total of the numbers on the dice as 7?",

      options: [
        "5/1296",
        "7/324",
        "7/1296",
        "5/324"
      ],

      correctAnswer: "None of the listed options; the probability is 1/81.",

      hint:
        "The total number of outcomes is 6⁴ = 1296. Count the arrangements of (1,1,1,4) and (1,1,2,3).",

      feedback: {
        correct:
          "The mathematically correct probability is 16/1296 = 1/81. This is not among the four supplied options, so the question or its options should be checked against the official paper.",

        incorrect:
          "For a total of 7, the possible patterns are (1,1,1,4), which has 4 arrangements, and (1,1,2,3), which has 12 arrangements. There are 16 favourable outcomes among 1296 total outcomes, so the probability is 1/81. None of the listed options matches."
      }
    }
  ]
};

export default probabilityOfDiceQuestion;
