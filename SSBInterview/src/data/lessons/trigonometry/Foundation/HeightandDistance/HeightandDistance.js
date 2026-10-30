
const heightAndDistanceQuestion = {
  id: "heightAndDistance",
  title: "Height and Distance",
  subject: "math",
  topic: "Trigonometry",
  level: "Beginner",
  estimatedMinutes: 30,

  objectives: [
    "Understand height, horizontal distance, and line of sight.",
    "Understand angles of elevation and depression.",
    "Use trigonometric ratios to find unknown heights and distances.",
    "Solve NDA-style Height and Distance questions."
  ],

  teachingSteps: [
    {
      id: "understand-height-and-distance",
      type: "concept",
      concept: "Understanding Height and Distance",

      explanation:
        "Height and Distance questions describe objects such as towers, buildings, trees, and ladders. The angle of elevation is the angle between the horizontal ground and the line of sight when looking upward. Use tan θ = height / horizontal distance when these two measurements form the opposite and adjacent sides of a right-angled triangle.",

      example: {
        title: "Find the height of a tower",

        examples: [
          {
            expression:
              "Horizontal distance = 10 m, angle of elevation = 45°",

            result: "Height = 10 m",

            explanation:
              "Use tan 45° = height / 10. Since tan 45° = 1, the height is 10 m."
          },
          {
            expression:
              "Horizontal distance = 10 m, angle of elevation = 30°",

            result: "Height = 10/√3 m",

            explanation:
              "Use tan 30° = height / 10. Since tan 30° = 1/√3, the height is 10/√3 m."
          }
        ]
      }
    }
  ],

  skills: [
    {
      id: "height-distance-basics",
      questionIds: [
        "height-distance-001",
        "height-distance-002",
        "height-distance-003"
      ]
    },
    {
      id: "elevation-and-depression",
      questionIds: [
        "height-distance-004",
        "height-distance-005",
        "height-distance-006"
      ]
    },
    {
      id: "nda-height-distance-problems",
      questionIds: [
        "height-distance-007",
        "height-distance-008",
        "height-distance-009",
        "height-distance-010"
      ]
    }
  ],

  practice: [
    {
      id: "height-distance-001",
      difficulty: "Basic",

      prompt:
        "A tower is 10 m away from an observer. The angle of elevation of its top is 45°. Find the height of the tower.",

      options: ["5 m", "10 m", "15 m", "20 m"],

      correctAnswer: "10 m",

      hint:
        "Use tan θ = height / horizontal distance and tan 45° = 1.",

      feedback: {
        correct:
          "Correct! tan 45° = height / 10 = 1, so the height is 10 m.",

        incorrect:
          "Use tan 45° = height / 10. Since tan 45° = 1, the height is 10 m."
      }
    },

    {
      id: "height-distance-002",
      difficulty: "Basic",

      prompt:
        "A tree casts an 8 m shadow. The angle of elevation of the sun is 45°. Find the height of the tree.",

      options: ["4 m", "8 m", "8√3 m", "16 m"],

      correctAnswer: "8 m",

      hint:
        "The shadow is the horizontal distance. Use tan 45° = height / shadow.",

      feedback: {
        correct:
          "Correct! tan 45° = height / 8 = 1, so the tree is 8 m tall.",

        incorrect:
          "Use tan 45° = height / 8. The height is 8 m."
      }
    },

    {
      id: "height-distance-003",
      difficulty: "Basic",

      prompt:
        "An observer stands 10 m from a vertical pole. The angle of elevation of its top is 30°. Find the height of the pole.",

      options: [
        "10√3 m",
        "5√3 m",
        "10/√3 m",
        "20 m"
      ],

      correctAnswer: "10/√3 m",

      hint:
        "Use tan 30° = 1/√3.",

      feedback: {
        correct:
          "Correct! tan 30° = height / 10 = 1/√3. Therefore, height = 10/√3 m.",

        incorrect:
          "Use tan 30° = height / 10. The correct height is 10/√3 m."
      }
    },

    {
      id: "height-distance-004",
      difficulty: "Intermediate",

      prompt:
        "A person stands 12 m from a tree. The angle of elevation of the top is 60°. Find the height of the tree.",

      options: [
        "4√3 m",
        "6√3 m",
        "12 m",
        "12√3 m"
      ],

      correctAnswer: "12√3 m",

      hint:
        "Use tan 60° = √3 = height / 12.",

      feedback: {
        correct:
          "Correct! height = 12 × tan 60° = 12√3 m.",

        incorrect:
          "Use tan 60° = height / 12. Since tan 60° = √3, height = 12√3 m."
      }
    },

    {
      id: "height-distance-005",
      difficulty: "Intermediate",

      prompt:
        "A building is 20 m away from an observer. The angle of elevation of its top is 30°. Find the height of the building, assuming the observer is at ground level.",

      options: [
        "20√3 m",
        "10√3 m",
        "20/√3 m",
        "40 m"
      ],

      correctAnswer: "20/√3 m",

      hint:
        "Let the height be h. Use tan 30° = h / 20.",

      feedback: {
        correct:
          "Correct! h = 20 tan 30° = 20/√3 m.",

        incorrect:
          "Use tan 30° = h / 20. The height is 20/√3 m."
      }
    },

    {
      id: "height-distance-006",
      difficulty: "Intermediate",

      prompt:
        "A person stands 20 m from the base of a building that is 20 m high. What is the angle of elevation of the top from the person?",

      options: ["30°", "45°", "60°", "75°"],

      correctAnswer: "45°",

      hint:
        "The opposite side and adjacent side are both 20 m. Find tan θ.",

      feedback: {
        correct:
          "Correct! tan θ = 20 / 20 = 1, so θ = 45°.",

        incorrect:
          "tan θ = height / distance = 20 / 20 = 1. Therefore, θ = 45°."
      }
    },

    {
      id: "height-distance-007",
      difficulty: "Advanced",

      prompt:
        "From a point on level ground, the angle of elevation of a tower is 60°. The point is 15 m from the base. Find the height of the tower.",

      options: [
        "5√3 m",
        "15 m",
        "15√3 m",
        "30√3 m"
      ],

      correctAnswer: "15√3 m",

      hint:
        "Use tan 60° = height / 15.",

      feedback: {
        correct:
          "Correct! height = 15 tan 60° = 15√3 m.",

        incorrect:
          "Use tan 60° = height / 15. Since tan 60° = √3, the height is 15√3 m."
      }
    },

    {
      id: "height-distance-008",
      difficulty: "Advanced",

      prompt:
        "A tower is 12 m high. Find the length of its shadow when the angle of elevation of the sun is 30°.",

      options: [
        "4√3 m",
        "6√3 m",
        "12 m",
        "12√3 m"
      ],

      correctAnswer: "12√3 m",

      hint:
        "Let the shadow length be x. Use tan 30° = 12 / x.",

      feedback: {
        correct:
          "Correct! 1/√3 = 12/x, so x = 12√3 m.",

        incorrect:
          "Use tan 30° = height / shadow = 12/x. Solving gives x = 12√3 m."
      }
    },

    {
      id: "height-distance-009",
      difficulty: "Advanced",

      prompt:
        "A person observes the top of a tower at an angle of elevation of 30°. After walking 20 m towards the tower, the angle becomes 60°. Find the height of the tower.",

      options: [
        "10 m",
        "10√3 m",
        "20√3 m",
        "30 m"
      ],

      correctAnswer: "10√3 m",

      hint:
        "Let the original distance be x and the height be h. Write tan 30° = h/x and tan 60° = h/(x - 20).",

      feedback: {
        correct:
          "Correct! From the two equations, the original distance is 30 m and the new distance is 10 m. Thus, h = 10 tan 60° = 10√3 m.",

        incorrect:
          "Let the original distance be x. Then h = x/√3 and h = (x - 20)√3. Equating these gives x = 30, so h = 10√3 m."
      }
    },

    {
      id: "height-distance-010",
      difficulty: "NDA PYQ",

      prompt:
        "A ladder 6 m long reaches a point 6 m below the top of a vertical flagstaff. From the foot of the ladder, the angle of elevation of the top of the flagstaff is 75°. What is the height of the flagstaff?",

      options: [
        "12 m",
        "9 m",
        "(6 + √3) m",
        "(6 + 3√3) m"
      ],

      correctAnswer: "(6 + 3√3) m",

      hint:
        "Let x be the horizontal distance and y be the vertical height reached by the ladder. Use x² + y² = 36 and tan 75° = (y + 6) / x.",

      feedback: {
        correct:
          "Correct! The horizontal distance is 3 m and the ladder reaches a vertical height of 3√3 m. The top is 6 m above that point, so the flagstaff height is 6 + 3√3 m.",

        incorrect:
          "The ladder forms a right triangle: x² + y² = 36. Also, tan 75° = (y + 6)/x = 2 + √3. Solving gives x = 3 and y = 3√3. Add the extra 6 m above the ladder's endpoint: height = 6 + 3√3 m."
      }
    }
  ]
};

export default heightAndDistanceQuestion;
