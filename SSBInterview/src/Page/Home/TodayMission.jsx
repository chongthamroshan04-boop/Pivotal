import { useLocation, useNavigate } from "react-router-dom";

import { ArrowRight, Lock, } from "lucide-react";

import { getMissionProgress } from "../../api/missionProgressApi.js";
import { getMissionStatuses } from "../../planner/missionStatus.js";
import { useEffect } from "react";
import { useState } from "react";

function TodayMission() {
  const { state } = useLocation();

  const navigate = useNavigate();

const OPEN_MISSIONS = [
"algebra",
"trigonometry",
"MatricesAndDeterminants",
"AnalyticalGeometry",
"StatisticsProbability",
"DifferentialCalculus",
"IntegralCalculus"
]


  const [completedIds, setCompletedIds] = useState([]);

  useEffect(() => {
    getMissionProgress()
      .then((rows) => {
        const ids = rows.filter((r) => r.completed).map((r) => r.mission_id);
        console.log("completedIds:", ids);
        setCompletedIds(ids);
      })
      .catch((error) => console.error(error));
  }, []);





  const studyPlan = state?.studyPlan;
  if (!studyPlan) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <p className="rounded-2xl bg-white px-6 py-4 text-center text-slate-600 shadow-sm ring-1 ring-slate-100">
          Create a study plan first.
        </p>
      </main>
    );
  }

  const startMission = (mission, missionIndex) => {
    navigate(`/study/${mission.id}`, {
      state: {
        mission,
        missionIndex,
        studyPlan,
      },
    });
  };

  const missionsWithStatus = getMissionStatuses(
    studyPlan.allMissions ?? [],
    completedIds
  );




  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-slate-50 to-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-2xl">

       <button
  type="button"
  className="fixed left-4 top-5 z-50 rounded-lg border border-slate-700 bg-white px-4 py-2 font-medium text-slate-700 shadow-md hover:bg-slate-100"
  onClick={() => window.history.back()}
>
  ← Back
</button>
        {/* Header */}
        <header className="relative overflow-hidden rounded-[2rem] bg-indigo-950 p-7 shadow-xl shadow-indigo-200 sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-4 h-36 w-36 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl"
          />

          <div className="relative">
            <span className="inline-block rounded-full bg-amber-400/15 px-3 py-1 text-sm font-semibold text-amber-300">
              {studyPlan.preparationStage} Stage
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Today's Mission
            </h1>

            <div className="mt-6 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-sm">
              <p className="text-sm font-medium text-indigo-200">
                Today's Goal
              </p>

              <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
              Complete {studyPlan.todayMission.length}{" "}
{studyPlan.todayMission.length === 1 ? "Mission " : "missions"}
              </p>

              <p className="mt-1 text-sm text-indigo-200">
                {studyPlan.totalStudyMinutes} minutes of focused preparation
              </p>
            </div>
          </div>
        </header>
{studyPlan.allMissions && (
  <section className="mt-10">
    <h2 className="text-xl font-bold text-slate-900">All Missions</h2>

    <ul className="mt-4 space-y-2">
      {missionsWithStatus.map((m, index) => {
  const isOpen = m.status !== "locked";
  const isNewGroup =
    index === 0 || missionsWithStatus[index - 1].group !== m.group;

        return (
          <li key={m.id}>
            {isNewGroup && (
              <p className="mb-2 mt-6 text-sm font-bold uppercase tracking-wide text-indigo-600">
                {m.group}
              </p>
            )}

            <div
              className={
                isOpen
                  ? "flex items-center justify-between gap-4 rounded-2xl bg-white p-4 ring-2 ring-amber-300"
                  : "flex items-center justify-between gap-4 rounded-2xl bg-slate-100 p-4 ring-1 ring-slate-200"
              }
            >
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  {m.title}
                </p>
                <p
                  className={
                    isOpen ? "font-medium text-slate-900" : "font-medium text-slate-400"
                  }
                >
                  {m.topic}
                </p>
              </div>

              {isOpen ? (
                <button
                  type="button"
                  onClick={() => startMission(m, index)}
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-700"
                >
                  Study
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                  <Lock className="h-4 w-4" aria-hidden="true" />
                  Locked
                </span>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  </section>
)}







      </div>
    </main>
  );
}

export default TodayMission;
