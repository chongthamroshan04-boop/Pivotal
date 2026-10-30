const examPacing = {
  id: "nda-exam-pacing",

  title: "How to Finish the NDA Paper on Time",

  type: "time-management",

  estimatedMinutes: 40,

  objectives: [
    "Understand why students run out of time.",
    "Learn how to divide time across an exam.",
    "Learn when to continue, skip, and return to a question.",
    "Practice making faster exam decisions.",
  ],

  teachingSteps: [
    {
      type: "concept",
      title: "Understand exam pacing",
      content:
        "Finishing the paper is not only about solving questions quickly. You also need to decide how much time to spend on each question.",
    },

    {
      type: "concept",
      title: "Avoid getting stuck",
      content:
        "If a question is taking too long, mark it mentally and move forward. You can return to it later if time remains.",
    },

    {
      type: "worked-example",
      title: "Use a time checkpoint",
      content:
        "During practice, divide the paper into smaller time checkpoints instead of thinking about the entire paper at once.",
    },

    {
      type: "retrieval",
      title: "Recall the strategy",
      question:
        "What should you do when one question is taking much longer than expected?",
    },
  ],

  practice: [
    {
      id: "pacing-1",
      question:
        "You have spent much longer than expected on one difficult question. What should you consider doing?",
      options: [
        "Keep solving it until you get the answer.",
        "Move forward and return later if time allows.",
        "Stop the entire test.",
        "Guess every remaining question immediately.",
      ],
      correctAnswer: 1,
      skill: "question-selection",
    },

    {
      id: "pacing-2",
      question:
        "Why are time checkpoints useful during exam practice?",
      options: [
        "They help you monitor your pace.",
        "They guarantee every answer is correct.",
        "They remove the need to study.",
        "They make difficult questions disappear.",
      ],
      correctAnswer: 0,
      skill: "exam-pacing",
    },
  ],
};

export default examPacing;