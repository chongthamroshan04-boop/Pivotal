import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContinueButton from "../../components/Startup/ContinueButton"
import ExamDatePicker from "../../components/Startup/ExamDatePicker"
import MockExperienceSelector from "../../components/Startup/MockExperienceSelector"
import ChallengeSelector from "../../components/Startup/ChallengeSelector"
import StudyTimeSelector from "../../components/Startup/StudyTimeSelector"
import LevelPlanner from "../../components/Startup/LevelPlanner"
//import generateStudyPlan from "../../planner/generateStudyPlan.js";
import MathTopicSelector from "../../components/Startup/MathTopicSelector.jsx";
//import GATTopicSelector from "../../components/Startup/GATTopicSelector.jsx";

function StartUp() {

  const navigate = useNavigate();
  const [answers, setAnswers] = useState({examDate: "",
 level: "",
 studyTime: "",
 mockExperience: "",
 challenge: "",
 mathTopic: "",
gatTopic: "",});
     console.log(answers);

  const [error, setError] = useState("");
console.log(error);
  const updateAnswer = (field ,value ) => {
    setAnswers((currentAnswer) => ({ ...currentAnswer, [field]:value }));
    setError("");
  };

  const handleContinue = async () => {
    const requiredAnswers = [
      answers.examDate,
      answers.level,
      answers.studyTime,
      answers.mockExperience,
      answers.challenge,
    ];

    if (requiredAnswers.some((answer) => !answer)) {
      setError("Please answer every question before continuing.");
      return;
    }

   {/* if (
      answers.challenge === "I find Mathematics difficult." &&
      !answers.mathTopic
    ) {
      setError("Please choose a Mathematics topic before continuing.");
      return;
    }*/}
    if (
      answers.challenge === "I find GAT difficult." &&
      !answers.gatTopic
    ) {
      setError("Please choose a GAT topic before continuing.");
      return;

    }
    const token = localStorage.getItem("token");

    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/onboarding`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(answers),
    });

    const data = await response.json();
console.log(data);
    if (!response.ok) {
      setError(data.message || "Failed to save onboarding.");
      return;
    }

    navigate("/dashboard"); //must be dashboard

  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-50 via-slate-50 to-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      {/* Soft background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-indigo-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-indigo-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Header */}
        <header className="mb-8">
          <p className="text-sm font-bold text-indigo-600">PivoTal AI</p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Set up your preparation
          </h1>

          <p className="mt-2 text-lg text-slate-600">
            Answer a few questions so we can build your study plan.
          </p>
        </header>

        {/* Questions */}
        <div className="space-y-6">
          <LevelPlanner value={answers.level} onChange={(value) => updateAnswer("level", value)} />

          <ExamDatePicker value={answers.examDate} onChange={(value) => updateAnswer("examDate", value)} />

          <StudyTimeSelector value={answers.studyTime} onChange={(value) => updateAnswer("studyTime", value)} />

          <MockExperienceSelector value={answers.mockExperience} onChange={(value) => updateAnswer("mockExperience", value)} />

          <ChallengeSelector value={answers.challenge} onChange={(value) => updateAnswer("challenge", value)} />

          {/*  {answers.challenge === "I find Mathematics difficult." && (
          <MathTopicSelector
              value={answers.mathTopic}
              onChange={(selectedTopic) =>
                updateAnswer("mathTopic", selectedTopic)
              }
            />
          )}
*/}
       {/*  {answers.challenge === "I find GAT difficult." && (
       //     <GATTopicSelector
         //     value={answers.gatTopic}
          //    onChange={(selectedTopic) =>
                updateAnswer("gatTopic", selectedTopic)
           //   }
            ///>
          )} */}
        </div>

        {error && (
          <div
            role="alert"
            className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          >
            {error}
          </div>
        )}

        <div className="mt-8">
          <ContinueButton onContinue={handleContinue} />
        </div>
      </div>
    </main>
  )
}

export default StartUp