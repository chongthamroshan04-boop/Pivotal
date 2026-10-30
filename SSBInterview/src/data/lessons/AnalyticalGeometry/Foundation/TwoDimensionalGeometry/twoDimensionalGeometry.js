
const twoDimensionalGeometryQuestion = {
  id: "twoDimensionalGeometry",
  title: "Two-Dimensional Geometry",
  subject: "math",
  topic: "Coordinate Geometry",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand coordinates and points in a plane.",
    "Learn how to find the slope of a line.",
    "Understand the equations of straight lines.",
    "Learn the relationship between perpendicular lines.",
    "Solve NDA-style questions involving squares and diagonals."
  ],

  teachingSteps: [
    {
      id: "understand-coordinate-geometry",
      type: "concept",
      concept: "Understanding Coordinate Geometry and Straight Lines",

      explanation:
        "Coordinate geometry studies points and lines on the coordinate plane. A point is written as (x, y), where x is the horizontal coordinate and y is the vertical coordinate. The slope of a line passing through (x₁, y₁) and (x₂, y₂) is m = (y₂ - y₁)/(x₂ - x₁), provided x₂ is not equal to x₁. A line passing through the origin has equation y = mx, where m is its slope. Two non-vertical perpendicular lines have slopes whose product is -1. A square has diagonals that bisect each other at right angles. Therefore, if the diagonals of a square intersect at the origin, both diagonals pass through (0, 0), and their slopes are perpendicular.",

      example: {
        title: "Learn through worked examples",

        examples: [
          {
            expression: "Find the slope through (0, 0) and (4, 2).",

            result: "m = 1/2",

            explanation:
              "Use m = (y₂ - y₁)/(x₂ - x₁). Therefore, m = (2 - 0)/(4 - 0) = 2/4 = 1/2."
          },
          {
            expression: "A line has slope 1/2. Find the slope of a perpendicular line.",

            result: "m = -2",

            explanation:
              "The slopes of perpendicular non-vertical lines multiply to -1. If one slope is 1/2, the other is -2 because (1/2) × (-2) = -1."
          },
          {
            expression: "Find the equation of a line through (0, 0) with slope -2.",

            result: "y = -2x, or 2x + y = 0",

            explanation:
              "A line through the origin has equation y = mx. Substituting m = -2 gives y = -2x. Moving all terms to one side gives 2x + y = 0."
          }
        ]
      }
    }
  ],

  skills: [
    {
      id: "coordinate-geometry-basics",
      questionIds: [
        "coordinate-geometry-001",
        "coordinate-geometry-002",
        "coordinate-geometry-003"
      ]
    },
    {
      id: "straight-line-equations",
      questionIds: [
        "coordinate-geometry-004",
        "coordinate-geometry-005",
        "coordinate-geometry-006"
      ]
    },
    {
      id: "square-diagonals",
      questionIds: [
        "coordinate-geometry-007",
        "coordinate-geometry-008",
        "coordinate-geometry-009",
        "coordinate-geometry-010"
      ]
    }
  ],

  practice: [
    {
      id: "coordinate-geometry-001",
      difficulty: "Basic",

      prompt:
        "What are the coordinates of the origin?",

      options: [
        "(1, 1)",
        "(0, 0)",
        "(0, 1)",
        "(1, 0)"
      ],

      correctAnswer: "(0, 0)",

      hint:
        "At the origin, both the horizontal and vertical coordinates are zero.",

      feedback: {
        correct:
          "Correct! The origin is the point (0, 0).",

        incorrect:
          "The origin is where the x-axis and y-axis intersect. Its coordinates are (0, 0)."
      }
    },

    {
      id: "coordinate-geometry-002",
      difficulty: "Basic",

      prompt:
        "Find the slope of the line passing through (1, 2) and (3, 6).",

      options: [
        "1",
        "2",
        "3",
        "4"
      ],

      correctAnswer: "2",

      hint:
        "Use m = (y₂ - y₁)/(x₂ - x₁).",

      feedback: {
        correct:
          "Correct! The slope is (6 - 2)/(3 - 1) = 4/2 = 2.",

        incorrect:
          "Use the change in y divided by the change in x: m = (6 - 2)/(3 - 1) = 2."
      }
    },

    {
      id: "coordinate-geometry-003",
      difficulty: "Basic",

      prompt:
        "Which equation represents a line passing through the origin with slope 3?",

      options: [
        "y = x + 3",
        "y = 3x",
        "x = 3y",
        "y = -3x"
      ],

      correctAnswer: "y = 3x",

      hint:
        "A line through the origin has equation y = mx, where m is the slope.",

      feedback: {
        correct:
          "Correct! Substituting m = 3 into y = mx gives y = 3x.",

        incorrect:
          "For a line through the origin, use y = mx. With slope 3, the equation is y = 3x."
      }
    },

    {
      id: "coordinate-geometry-004",
      difficulty: "Basic",

      prompt:
        "What is the slope of a line perpendicular to a line with slope 2?",

      options: [
        "2",
        "-2",
        "1/2",
        "-1/2"
      ],

      correctAnswer: "-1/2",

      hint:
        "For perpendicular non-vertical lines, multiply the two slopes to get -1.",

      feedback: {
        correct:
          "Correct! The perpendicular slope is the negative reciprocal of 2, which is -1/2.",

        incorrect:
          "The negative reciprocal of 2 is -1/2. Check that 2 × (-1/2) = -1."
      }
    },

    {
      id: "coordinate-geometry-005",
      difficulty: "Intermediate",

      prompt:
        "A line passes through the origin and the point (4, 2). What is its equation?",

      options: [
        "y = 2x",
        "y = x/2",
        "x = 2y",
        "x + 2y = 0"
      ],

      correctAnswer: "y = x/2",

      hint:
        "First find the slope using the two points. Then use y = mx.",

      feedback: {
        correct:
          "Correct! The slope is (2 - 0)/(4 - 0) = 1/2. Therefore, y = x/2.",

        incorrect:
          "The slope is 2/4 = 1/2. Since the line passes through the origin, its equation is y = x/2."
      }
    },

    {
      id: "coordinate-geometry-006",
      difficulty: "Intermediate",

      prompt:
        "A line passes through the origin and has slope -2. Which equation represents it?",

      options: [
        "2x + y = 0",
        "x + 2y = 0",
        "2x - y = 0",
        "x - 2y = 0"
      ],

      correctAnswer: "2x + y = 0",

      hint:
        "Start with y = mx. Substitute m = -2 and rearrange the equation.",

      feedback: {
        correct:
          "Correct! y = -2x becomes 2x + y = 0.",

        incorrect:
          "Using y = mx gives y = -2x. Moving all terms to the left gives 2x + y = 0."
      }
    },

    {
      id: "coordinate-geometry-007",
      difficulty: "Intermediate",

      prompt:
        "The diagonals of a square intersect at the origin. If one diagonal has slope 1/2, what is the slope of the other diagonal?",

      options: [
        "1/2",
        "-1/2",
        "2",
        "-2"
      ],

      correctAnswer: "-2",

      hint:
        "The diagonals of a square meet at 90°. Find the negative reciprocal of 1/2.",

      feedback: {
        correct:
          "Correct! The diagonals are perpendicular, so the other slope is -2.",

        incorrect:
          "The slopes of perpendicular lines multiply to -1. Therefore, (1/2) × m = -1, giving m = -2."
      }
    },

    {
      id: "coordinate-geometry-008",
      difficulty: "Intermediate",

      prompt:
        "A square has its diagonals intersecting at the origin. One vertex is A(4, 2). What is the slope of diagonal AC?",

      options: [
        "2",
        "1/2",
        "-2",
        "-1/2"
      ],

      correctAnswer: "1/2",

      hint:
        "Diagonal AC passes through the origin and A(4, 2). Use the slope formula.",

      feedback: {
        correct:
          "Correct! The slope is (2 - 0)/(4 - 0) = 1/2.",

        incorrect:
          "Use m = (y₂ - y₁)/(x₂ - x₁). The slope of AC is 2/4 = 1/2."
      }
    },

    {
      id: "coordinate-geometry-009",
      difficulty: "Advanced",

      prompt:
        "The diagonals of a square intersect at the origin. One vertex is A(4, 2). What is the equation of the diagonal BD?",

      options: [
        "x + 2y = 0",
        "2x + y = 0",
        "x - 2y = 0",
        "2x - y = 0"
      ],

      correctAnswer: "x + 2y = 0",

      hint:
        "First find the slope of AC. The other diagonal BD is perpendicular to AC and passes through the origin.",

      feedback: {
        correct:
          "Correct! AC passes through (0, 0) and A(4, 2), so its slope is 2/4 = 1/2. Since the diagonals of a square are perpendicular, the slope of BD is -2. BD passes through the origin, so y = -2x. Rearranging gives x + 2y = 0. Option (a) is correct.",

        incorrect:
          "First, the slope of AC is (2 - 0)/(4 - 0) = 1/2. The perpendicular diagonal BD has slope -2. Since BD passes through (0, 0), its equation is y = -2x, or x + 2y = 0. Choose option (a)."
      }
    },

    {
      id: "coordinate-geometry-010",
      difficulty: "NDA-style",

      prompt:
        "The point of intersection of the diagonals of square ABCD is at the origin, and one of its vertices is A(4, 2). What is the equation of diagonal BD?(NDA,2021-I)",

      options: [
        "x + 2y = 0",
        "2x + y = 0",
        "x - 2y = 0",
        "2x - y = 0"
      ],

      correctAnswer: "x + 2y = 0",

      hint:
        "The diagonals of a square bisect each other at right angles. Find the slope of AC first, then find the perpendicular slope for BD.",

      feedback: {
        correct:
          "Correct! The diagonal AC passes through (0, 0) and A(4, 2). Its slope is (2 - 0)/(4 - 0) = 1/2. The slope of the perpendicular diagonal BD is -2. Since BD passes through the origin, y = -2x. Rearranging gives x + 2y = 0. Therefore, option (a) is correct.",

        incorrect:
          "The diagonals intersect at (0, 0). Since A = (4, 2), diagonal AC has slope 1/2. Diagonal BD is perpendicular to AC, so its slope is -2. Using y = mx through the origin gives y = -2x, which becomes x + 2y = 0."
      }
    }
  ]
};

export default twoDimensionalGeometryQuestion;
