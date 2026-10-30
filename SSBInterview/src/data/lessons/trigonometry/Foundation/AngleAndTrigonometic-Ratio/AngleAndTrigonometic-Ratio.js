
const angleAndTrigonometricRatioQuestion = {
  id: "angleAndTrigonometic_Ratio",
  title: "Angle and Trigonometric Ratio",
  subject: "math",
  topic: "Trigonometry",
  level: "Beginner",
  estimatedMinutes: 25,

  objectives: [
    "Understand basic trigonometric ratios.",
    "Recall standard trigonometric values.",
    "Use angle relationships to find unknown angles.",
    "Solve questions involving A + B and A - B.",
    "Find the ratio tan A : tan B.",
    "Apply these concepts to NDA-level questions."
  ],


teachingSteps: [
  {
    id: "understand-angle-and-trigonometric-ratios",
    type: "concept",
    concept: "Understanding Trigonometric Ratios",

    explanation:
      "Trigonometric ratios connect an angle with the sides of a right-angled triangle. For NDA questions, learn the standard values of sin, cos, and tan for 30°, 45°, and 60°. These values help you solve questions quickly.",

    example: {
      title: "Find the values of two angles",

      examples: [
        {
          expression: "A + B = 90°, A - B = 30°",
          result: "A = 60°, B = 30°",
          explanation:
            "Add both equations: 2A = 120°, so A = 60°. Then B = 90° - 60° = 30°."
        },
        {
          expression: "tan A : tan B",
          result: "3 : 1",
          explanation:
            "Since A = 60° and B = 30°, tan A : tan B = √3 : 1/√3 = 3 : 1."
        }
      ]
    }
  }
],


  skills: [
    "standard-trigonometric-values",
    "trigonometric-ratios",
    "angle-sum",
    "angle-difference",
    "solving-angle-equations",
    "tangent-ratio",
    "nda-trigonometry"
  ],

  practice: [
    {
      id: "angle-q1",
      prompt: "What is sin 30°?",
      options: ["0", "1/2", "√3/2", "1"],
      correctAnswer: "1/2",
      skill: "standard-trigonometric-values",
      feedback: {
        correct:
          "Correct! sin 30° = 1/2. Remember this standard value.",
        incorrect:
          "Recall the standard values: sin 30° = 1/2, sin 45° = 1/√2, and sin 60° = √3/2."
      }
    },

    {
      id: "angle-q2",
      prompt: "What is cos 60°?",
      options: ["1", "√3/2", "1/2", "0"],
      correctAnswer: "1/2",
      skill: "standard-trigonometric-values",
      feedback: {
        correct:
          "Correct! cos 60° = 1/2.",
        incorrect:
          "Remember that cos 60° = 1/2. Also, sin 30° = cos 60°."
      }
    },

    {
      id: "angle-q3",
      prompt: "What is tan 45°?",
      options: ["0", "1/√3", "1", "√3"],
      correctAnswer: "1",
      skill: "standard-trigonometric-values",
      feedback: {
        correct:
          "Correct! tan 45° = 1.",
        incorrect:
          "Use tan θ = sin θ / cos θ. Since sin 45° and cos 45° are equal, tan 45° = 1."
      }
    },

    {
      id: "angle-q4",
      prompt:
        "If sin(A + B) = 1 and both A and B are acute angles, what is A + B?",
      options: ["30°", "45°", "60°", "90°"],
      correctAnswer: "90°",
      skill: "angle-sum",
      feedback: {
        correct:
          "Correct! Sine equals 1 at 90°. Therefore, A + B = 90°.",
        incorrect:
          "Since A and B are both between 0° and 90°, their sum is between 0° and 180°. In that interval, sin(A + B) = 1 means A + B = 90°."
      }
    },

    {
      id: "angle-q5",
      prompt:
        "If A + B = 90° and A = 30°, find B.",
      options: ["30°", "45°", "60°", "90°"],
      correctAnswer: "60°",
      skill: "angle-sum",
      feedback: {
        correct:
          "Correct! B = 90° - 30° = 60°.",
        incorrect:
          "You know A + B = 90°. Substitute A = 30°: 30° + B = 90°. Therefore, B = 60°."
      }
    },

    {
      id: "angle-q6",
      prompt:
        "If 2 sin(A - B) = 1 and -90° < A - B < 90°, what is A - B?",
      options: ["15°", "30°", "45°", "60°"],
      correctAnswer: "30°",
      skill: "angle-difference",
      feedback: {
        correct:
          "Correct! Dividing by 2 gives sin(A - B) = 1/2. In the given interval, A - B = 30°.",
        incorrect:
          "First divide both sides by 2: sin(A - B) = 1/2. Since sin 30° = 1/2 and the difference lies between -90° and 90°, A - B = 30°."
      }
    },

    {
      id: "angle-q7",
      prompt:
        "If A + B = 90° and A - B = 30°, what is A?",
      options: ["30°", "45°", "60°", "75°"],
      correctAnswer: "60°",
      skill: "solving-angle-equations",
      feedback: {
        correct:
          "Correct! Add the equations: 2A = 120°. Therefore, A = 60°.",
        incorrect:
          "Add A + B = 90° and A - B = 30°. The B terms cancel, giving 2A = 120°. Divide by 2 to get A = 60°."
      }
    },

    {
      id: "angle-q8",
      prompt:
        "If A = 60° and B = 30°, what is tan A : tan B?",
      options: ["1 : 1", "1 : 3", "3 : 1", "√3 : 1"],
      correctAnswer: "3 : 1",
      skill: "tangent-ratio",
      feedback: {
        correct:
          "Correct! tan 60° = √3 and tan 30° = 1/√3. Their ratio simplifies to 3 : 1.",
        incorrect:
          "Substitute the standard values: √3 : (1/√3). Multiply both parts by √3 to get 3 : 1."
      }
    },

    {
      id: "angle-q9",
      prompt:
        "If sin(A + B) = 1 and 2 sin(A - B) = 1, where A and B are acute angles, what is A?",
      options: ["30°", "45°", "60°", "75°"],
      correctAnswer: "60°",
      skill: "nda-trigonometry",
      feedback: {
        correct:
          "Correct! A + B = 90° and A - B = 30°. Adding the equations gives 2A = 120°, so A = 60°.",
        incorrect:
          "First find A + B = 90° and A - B = 30°. Add these equations: 2A = 120°. Therefore, A = 60°."
      }
    },

    {
      id: "angle-q10",
      prompt:
        "If sin(A+B)=1 and 2 sin(A-B)=1, where 0 < A,B < π/2, then what is tan A : tan B equal to?   (NDA,2021-II)",
      options: ["1 : 1", "1 : 3", "3 : 1", "√3 : 1"],
      correctAnswer: "3 : 1",
      skill: "nda-trigonometry",
      feedback: {
        correct:
          "Excellent! Since 0 < A,B < π/2, sin(A+B) = 1 gives A+B = π/2. Also, 2sin(A-B)=1 gives sin(A-B)=1/2. Because A-B lies between -π/2 and π/2, A-B=π/6. Adding the two equations gives 2A=2π/3, so A=π/3 and B=π/6. Therefore, tan A : tan B = √3 : (1/√3) = 3 : 1.",
        incorrect:
          "Step 1: sin(A+B)=1 gives A+B=π/2. Step 2: divide 2sin(A-B)=1 by 2 to get sin(A-B)=1/2, so A-B=π/6. Step 3: add the equations to get 2A=2π/3, hence A=π/3. Subtract the equations to get 2B=π/3, hence B=π/6. Step 4: tan A : tan B = √3 : (1/√3) = 3 : 1."
      }
    }
  ]
};

export default angleAndTrigonometricRatioQuestion;
