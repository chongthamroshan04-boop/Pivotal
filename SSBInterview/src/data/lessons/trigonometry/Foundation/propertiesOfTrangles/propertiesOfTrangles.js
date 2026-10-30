
const propertiesOfTriangleQuestion = {
  id: "propertiesOfTriangle",
  title: "Properties of a Triangle",
  subject: "math",
  topic: "Trigonometry",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand the angle-sum property of a triangle.",
    "Identify acute, right, and obtuse angles.",
    "Understand the cosine rule.",
    "Use the cosine rule to solve NDA-style triangle questions."
  ],

  teachingSteps: [
    {
      id: "understand-properties-of-triangle",
      type: "concept",
      concept: "Understanding Triangle Properties",

      explanation:
        "The three interior angles of every triangle add up to 180°. An acute angle is less than 90°, a right angle is 90°, and an obtuse angle is greater than 90°. When three sides are known, the cosine rule helps us find an angle. If the sides opposite angles A, B, and C are a, b, and c, then c² = a² + b² - 2ab cos C.",

      example: {
        title: "Find an angle using the cosine rule",

        examples: [
          {
            expression: "Sides: 3, 4, 5",

            result: "The angle opposite side 5 is 90°.",

            explanation:
              "Using the cosine rule, 5² = 3² + 4² - 2(3)(4)cos C. Therefore, 25 = 25 - 24cos C, so cos C = 0 and C = 90°."
          },
          {
            expression: "c = √(a² + b² + ab)",

            result: "The angle opposite c is 120°.",

            explanation:
              "The cosine rule gives a² + b² + ab = a² + b² - 2ab cos C. Therefore, cos C = -1/2, so C = 120°."
          }
        ]
      }
    }
  ],

  skills: [
    {
      id: "triangle-angle-properties",
      questionIds: [
        "triangle-properties-001",
        "triangle-properties-002",
        "triangle-properties-003"
      ]
    },
    {
      id: "cosine-rule",
      questionIds: [
        "triangle-properties-004",
        "triangle-properties-005",
        "triangle-properties-006",
        "triangle-properties-007"
      ]
    },
    {
      id: "nda-triangle-problems",
      questionIds: [
        "triangle-properties-008",
        "triangle-properties-009",
        "triangle-properties-010"
      ]
    }
  ],

  practice: [
    {
      id: "triangle-properties-001",
      difficulty: "Basic",

      prompt:
        "What is the sum of the three interior angles of a triangle?",

      options: ["90°", "180°", "270°", "360°"],

      correctAnswer: "180°",

      hint:
        "Remember the angle-sum property of a triangle.",

      feedback: {
        correct:
          "Correct! The three interior angles of every triangle add up to 180°.",

        incorrect:
          "The angle-sum property states that the three interior angles add up to 180°."
      }
    },

    {
      id: "triangle-properties-002",
      difficulty: "Basic",

      prompt:
        "Two angles of a triangle are 50° and 60°. Find the third angle.",

      options: ["60°", "70°", "80°", "90°"],

      correctAnswer: "70°",

      hint:
        "Subtract the sum of the two known angles from 180°.",

      feedback: {
        correct:
          "Correct! The third angle is 180° - 50° - 60° = 70°.",

        incorrect:
          "The angles add up to 180°. Therefore, the missing angle is 180° - 110° = 70°."
      }
    },

    {
      id: "triangle-properties-003",
      difficulty: "Basic",

      prompt:
        "A triangle has angles 60°, 60°, and 60°. What type of triangle is it?",

      options: [
        "Right-angled triangle",
        "Equilateral triangle",
        "Obtuse triangle",
        "Scalene triangle"
      ],

      correctAnswer: "Equilateral triangle",

      hint:
        "An equilateral triangle has three equal sides and three equal angles.",

      feedback: {
        correct:
          "Correct! An equilateral triangle has three equal angles of 60°.",

        incorrect:
          "All three angles are equal to 60°, so the triangle is equilateral."
      }
    },

    {
      id: "triangle-properties-004",
      difficulty: "Intermediate",

      prompt:
        "A triangle has sides 3 cm, 4 cm, and 5 cm. What is the angle opposite the 5 cm side?",

      options: ["30°", "45°", "60°", "90°"],

      correctAnswer: "90°",

      hint:
        "Check whether 3² + 4² = 5².",

      feedback: {
        correct:
          "Correct! 3² + 4² = 9 + 16 = 25 = 5², so the triangle is right-angled.",

        incorrect:
          "Since 3² + 4² = 5², the Pythagorean theorem tells us the angle opposite the longest side is 90°."
      }
    },

    {
      id: "triangle-properties-005",
      difficulty: "Intermediate",

      prompt:
        "In a triangle, a = 5, b = 5, and the angle between these sides is 60°. Find the third side c.",

      options: ["5", "5√2", "5√3", "10"],

      correctAnswer: "5",

      hint:
        "Use c² = a² + b² - 2ab cos C.",

      feedback: {
        correct:
          "Correct! c² = 25 + 25 - 50 cos 60° = 50 - 25 = 25, so c = 5.",

        incorrect:
          "Substitute a = b = 5 and cos 60° = 1/2 into the cosine rule. You get c² = 25, so c = 5."
      }
    },

    {
      id: "triangle-properties-006",
      difficulty: "Intermediate",

      prompt:
        "In a triangle, a = 3, b = 4, and c = √13. Find the angle C opposite side c.",

      options: ["30°", "60°", "90°", "120°"],

      correctAnswer: "90°",

      hint:
        "Use cos C = (a² + b² - c²) / (2ab).",

      feedback: {
        correct:
          "Correct! cos C = (9 + 16 - 13) / 24 = 12/24 = 1/2. Therefore, C = 60°.",

        incorrect:
          "Use cos C = (a² + b² - c²)/(2ab). The result is 1/2, so the angle is 60°."
      }
    },

    {
      id: "triangle-properties-007",
      difficulty: "Advanced",

      prompt:
        "Two sides of a triangle are 5 cm and 7 cm. The angle between them is 60°. Find the square of the third side.",

      options: ["39", "49", "59", "74"],

      correctAnswer: "39",

      hint:
        "Use c² = a² + b² - 2ab cos 60°.",

      feedback: {
        correct:
          "Correct! c² = 25 + 49 - 2(5)(7)(1/2) = 74 - 35 = 39.",

        incorrect:
          "Using the cosine rule, c² = 25 + 49 - 35 = 39."
      }
    },

    {
      id: "triangle-properties-008",
      difficulty: "Advanced",

      prompt:
        "Two sides of a triangle are 6 cm and 8 cm, and the angle between them is 120°. Find the square of the third side.",

      options: ["52", "100", "148", "196"],

      correctAnswer: "148",

      hint:
        "Use cos 120° = -1/2 in the cosine rule.",

      feedback: {
        correct:
          "Correct! c² = 36 + 64 - 96(-1/2) = 100 + 48 = 148.",

        incorrect:
          "Because cos 120° = -1/2, c² = 36 + 64 + 48 = 148."
      }
    },

    {
      id: "triangle-properties-009",
      difficulty: "Advanced",

      prompt:
        "The sides of a triangle are a, b, and √(a² + b² + ab). What is the angle opposite the longest side?",

      options: ["60°", "90°", "120°", "150°"],

      correctAnswer: "120°",

      hint:
        "Square the longest side and substitute into the cosine rule.",

      feedback: {
        correct:
          "Correct! The cosine rule gives cos C = -1/2, so C = 120°.",

        incorrect:
          "Since c² = a² + b² + ab, the cosine rule gives -2ab cos C = ab. Therefore, cos C = -1/2 and C = 120°."
      }
    },

    {
      id: "triangle-properties-010",
      difficulty: "NDA PYQ",

      prompt:
        "The sides of a triangle are m, n and √(m² + n² + mn). What is the sum of the acute angles of the triangle?",

      options: ["45°", "60°", "75°", "90°"],

      correctAnswer: "60°",

      hint:
        "First use the cosine rule to find the angle opposite √(m² + n² + mn). Then subtract that angle from 180°.",

      feedback: {
        correct:
          "Correct! Let C be the angle opposite √(m² + n² + mn). By the cosine rule, m² + n² + mn = m² + n² - 2mn cos C. Therefore, cos C = -1/2 and C = 120°. The other two angles add up to 180° - 120° = 60°.",

        incorrect:
          "Use the cosine rule: cos C = (m² + n² - (m² + n² + mn))/(2mn) = -1/2. Thus C = 120°. The remaining two acute angles sum to 60°."
      }
    }
  ]
};

export default propertiesOfTriangleQuestion;
