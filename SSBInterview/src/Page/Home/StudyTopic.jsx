
import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Braces, X } from "lucide-react";

import { resolveLessonById } from "../../data/lessons/lessonRegistry.js";
//import { resolveQuestionById } from "../../data/questions/questionRegistry.js";
import analyzeMissionPerformance from "../../learning/performanceAnalyzer.js";

import {
  createMissionProgress,
  addMissionAttempt,
  updateMissionMastery,
} from "../../learning/missionProgress.js";

import {
  getMissionProgress,
  saveMissionProgress,
} from "../../api/missionProgressApi.js";

const primaryButton =
  "flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 font-sans text-lg font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 disabled:cursor-not-allowed disabled:bg-slate-300 sm:flex-1";

const secondaryButton =
  "flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-sans text-lg font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-100 sm:flex-1";

function PageShell({ children, actions }) {
  return (
    <div className="min-h-screen bg-[#F6F7FC] pb-52 font-sans sm:pb-36">
      <main className="mx-auto w-full max-w-2xl px-5 pt-8 sm:px-8 sm:pt-12">
        {children}
      </main>

      <div className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-2xl flex-col gap-3 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:flex-row sm:px-8">
          {actions}
        </div>
      </div>
    </div>
  );
}

function TopicHeader({ title }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-100 text-indigo-700">
        <Braces className="h-5 w-5" strokeWidth={2} />
      </span>

      <span className="font-sans text-base font-semibold text-slate-800">
        {title}
      </span>
    </div>
  );
}

