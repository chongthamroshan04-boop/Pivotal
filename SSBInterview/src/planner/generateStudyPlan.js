import examStage from "./examStage.js";
import createChallengePlan from "./challengeselector.js";
import createExperiencePlan from "./experiencePlanner.js";
import createLevelPlan from "./levelPlanner.js";
import createStudyTimePlan from "./studyTimePlanner.js";

import syllabus from "../data/syllabus.js";
import lessonMap from "../data/lessonMap.js";
import roadmap from "./roadmap.mjs";

const SUBJECTS = Object.keys(syllabus);
const allMissions = roadmap();

function getPrioritySubject(prioritySubject) {
  return SUBJECTS.includes(prioritySubject)
    ? prioritySubject
    : "Mathematics";
}

function getStartingChapter(subject, focus) {
  return syllabus[subject].includes(focus)
    ? focus
    : syllabus[subject][0];
}

function getLessonId(subject, chapter) {
  const lessons = lessonMap[subject]?.[chapter];

  if (!lessons || lessons.length === 0) {
    return null;
  }

  return lessons[0];
}

export function generateStudyPlan({
  examDate,
  studyTime,
  mockExperience,
  challenge,
  level,
  mathTopic,
  gatTopic,
}) {
  // PREPARE
  const stagePlan = examStage(examDate);
  const timePlan = createStudyTimePlan(studyTime);
  const experiencePlan = createExperiencePlan(mockExperience);
  const challengePlan = createChallengePlan(challenge);
  const levelPlan = createLevelPlan(level);

 const wanted = String(mathTopic || "").trim().toLowerCase();

const foundIndex = allMissions.findIndex(
  (m) =>
    m.group.toLowerCase() === wanted ||
    m.id.toLowerCase() === wanted ||
    m.topic.toLowerCase() === wanted
);

const start = foundIndex === -1 ? 0 : foundIndex;

  // ROOM A: time management
  if (challengePlan.type === "time-management") {
    const lessonId = getLessonId("TimeManagement", "Exam Pacing");

    const todayMission = Array.from(
      { length: timePlan.totalTasks },
      (_, index) => ({
        id: `mission-${index + 1}`,
        subject: "Time Management",
        chapter: "Exam Pacing",
        lessonId,
        duration: timePlan.minutesPerTask,
        status: index === 0 ? "current" : "locked",
      })
    );

    return {
      todayMission,
      totalStudyMinutes: timePlan.totalStudyMinutes,
      totalTasks: todayMission.length,
      preparationStage: stagePlan.stage,
      learningStyle: levelPlan,
    };
  }

  const selectedTopic =
    challenge === "I find Mathematics difficult."
      ? mathTopic
      : challenge === "I find GAT difficult."
        ? gatTopic
        : "";

  const prioritySubject = getPrioritySubject(
    challengePlan.prioritySubject || challengePlan.subject
  );

  // ROOM B: Mathematics roadmap
  if (prioritySubject === "Mathematics") {
    const todayMission = allMissions
      .slice(start, start + timePlan.totalTasks)
      .map((mission, index) => ({
        ...mission,
        subject: "Mathematics",
        chapter: mission.topic,
        duration: timePlan.minutesPerTask,
        status: index === 0 ? "current" : "locked",
      }));

    const currentMission = todayMission[0];

    return {
      todayMission,
      currentMission,
      allMissions,
      totalStudyMinutes: timePlan.totalStudyMinutes,
      totalTasks: todayMission.length,
      preparationStage: stagePlan.stage,
      learningStyle: levelPlan,
    };
  }

  // ROOM C: other subjects (old syllabus logic)
  const secondarySubject = SUBJECTS.find(
    (subject) => subject !== prioritySubject
  );

  const priorityChapter =
    selectedTopic ||
    getStartingChapter(prioritySubject, challengePlan.focus);

  const priorityChapterIndex =
    syllabus[prioritySubject].indexOf(priorityChapter);

  const chapterOffset = levelPlan.level === "Beginner" ? 0 : 1;

  const includeSecondarySubject = experiencePlan.fullMock;

  const todayMission = Array.from(
    { length: timePlan.totalTasks },
    (_, index) => {
      const isPriorityTask =
        !includeSecondarySubject ||
        index % 2 === 0 ||
        !secondarySubject;

      const subject = isPriorityTask ? prioritySubject : secondarySubject;

      const chapters = syllabus[subject];

      const chapterIndex = isPriorityTask
        ? (Math.max(priorityChapterIndex, 0) + index + chapterOffset) %
          chapters.length
        : (index + chapterOffset) % chapters.length;

      const chapter =
        isPriorityTask && selectedTopic
          ? selectedTopic
          : chapters[chapterIndex];

      const lessonId =
        subject === "Mathematics" &&
        chapter === "Algebra" &&
        levelPlan.level === "Beginner"
          ? "algebra-foundation-arithmetic-operations"
          : getLessonId(subject, chapter);

      return {
        id: `mission-${index + 1}`,
        subject,
        chapter,
        lessonId,
        duration: timePlan.minutesPerTask,
        status: index === 0 ? "current" : "locked",
      };
    }
  );

  return {
    todayMission,
    totalStudyMinutes: timePlan.totalStudyMinutes,
    totalTasks: todayMission.length,
    preparationStage: stagePlan.stage,
    learningStyle: levelPlan,
  };
}

export default generateStudyPlan;