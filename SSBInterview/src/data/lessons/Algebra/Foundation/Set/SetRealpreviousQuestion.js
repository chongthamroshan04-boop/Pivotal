const SetRealpreviousQuestion = {
  id:"set",
  title:"Set,Relative and Function",
  subject:"math",
  topic:"algebra",
  objectives: [
    "Understand the four basic Set and relative and function.",
    "Solve simple arithmetic problems with confidence.",
    "Build a foundation for NDA Mathematics.",
  ],

  skills: [
    {
      id: "use-addition",
      questionIds: [
        "arithmetic-operations-001",
        "arithmetic-operations-002",
        "arithmetic-operations-006",
      ],
    },
    {
      id: "use-subtraction",
      questionIds: [
        "arithmetic-operations-003",
        "arithmetic-operations-007",
      ],
    },
    {
      id: "use-multiplication",
      questionIds: [
        "arithmetic-operations-004",
        "arithmetic-operations-008",
      ],
    },
    {
      id: "use-division",
      questionIds: [
        "arithmetic-operations-005",
        "arithmetic-operations-009",
        "arithmetic-operations-010",
      ],
    },
  ],

 
teachingSteps: [
  {
    id: "understand-set-union-basics",
    type: "concept",

    concept: "Understanding Sets and Union",

    explanation:
      "A set is a collection of things. For example, A = {1, 2} means set A contains the numbers 1 and 2. B = {3} means set B contains the number 3. The symbol ∪ means 'combine'. So, A ∪ B means collect all the numbers from A and B together. Therefore, if A = {1, 2} and B = {3}, then S = A ∪ B = {1, 2, 3}.",

    example: {
      title: "Let's combine two small sets",

      examples: [
        {
          expression: "A = {1} and B = {2}",

          result: "A ∪ B = {1, 2}",

          explanation:
            "Set A contains 1, and set B contains 2. We combine them to get {1, 2}. The symbol ∪ means combine."
        }
      ]
    },

    interaction: {
      type: "single-choice",
      questionId: "sets-union-basics-001",
      skill: "understand-set-union"
    }
  }
],

  practice: [
  {
    id: "sets-foundation-001",
    difficulty: "Basic",
    prompt:
      "Let A = {1, 2}. How many elements are in set A?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    feedback: {
      correct:
        "Correct! The set contains two elements: 1 and 2. Each distinct number is one element.",
      incorrect:
        "Count the numbers inside the braces: 1 and 2. There are two elements. A set's elements are the objects listed inside its braces.",
    },
    hint:
      "Count each number inside the curly braces { }.",
  },

  {
    id: "sets-union-002",
    difficulty: "Basic",
    prompt:
      "Let A = {1, 2} and B = {3}. If S = A ∪ B, which set is S?",
    options: [
      "{1, 2}",
      "{1, 3}",
      "{1, 2, 3}",
      "{2, 3}",
    ],
    correctAnswer: "{1, 2, 3}",
    feedback: {
      correct:
        "Correct! The symbol ∪ means union, or combine. A contributes 1 and 2, while B contributes 3. Therefore S = {1, 2, 3}.",
      incorrect:
        "The symbol ∪ means combine the elements from both sets. A contains 1 and 2, and B contains 3. Include every element from both sets: S = {1, 2, 3}.",
    },
    hint:
      "Write down every element from A and then include every element from B.",
  },

  {
    id: "sets-difference-003",
    difficulty: "Basic",
    prompt:
      "Let A = {1, 2, 3} and B = {2}. Which set is A − B?",
    options: [
      "{1, 2, 3}",
      "{2}",
      "{1, 3}",
      "{1, 2}",
    ],
    correctAnswer: "{1, 3}",
    feedback: {
      correct:
        "Correct! A − B means keep the elements in A that are not in B. Since 2 is in B, remove it from A. The remaining elements are {1, 3}.",
      incorrect:
        "A − B means remove from A every element that also appears in B. B contains 2, so remove 2 from {1, 2, 3}. The result is {1, 3}.",
    },
    hint:
      "Start with A. Cross out any element that also appears in B.",
  },

  {
    id: "sets-difference-count-004",
    difficulty: "Basic",
    prompt:
      "Let X = {1, 2, 3, 4} and Y = {2, 4}. How many elements are in X − Y?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    feedback: {
      correct:
        "Correct! Remove 2 and 4 from X because they appear in Y. X − Y = {1, 3}, which has 2 elements.",
      incorrect:
        "Remove the elements of Y, namely 2 and 4, from X. You are left with {1, 3}. Count the remaining elements: there are 2.",
    },
    hint:
      "First find the elements left after removing Y from X. Then count them.",
  },

  {
    id: "sets-difference-union-005",
    difficulty: "Basic",
    prompt:
      "Let X = {1, 2, 3}, Y = {2}, and Z = {4, 5}. Find S = (X − Y) ∪ Z.",
    options: [
      "{1, 2, 3, 4, 5}",
      "{1, 3, 4, 5}",
      "{2, 4, 5}",
      "{1, 3}",
    ],
    correctAnswer: "{1, 3, 4, 5}",
    feedback: {
      correct:
        "Correct! First X − Y = {1, 3}, because 2 is removed. Then combine {1, 3} with Z = {4, 5}. Therefore S = {1, 3, 4, 5}.",
      incorrect:
        "Do the operations in order. First remove 2 from X to get X − Y = {1, 3}. Then use union to combine those remaining elements with Z = {4, 5}. The result is {1, 3, 4, 5}.",
    },
    hint:
      "Calculate X − Y first. Then combine that result with Z.",
  },

  {
    id: "sets-subsets-006",
    difficulty: "Intermediate",
    prompt:
      "Let S = {a, b}. Which option lists all the subsets of S?",
    options: [
      "{∅, {a}, {b}, {a, b}}",
      "{{a}, {b}}",
      "{∅, {a, b}}",
      "{∅, {a}, {b}}",
    ],
    correctAnswer: "{∅, {a}, {b}, {a, b}}",
    feedback: {
      correct:
        "Correct! The subsets are the empty set, {a}, {b}, and {a, b}. A subset can contain neither element, either one element, or both elements.",
      incorrect:
        "A subset can contain no elements, just a, just b, or both a and b. Therefore the complete list is ∅, {a}, {b}, and {a, b}. Remember that the original set is also a subset of itself.",
    },
    hint:
      "Include the empty set, each one-element set, and the original set.",
  },

  {
    id: "sets-total-subsets-007",
    difficulty: "Intermediate",
    prompt:
      "A set has 4 distinct elements. How many subsets does it have in total?",
    options: ["4", "8", "15", "16"],
    correctAnswer: "16",
    feedback: {
      correct:
        "Correct! A set with n distinct elements has 2ⁿ subsets. Here n = 4, so 2⁴ = 16 subsets.",
      incorrect:
        "Use 2ⁿ to count all subsets, where n is the number of elements. With 4 elements, 2⁴ = 2 × 2 × 2 × 2 = 16 subsets.",
    },
    hint:
      "Each element can either be included in or excluded from a subset.",
  },

  {
    id: "sets-proper-subsets-008",
    difficulty: "Intermediate",
    prompt:
      "A set has 3 distinct elements. How many proper subsets does it have?",
    options: ["3", "7", "8", "9"],
    correctAnswer: "7",
    feedback: {
      correct:
        "Correct! Three elements give 2³ = 8 subsets in total. A proper subset cannot be equal to the original set, so exclude the original set: 8 − 1 = 7.",
      incorrect:
        "First count all subsets: 2³ = 8. A proper subset must not equal the original set, so remove that one subset. The answer is 8 − 1 = 7.",
    },
    hint:
      "Calculate 2³ first. Then exclude the subset that equals the original set.",
  },

  {
    id: "sets-proper-subsets-combined-009",
    difficulty: "Hard",
    prompt:
      "Sets X, Y, and Z have 4, 3, and 2 elements respectively. All 9 elements are distinct. Let S = (X − Y) ∪ Z. How many proper subsets does S have?",
    options: ["31", "32", "63", "64"],
    correctAnswer: "63",
    feedback: {
      correct:
        "Correct! All elements are distinct, so X and Y have no elements in common. Thus X − Y contains all 4 elements of X. Z adds 2 more elements, so S has 4 + 2 = 6 elements. All subsets number 2⁶ = 64. Excluding S itself gives 64 − 1 = 63 proper subsets.",
      incorrect:
        "Solve it in stages. Because all elements are distinct, X − Y contains all 4 elements of X. Union with Z adds 2 elements, so S has 6 elements. Then calculate all subsets: 2⁶ = 64. Proper subsets exclude the original set, giving 64 − 1 = 63.",
    },
    hint:
      "First find the number of elements in S. Then use 2ⁿ − 1 for proper subsets.",
  },
{
    id: "sets-nda-proper-subsets-010",
    difficulty: "Hard",
    prompt:
      "Consider three sets X, Y and Z having 6, 5 and 4 elements respectively. All these 15 elements are distinct. Let S = (X − Y) ∪ Z. How many proper subsets does S have?.      (NDA-PYQ,2021-11)    ",
    options: ["255", "256", "1023", "1024"],
    correctAnswer: "1023",
    feedback: {
      correct:
        "Correct! Since all 15 elements are distinct, X and Y have no elements in common. Therefore X − Y contains all 6 elements of X. Union with Z adds 4 more elements, so S has 6 + 4 = 10 elements. The total number of subsets is 2¹⁰ = 1024. Proper subsets exclude the original set itself, so 1024 − 1 = 1023.",
      incorrect:
        "Break the problem into steps. First, X − Y contains all 6 elements of X because the sets have no elements in common. Next, union with Z adds 4 elements, so S has 10 elements. All subsets = 2¹⁰ = 1024. Proper subsets exclude S itself: 1024 − 1 = 1023.",
    },
    hint:
      "Find the number of elements in S first. Then count all subsets and exclude the original set.",
  },
],
};

export default SetRealpreviousQuestion;