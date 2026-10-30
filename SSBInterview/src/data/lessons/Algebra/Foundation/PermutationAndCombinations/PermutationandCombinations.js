
const permutationAndCombinationsQuestion = {
  id: "algebra-permutation-and-combinations",
  title: "Permutation and Combinations",
  subject: "Mathematics",
  topic: "Algebra",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand the fundamental counting principle",
    "Understand factorials",
    "Understand permutations and arrangements",
    "Count arrangements when repetition is not allowed",
    "Solve NDA-style permutation and combination questions"
  ],

  teachingSteps: [
    {
      id: "understand-counting-principle",
      type: "concept",
      concept: "Fundamental Counting Principle",

      explanation:
        "When a task has multiple steps, multiply the number of choices at each step to find the total number of possible outcomes.",

      example: {
        title: "Count possible choices",
        examples: [
          {
            expression: "3 shirts and 2 trousers",
            result: "3 × 2 = 6 outfits",
            explanation:
              "Each shirt can be paired with either of the 2 trousers."
          }
        ]
      }
    },
    {
      id: "understand-factorials",
      type: "concept",
      concept: "Understanding Factorials",

      explanation:
        "A factorial means multiplying a positive integer by every positive integer below it. For example, 4! = 4 × 3 × 2 × 1.",

      example: {
        title: "Calculate a factorial",
        examples: [
          {
            expression: "4!",
            result: "24",
            explanation:
              "Multiply 4 × 3 × 2 × 1 = 24."
          }
        ]
      }
    },
    {
      id: "understand-permutations",
      type: "concept",
      concept: "Understanding Permutations",

      explanation:
        "A permutation is an arrangement in which order matters. For example, 12 and 21 are different two-digit numbers.",

      example: {
        title: "Arrange two digits",
        examples: [
          {
            expression: "Digits 2 and 5",
            result: "25 and 52",
            explanation:
              "Changing the order creates a different number."
          }
        ]
      }
    },
    {
      id: "understand-arrangements-without-repetition",
      type: "concept",
      concept: "Arrangements Without Repetition",

      explanation:
        "When digits cannot repeat, each digit used leaves fewer choices for the next position.",

      example: {
        title: "Form a two-digit number",
        examples: [
          {
            expression: "Digits 2, 3 and 4",
            result: "3 × 2 = 6 numbers",
            explanation:
              "There are 3 choices for the first digit and 2 remaining choices for the second."
          }
        ]
      }
    },
    {
      id: "understand-combinations",
      type: "concept",
      concept: "Understanding Combinations",

      explanation:
        "A combination is a selection in which order does not matter. Choosing A and B is the same selection as choosing B and A.",

      example: {
        title: "Select two students",
        examples: [
          {
            expression: "Choose 2 students from A, B and C",
            result: "AB, AC and BC",
            explanation:
              "There are 3 different pairs because changing the order does not create a new selection."
          }
        ]
      }
    }
  ],

  skills: [
    {
      id: "counting-principle",
      questionIds: [
        "permutation-combination-001",
        "permutation-combination-002"
      ]
    },
    {
      id: "factorials-and-basic-permutations",
      questionIds: [
        "permutation-combination-003",
        "permutation-combination-004"
      ]
    },
    {
      id: "arrangements-without-repetition",
      questionIds: [
        "permutation-combination-005",
        "permutation-combination-006",
        "permutation-combination-007"
      ]
    },
    {
      id: "combinations-and-nda-practice",
      questionIds: [
        "permutation-combination-008",
        "permutation-combination-009",
        "permutation-combination-nda-010"
      ]
    }
  ],

  practice: [
    {
      id: "permutation-combination-001",
      difficulty: "easy",
      prompt:
        "A student has 3 shirts and 2 trousers. How many different shirt-and-trouser outfits can the student make?",
      options: ["5", "6", "9", "12"],
      correctAnswer: "6",
      hint:
        "Multiply the number of shirt choices by the number of trouser choices.",
      feedback: {
        correct:
          "There are 3 choices of shirt and 2 choices of trousers. Therefore, 3 × 2 = 6 outfits.",
        incorrect:
          "Use the fundamental counting principle: 3 × 2 = 6 outfits."
      }
    },

    {
      id: "permutation-combination-002",
      difficulty: "easy",
      prompt:
        "How many different two-digit numbers can be formed using digits 1, 2 and 3 if digits cannot repeat?",
      options: ["3", "6", "9", "12"],
      correctAnswer: "6",
      hint:
        "There are 3 choices for the first digit. After using one digit, how many choices remain?",
      feedback: {
        correct:
          "There are 3 choices for the first digit and 2 for the second. Total = 3 × 2 = 6.",
        incorrect:
          "Since digits cannot repeat, the total is 3 × 2 = 6."
      }
    },

    {
      id: "permutation-combination-003",
      difficulty: "easy",
      prompt: "What is the value of 4!?",
      options: ["10", "16", "24", "120"],
      correctAnswer: "24",
      hint:
        "Expand the factorial as 4 × 3 × 2 × 1.",
      feedback: {
        correct:
          "4! = 4 × 3 × 2 × 1 = 24.",
        incorrect:
          "A factorial multiplies all positive integers from the given number down to 1. Thus 4! = 24."
      }
    },

    {
      id: "permutation-combination-004",
      difficulty: "easy",
      prompt:
        "In how many ways can 3 different books be arranged in a row?",
      options: ["3", "6", "9", "12"],
      correctAnswer: "6",
      hint:
        "There are 3 choices for the first position, 2 for the second and 1 for the last.",
      feedback: {
        correct:
          "The number of arrangements is 3 × 2 × 1 = 3! = 6.",
        incorrect:
          "Since order matters, multiply the choices: 3 × 2 × 1 = 6."
      }
    },

    {
      id: "permutation-combination-005",
      difficulty: "medium",
      prompt:
        "How many three-digit numbers can be formed using 1, 2, 3, 4 and 5 if no digit is repeated?",
      options: ["15", "30", "60", "125"],
      correctAnswer: "60",
      hint:
        "Count the choices for the hundreds, tens and units positions.",
      feedback: {
        correct:
          "There are 5 choices for the first digit, 4 for the second and 3 for the third. Total = 5 × 4 × 3 = 60.",
        incorrect:
          "Without repetition, the number of choices decreases at each position: 5 × 4 × 3 = 60."
      }
    },

    {
      id: "permutation-combination-006",
      difficulty: "medium",
      prompt:
        "How many three-digit numbers can be formed using 0, 1, 2 and 3 if digits cannot repeat?",
      options: ["12", "18", "24", "36"],
      correctAnswer: "18",
      hint:
        "The first digit cannot be zero. Count the choices for the first position separately.",
      feedback: {
        correct:
          "There are 3 choices for the hundreds digit (1, 2 or 3), then 3 choices for the tens digit and 2 for the units digit. Total = 3 × 3 × 2 = 18.",
        incorrect:
          "Zero cannot be the first digit. There are 3 × 3 × 2 = 18 valid numbers."
      }
    },

    {
      id: "permutation-combination-007",
      difficulty: "medium",
      prompt:
        "How many different arrangements can be made using all 5 distinct letters A, B, C, D and E?",
      options: ["25", "60", "100", "120"],
      correctAnswer: "120",
      hint:
        "Use the factorial of the number of distinct letters.",
      feedback: {
        correct:
          "The arrangements are 5! = 5 × 4 × 3 × 2 × 1 = 120.",
        incorrect:
          "Five distinct letters can be arranged in 5! = 120 ways."
      }
    },

    {
      id: "permutation-combination-008",
      difficulty: "hard",
      prompt:
        "In how many ways can 2 students be selected from a group of 5 students?",
      options: ["5", "10", "20", "25"],
      correctAnswer: "10",
      hint:
        "Selection does not depend on order. Use 5! / (2! × 3!).",
      feedback: {
        correct:
          "The number of selections is 5C2 = 5! / (2! × 3!) = 10.",
        incorrect:
          "Because order does not matter, use combinations: 5C2 = 10."
      }
    },

    {
      id: "permutation-combination-009",
      difficulty: "hard",
      prompt:
        "How many four-digit numbers greater than 3000 can be formed from the digits 1, 2, 3, 4 and 5 without repeating any digit?",
      options: ["24", "48", "72", "96"],
      correctAnswer: "48",
      hint:
        "The thousands digit can be 3, 4 or 5. Count the remaining arrangements for each choice.",
      feedback: {
        correct:
          "There are 3 choices for the thousands digit. The remaining three positions have 4 × 3 × 2 arrangements. Total = 3 × 24 = 72.",
        incorrect:
          "Choose 3, 4 or 5 for the thousands digit, then arrange 3 of the remaining 4 digits. The correct total is 3 × 4 × 3 × 2 = 72."
      }
    },

    {
      id: "permutation-combination-nda-010",
      difficulty: "hard",
      source: {
        type: "user-provided-question",
        exam: "NDA",
        verificationStatus: "provided-by-user"
      },
      prompt:
        "Let S = {2, 3, 4, 5, 6, 7, 9}. How many different three-digit numbers, with all digits different, can be formed from S that are less than 500?",
      options: ["60", "75", "90", "120"],
      correctAnswer: "90",
      hint:
        "First choose the hundreds digit so that the number is less than 500. Then count the choices for the tens and units digits.",
      feedback: {
        correct:
          "The hundreds digit can be 2, 3 or 4, giving 3 choices. The tens digit then has 6 choices, and the units digit has 5 choices. Total = 3 × 6 × 5 = 90.",
        incorrect:
          "The hundreds digit must be 2, 3 or 4. With no repetition, the remaining positions have 6 and 5 choices. Thus 3 × 6 × 5 = 90."
      }
    }
  ]
};

export default permutationAndCombinationsQuestion;
