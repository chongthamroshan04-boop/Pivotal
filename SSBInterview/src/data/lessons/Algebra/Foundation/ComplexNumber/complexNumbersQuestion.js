
const complexNumberQuestion = {
  id: "algebra-complex-numbers",
  title: "Complex Numbers",
  subject: "Mathematics",
  topic: "Algebra",
  level: "Beginner",
  estimatedMinutes: 25,

  objectives: [
    "Understand the imaginary unit i.",
    "Recognize the repeating cycle of powers of i.",
    "Simplify expressions involving complex numbers.",
    "Find complex conjugates.",
    "Calculate the modulus of a complex number.",
    "Prepare for NDA Mathematics questions on complex numbers.",
  ],

  skills: [
    {
      id: "complex-number-basics",
      questionIds: [
        "complex-numbers-001",
        "complex-numbers-002",
        "complex-numbers-003",
      ],
    },
    {
      id: "complex-number-powers",
      questionIds: [
        "complex-numbers-004",
        "complex-numbers-005",
        "complex-numbers-006",
      ],
    },
    {
      id: "complex-conjugates",
      questionIds: ["complex-numbers-007"],
    },
    {
      id: "complex-modulus",
      questionIds: [
        "complex-numbers-008",
        "complex-numbers-009",
      ],
    },
  ],

  teachingSteps: [
    {
      id: "understand-imaginary-unit",
      type: "concept",
      concept: "Understanding the Imaginary Unit and Powers of i",

      explanation:
        "The imaginary unit i is defined by i = √(-1), so i² = -1. Its powers follow a repeating cycle: i¹ = i, i² = -1, i³ = -i, and i⁴ = 1. After every four powers, the cycle repeats. A complex number has the form a + bi, where a is the real part and b is the coefficient of the imaginary part.",

      example: {
        title: "Calculate a power of i",
        examples: [
          {
            expression: "i⁶",
            result: "-1",
            explanation:
              "Write i⁶ as i⁴ × i². Since i⁴ = 1 and i² = -1, the result is 1 × (-1) = -1.",
          },
        ],
      },

      interaction: {
        type: "single-choice",
        questionId: "complex-numbers-001",
        skill: "complex-number-basics",
      },
    },
  ],

  practice: [
    {
      id: "complex-numbers-001",
      difficulty: "Basic",
      prompt: "If i = √(-1), what is the value of i²?",
      options: ["1", "-1", "i", "-i"],
      correctAnswer: "-1",
      feedback: {
        correct:
          "Correct! By definition, i = √(-1), so squaring i gives i² = -1.",
        incorrect:
          "The imaginary unit is defined so that i² = -1. Remember this basic relationship because it is used throughout complex-number calculations.",
      },
      hint: "Start with the definition of the imaginary unit.",
    },

    {
      id: "complex-numbers-002",
      difficulty: "Basic",
      prompt: "What is the value of i³?",
      options: ["1", "-1", "i", "-i"],
      correctAnswer: "-i",
      feedback: {
        correct:
          "Correct! i³ = i² × i = (-1) × i = -i.",
        incorrect:
          "Separate i³ into i² × i. Replace i² with -1, giving (-1) × i = -i.",
      },
      hint: "Rewrite i³ as i² multiplied by i.",
    },

    {
      id: "complex-numbers-003",
      difficulty: "Basic",
      prompt: "What is the value of i⁴?",
      options: ["i", "-1", "-i", "1"],
      correctAnswer: "1",
      feedback: {
        correct:
          "Correct! i⁴ = i² × i² = (-1) × (-1) = 1. This completes the four-power cycle.",
        incorrect:
          "Use i² = -1. Then i⁴ = (i²)² = (-1)² = 1.",
      },
      hint: "Express i⁴ as (i²)².",
    },

    {
      id: "complex-numbers-004",
      difficulty: "Basic",
      prompt: "What is the value of i⁷?",
      options: ["1", "-1", "i", "-i"],
      correctAnswer: "-i",
      feedback: {
        correct:
          "Correct! Since 7 = 4 + 3, i⁷ = i⁴ × i³ = 1 × (-i) = -i.",
        incorrect:
          "Powers of i repeat every four powers. Since 7 = 4 + 3, i⁷ = i⁴ × i³ = 1 × (-i) = -i.",
      },
      hint: "Write the exponent as a multiple of four plus a remainder.",
    },

    {
      id: "complex-numbers-005",
      difficulty: "Intermediate",
      prompt: "Evaluate i¹⁰.",
      options: ["1", "-1", "i", "-i"],
      correctAnswer: "-1",
      feedback: {
        correct:
          "Correct! Since 10 = 4 × 2 + 2, i¹⁰ = (i⁴)² × i² = 1 × (-1) = -1.",
        incorrect:
          "Divide the exponent by four. The remainder is 2, so i¹⁰ has the same value as i², which is -1.",
      },
      hint: "Find the remainder when 10 is divided by 4.",
    },

    {
      id: "complex-numbers-006",
      difficulty: "Intermediate",
      prompt: "Simplify (1 + i)².",
      options: ["2", "2i", "2 + 2i", "-2i"],
      correctAnswer: "2i",
      feedback: {
        correct:
          "Correct! Expand: (1 + i)² = 1 + 2i + i². Since i² = -1, this becomes 1 + 2i - 1 = 2i.",
        incorrect:
          "Use (a + b)² = a² + 2ab + b². You get 1 + 2i + i². Replace i² with -1, leaving 2i.",
      },
      hint: "Expand the square before substituting i² = -1.",
    },

    {
      id: "complex-numbers-007",
      difficulty: "Intermediate",
      prompt: "If z = 3 + 4i, what is the complex conjugate of z?",
      options: ["3 - 4i", "-3 + 4i", "-3 - 4i", "4 + 3i"],
      correctAnswer: "3 - 4i",
      feedback: {
        correct:
          "Correct! The complex conjugate of a + bi is a - bi. Keep the real part unchanged and reverse the sign of the imaginary part.",
        incorrect:
          "For z = a + bi, its conjugate is a - bi. Here, the real part remains 3 and +4i becomes -4i.",
      },
      hint: "Change the sign of the imaginary part only.",
    },

    {
      id: "complex-numbers-008",
      difficulty: "Intermediate",
      prompt: "If z = 3 + 4i, what is the modulus |z|?",
      options: ["1", "5", "7", "25"],
      correctAnswer: "5",
      feedback: {
        correct:
          "Correct! The modulus of a + bi is √(a² + b²). Therefore, |z| = √(3² + 4²) = √25 = 5.",
        incorrect:
          "Square the real and imaginary coefficients, add the results, and take the square root: √(9 + 16) = √25 = 5.",
      },
      hint: "Use both the real coefficient and the imaginary coefficient.",
    },

    {
      id: "complex-numbers-009",
      difficulty: "Hard",
      prompt:
        "If z = 1 + i, what is the value of z² + z̄², where z̄ is the complex conjugate of z?",
      options: ["-2", "0", "2", "4"],
      correctAnswer: "0",
      feedback: {
        correct:
          "Correct! z² = (1 + i)² = 2i. Its conjugate is z̄ = 1 - i, so z̄² = (1 - i)² = -2i. Therefore, z² + z̄² = 2i - 2i = 0.",
        incorrect:
          "First calculate z² = (1 + i)² = 2i. Then calculate z̄² = (1 - i)² = -2i. Adding them gives 2i + (-2i) = 0.",
      },
      hint:
        "Find z² and z̄² separately before adding their results.",
    },
{
  id: "complex-numbers-010",
  difficulty: "Hard",
  prompt:
    "What is ∑ (from n = 1 to 8n + 7) iⁿ equal to, where i = √(-1)?   (NDA-PYQ,2021-11)",
  options: ["-1", "1", "i", "-i"],
  correctAnswer: "-1",
  feedback: {
    correct:
      "Correct! The powers of i repeat in the cycle i, -1, -i, 1. Group the terms into complete cycles and evaluate any remaining terms.",
    incorrect:
      "Use the repeating cycle i, -1, -i, 1. Group the terms into complete cycles, then evaluate the remaining terms to find the sum.",
  },
  hint:
    "Use the repeating four-term cycle of powers of i and determine how many complete cycles occur.",
},





  ],
};

export default complexNumberQuestion;