function MissionProgress({ answeredQuestions, totalQuestions }) {
  if (answeredQuestions === 0 || totalQuestions === 0) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white/95 px-4 pb-3 pt-3 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-2xl items-center gap-3">
        <div className="flex flex-1 items-center gap-1.5">
          {Array.from({ length: totalQuestions }, (_, index) => (
            <div
              key={index}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                index < answeredQuestions
                  ? "bg-emerald-500"
                  : "bg-slate-200"
              }`}
            />
          ))}
        </div>

        <span className="min-w-[50px] text-right text-xs font-semibold tabular-nums text-slate-500">
          {answeredQuestions}/{totalQuestions}
        </span>
      </div>
    </div>
  );
}

export default function StudyTopic() {
  const { state } = useLocation();
  const { missionId } = useParams();


  const mission= state?.mission; // it mean mission variable trying to get only mission fron state
 

const lessonId = mission?.lessonId ?? missionId;

console.log("lessonId:",lessonId)
  const lesson = useMemo(
    () => resolveLessonById(lessonId),
    [lessonId]
  );
console.log("lessonId:", lessonId, "| lesson:", lesson);
  const practiceQuestions = lesson?.practice ?? [];
  const totalQuestions = practiceQuestions.length;

  const [learningStage, setLearningStage] = useState("understand");
  const [currentTeachingStep, setCurrentTeachingStep] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showWhy, setShowWhy] = useState(false);
  const [missionResults, setMissionResults] = useState([]);
const [sessionAnsweredCount, setSessionAnsweredCount] = useState(0);

console.log("sessionAnsweredCount",sessionAnsweredCount)
console.log("learningStage:",learningStage)
console.log("currentTeachingStep",currentTeachingStep)
console.log("selectedAnswer:",selectedAnswer)
console.log("currentQuestionIndex:",currentQuestionIndex)

  const [currentMissionProgress, setCurrentMissionProgress] =
    useState(() => createMissionProgress(mission));
  const missionAnalysis = useMemo(
    () => analyzeMissionPerformance(missionResults),
    [missionResults]
  );

 const answeredQuestions = Math.min(
  sessionAnsweredCount,
  totalQuestions
);
console.log("answeredQuestions",answeredQuestions)
  const teachingStep = lesson?.teachingSteps?.[currentTeachingStep];

  // -----------------------------------------
  // Select the question for the current stage
  // -----------------------------------------

  const question = useMemo(() => {
    if (learningStage === "try" || learningStage === "check") {
      return practiceQuestions[currentQuestionIndex] ?? null;
    }

    if (teachingStep?.interaction?.questionId) {
      return (
       // resolveQuestionById(teachingStep.interaction.questionId) ??
        practiceQuestions[0] ??
        null
      );
    }

    return teachingStep?.interaction ?? practiceQuestions[0] ?? null;
  }, [
    learningStage,
    practiceQuestions,
    currentQuestionIndex,
    teachingStep,
  ]);

  const isAnswerCorrect =
    selectedAnswer !== null &&
    selectedAnswer === question?.correctAnswer;

  // -----------------------------------------
  // Restore saved mission progress
  // -----------------------------------------

  useEffect(() => {
    let cancelled = false;

    async function loadMissionProgress() {
      try {
        const savedProgress = await getMissionProgress();

        if (cancelled) return;

        const savedMission = savedProgress.find(
          (progress) => progress.mission_id === missionId
        );

        if (!savedMission) return;

        const savedLesson = resolveLessonById(
          savedMission.lesson_id
        );

        const totalSteps = savedLesson?.teachingSteps?.length ?? 0;

        const rawStep = Number(savedMission.current_teaching_step);

        const validStep = Number.isInteger(rawStep)
          ? Math.max(
              0,
              Math.min(rawStep, Math.max(0, totalSteps - 1))
            )
          : 0;

        const attempts = Array.isArray(savedMission.attempts)
          ? savedMission.attempts
          : [];

       const questionCount = savedLesson?.practice?.length ?? 0;

// Start the practice questions again after refreshing.
const nextQuestionIndex = 0;

        setCurrentTeachingStep(validStep);
        setMissionResults(attempts);
        setCurrentQuestionIndex(nextQuestionIndex);
        setSelectedAnswer(null);
        setShowWhy(false);

      setLearningStage(
  questionCount > 0 ? "understand" : "try"
);
console.log("QuestionCount",questionCount)
        setCurrentMissionProgress({
          missionId: savedMission.mission_id,
          lessonId: savedMission.lesson_id,
          currentTeachingStep: validStep,
          attempts,
          masteryReached: savedMission.mastery_reached,
          masteredSkills: savedMission.mastered_skills || [],
          weakSkills: savedMission.weak_skills || [],
        });
      } catch (error) {
        if (!cancelled) {
          console.error("Failed to load mission progress:", error);
        }
      }
    }

    if (missionId && lessonId) {
      loadMissionProgress();
    }

    return () => {
      cancelled = true;
    };
  }, [missionId, lessonId]);

  // -----------------------------------------
  // Update mastery from recorded attempts
  // -----------------------------------------

  useEffect(() => {
       setCurrentMissionProgress((previousProgress) =>
    
        updateMissionMastery(previousProgress, missionAnalysis)
   
);
  }, [missionAnalysis]);

  // -----------------------------------------
  // Check answer and save attempt
  // -----------------------------------------

  const handleCheckAnswer = () => {
    if (selectedAnswer === null || !question) return;
setSessionAnsweredCount((count) => count + 1);
    const attempt = {
      questionId: question.id ?? question.questionId ?? null,
      skill:
        question.skill ??
        teachingStep?.interaction?.skill ??
        "unassigned",
      correct: isAnswerCorrect,
    };

    const updatedResults = [...missionResults, attempt];
    const updatedProgress = addMissionAttempt(
      currentMissionProgress,
      attempt
    );
console.log("updatedProgress",updatedProgress)
    setMissionResults(updatedResults);
    setCurrentMissionProgress(updatedProgress);
    setLearningStage("check");
    setShowWhy(false);

    // Save outside the React state updater.
   saveMissionProgress({ ...updatedProgress, missionId, lessonId }).catch((error) => {
      console.error("Failed to save mission progress:", error);
    });
  };

  // -----------------------------------------
  // Continue to the next question
  // -----------------------------------------

 const handleContinue = () => {
  const nextQuestionIndex = currentQuestionIndex + 1;

  console.log("CONTINUE DEBUG", {
    currentQuestionIndex,
    nextQuestionIndex,
    totalQuestions,
    currentQuestion: practiceQuestions[currentQuestionIndex]?.id,
    nextQuestion: practiceQuestions[nextQuestionIndex]?.id,
  });

  //setSelectedAnswer(null);
 // setShowWhy(false);

  if (nextQuestionIndex < totalQuestions) { // karigumba nextquestion pik a ba totalquestion dagi aduoiba taragadi next question si update two and try tasu update tw
    setCurrentQuestionIndex(nextQuestionIndex);
    setLearningStage("try");
    return;
  }

  setLearningStage("complete");
};
  
  // -----------------------------------------
  // Handle missing mission or lesson
  // -----------------------------------------
  useEffect(() => {
    if (learningStage !== "complete") return;

    saveMissionProgress({
      ...currentMissionProgress,
      missionId,
      lessonId,
      completed: true,
    }).catch((error) => {
      console.error("Failed to save completion:", error);
    });
  }, [learningStage]);

  if (!mission || !lesson) {
    return (
      <PageShell
        actions={
          <button
            type="button"
            onClick={() => window.history.back()}
            className={primaryButton}
          >
            <ArrowLeft className="h-5 w-5" />
            Back
          </button>
        }
      >
        <h1 className="mt-8 font-serif text-3xl text-slate-900">
          No lesson is ready yet
        </h1>

        <p className="mt-4 font-serif text-lg leading-relaxed text-slate-600">
          Choose a mission first to start a guided learning session.
        </p>
      </PageShell>
    );
  }

 
  function DecreaseQuestion () {
   
const decreaseQuestion = currentQuestionIndex - 1   ;
setLearningStage("understand")
console.log( "test",decreaseQuestion)
if (decreaseQuestion >= 0) { //  if decreaseQuestion is bigger than 0,update decreaseQuestion and show try stage
  setCurrentQuestionIndex(decreaseQuestion)
setLearningStage("try")
setSessionAnsweredCount((count) => count - 1);
return;
}

setShowWhy(false) 
}
 // -----------------------------------------
  // Main page
  // -----------------------------------------
  return (
    <>
      <MissionProgress
        answeredQuestions={sessionAnsweredCount}
        totalQuestions={totalQuestions}
      />

      <PageShell
        actions={
          <>
            {learningStage === "understand" && (
              <button
                type="button"
                onClick={() => {
                  if (totalQuestions === 0) {
                    setLearningStage("complete");
                  } else {
                    setLearningStage("try");
                  }
                }}
                className={primaryButton}
              >
                I Understand — Start Questions
                <ArrowRight className="h-5 w-5" />
              </button>
            )}
  
  {learningStage === "try" && (
       
                 <>
                 <button
                  className={secondaryButton}
                  onClick={DecreaseQuestion}
              >
                  <ArrowLeft className="h-5 w-5" />
                  Back
                     
                </button>

                <button
                  type="button"
                 onClick={handleCheckAnswer}
                  disabled={selectedAnswer===null}
                  className={primaryButton}
                >
                  Check answer
                  <ArrowRight className="h-5 w-5" />
                </button>
              </>
    )}

            {learningStage === "check" && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setShowWhy((previous) => !previous)
                  }
                  className={secondaryButton}
                >
                  Why?
                </button>

                <button
                  type="button"
                  onClick={handleContinue}
                  className={primaryButton}
                >
                  Continue
                  <ArrowRight className="h-5 w-5" />
                </button>
              </>
            )}

            {learningStage === "complete" && (
              <button
                type="button"
                onClick={() => window.history.back()}
                className={primaryButton}
              >
                Return to missions
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
          </>
        }
      >
        <TopicHeader title={lesson.title} />

        {/* Understand stage */}
        {learningStage === "understand" &&  (
  

          <div className="mt-10">
            <button
  type="button"
  className="fixed left-4 top-5 z-50 rounded-lg border border-slate-700 bg-white px-4 py-2 font-medium text-slate-700 shadow-md hover:bg-slate-100"
  onClick={() => window.history.back()}
>
  ← Back
</button>
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Learn
            </p>

            <h1 className="mt-3 font-serif text-3xl leading-snug text-slate-900 sm:text-4xl">
              {teachingStep?.concept}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {teachingStep?.explanation}
            </p>

            {teachingStep?.example?.examples?.[0] && (
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {teachingStep.example.title}
                </p>

                <div className="mt-5">
                  <p className="text-3xl font-semibold text-slate-900">
                    {teachingStep.example.examples[0].expression}
                  </p>

                  <p className="mt-2 text-2xl font-semibold text-indigo-600">
                    = {teachingStep.example.examples[0].result}
                  </p>

                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {teachingStep.example.examples[0].explanation}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Question and feedback stages */}
        {(learningStage === "try" || learningStage === "check") &&
          question && (
            <div className="mt-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </p>

              <h1 className="mt-3 font-serif text-3xl leading-snug text-slate-900 sm:text-4xl">
                Let's see what you know
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-800">
                {question.prompt}
              </p>

              <div className="mt-6 space-y-3">
                {question.options?.map((option) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectOption =
                    option === question.correctAnswer;

                  let optionStyle =
                    "border-slate-200 bg-white text-slate-800 hover:border-indigo-400 hover:bg-indigo-50";
  if (learningStage === "try" && isSelected) {
                    optionStyle =
                      "border-indigo-600 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-200";
                  }

                  if (learningStage === "check") {
                    if (isSelected && isAnswerCorrect) {
                      optionStyle =
                        "border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-200";
                    } else if (isSelected && !isAnswerCorrect) {
                      optionStyle =
                        "border-red-500 bg-red-50 text-red-900 ring-2 ring-red-200";
                    } else if (isCorrectOption) {
                      optionStyle =
                        "border-emerald-400 bg-emerald-50 text-emerald-900";
                
                    }
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={learningStage === "check"}
                      onClick={() => setSelectedAnswer(option)}
                      className={`w-full rounded-xl border px-5 py-4 text-left text-base transition disabled:cursor-default ${optionStyle}`}
                    >
                      {option}

                      {learningStage === "check" &&
                        isCorrectOption && (
                          <span className="float-right font-bold text-emerald-600">
                            ✓
                          </span>
                        )}

                      {learningStage === "check" &&
                        isSelected &&
                        !isAnswerCorrect && (
                          <span className="float-right font-bold text-red-600">
                            ✗
                          </span>
                        )}
                    </button>
                  );
                })}
              </div>

           {/*}    {learningStage === "check" && (
                <div
                  className={`mt-8 rounded-2xl border p-6 ${
                    isAnswerCorrect
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                 <h2
                    className={`text-xl font-semibold ${
                      isAnswerCorrect
                        ? "text-emerald-800"
                        : "text-red-800"
                    }`}
                  >
                    {isAnswerCorrect
                      ? "🎉 Correct!"
                      : "Let's understand the mistake"}
                  </h2>

                  <p className="mt-3 text-base leading-relaxed">
                    {isAnswerCorrect
                      ? question?.feedback?.correct
                      : question?.feedback?.incorrect}
                  </p>
                </div> 
              )} */}
            </div>
        )}

        {/* No available practice question */}
        {(learningStage === "try" || learningStage === "check") &&
          !question && (
            <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h1 className="text-2xl font-semibold text-amber-900">
                No question available
              </h1>
              <p className="mt-3 text-amber-800">
                This lesson needs a practice question at the current index.
              </p>
            </div>
          )}

        {/* Completion screen */}
        {learningStage === "complete" && (
          <div className="mt-10 rounded-2xl border border-emerald-200 bg-white p-6">
            <h1 className="font-serif text-3xl text-slate-900">
              Questions completed!
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              You have reached the end of this lesson's practice questions.
            </p>

            <p className="mt-5 font-semibold text-slate-800">
              Questions answered: {answeredQuestions} of {totalQuestions}
            </p>
          </div>
        )}

        {/* Why? explanation drawer */}
        {learningStage === "check" && showWhy && question && (
          <aside
            aria-label="Explanation"
            className="fixed left-0 top-0 z-40 h-screen w-80 max-w-[85vw] border-r border-white/10 bg-neutral-950 text-white shadow-2xl shadow-black/60"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div>
                  <p className="text-xs font-medium text-neutral-500">
                    Explanation
                  </p>
                  <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">
                    Why?
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setShowWhy(false)}
                  aria-label="Close explanation"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <X size={16} strokeWidth={2.25} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6">
                <div
                  className={`rounded-xl border px-4 py-3.5 ${
                    isAnswerCorrect
                      ? "border-emerald-500/30 bg-emerald-500/10"
                      : "border-red-500/30 bg-red-500/10"
                  }`}
                >
                  <p className="text-xs text-neutral-400">
                    {isAnswerCorrect ? "Your answer" : "Let's understand"}
                  </p>

                  <p
                    className={`mt-1 text-base font-semibold ${
                      isAnswerCorrect
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {isAnswerCorrect ? "Correct" : "Not quite"}
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-white">
                    Explanation
                  </h3>

                  <div className="mt-3 border-l-2 border-white/15 pl-4">
                    <p className="text-sm leading-7 text-neutral-300">
                      {isAnswerCorrect
                        ? question?.feedback?.correct
                        : question?.feedback?.incorrect}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        )}
      </PageShell>
    </>
  );
}