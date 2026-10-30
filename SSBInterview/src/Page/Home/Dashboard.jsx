import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BarChart3, ClipboardCheck, Loader2 } from "lucide-react";

import generateStudyPlan from "../../planner/generateStudyPlan";

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    
    async function getMyUser() {
    
       try {  
     const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login", { replace: true });
          return;
      }
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/users/me`,
          { headers: { Authorization: `Bearer ${token}` } }
        );


        if (response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login", { replace: true });
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to load your profile.");
        }

       const data = await response.json();

if (!data || !data.user) {
  throw new Error("Profile data is missing.");
}

setUser(data.user);
       // setUser(data.user);
      } catch (error) {
        console.error("Dashboard error:", error);
        setError("We couldn't load your dashboard.");
       
      } finally {
        setLoading(false);
      }
    }

    getMyUser();
  }, [navigate]);

  function startTodayMission() {
    console.log("math_topic:", JSON.stringify(user.math_topic));
    if (!user) return
  
    ;

    try {
      const studyPlan = generateStudyPlan({
        examDate: user.exam_date,
        studyTime: user.study_time,
        mockExperience: user.mock_experience,
        challenge: user.challenge,
        level: user.level,
        mathTopic: user.math_topic,
        gatTopic: user.gat_topic,
       lastCompletedId: user.last_completed_mission,
      });
console.log("Studyplannnnnnnnnnn:",studyPlan)
      navigate("/todaymission", { state: { studyPlan } });
    } catch (error) {
      console.error("Study plan error:", error);
      setError(
        "We couldn't create your study plan. Please check your study setup."
      );
    }
  }

  

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="flex items-center gap-3 text-slate-600">
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
          <span>Loading your dashboard...</span>
        </div>
      </main>
    );
  }

  if (error && !user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl shadow-indigo-100 ring-1 ring-slate-100">
          <h1 className="text-xl font-bold text-slate-900">
            Something went wrong
          </h1>
          <p className="mt-2 text-sm text-slate-600">{error}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Try again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-slate-50 to-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header>
          <p className="text-sm font-bold text-indigo-600">PivoTal AI</p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Welcome back, {user?.name} 👋
          </h1>

          <p className="mt-2 text-lg text-slate-600">
            Ready to continue your preparation?
          </p>
        </header>

        {error && (
          <div
            role="alert"
            className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {/* Today's Mission */}
        <section
          aria-labelledby="mission-title"
          className="relative mt-8 overflow-hidden rounded-[2rem] bg-indigo-950 p-7 shadow-xl shadow-indigo-200 sm:p-10"
        >
          {/* Decorative rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-24 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl"
          />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <span className="inline-block rounded-full bg-amber-400/15 px-3 py-1 text-sm font-semibold text-amber-300">
                Today's Mission
              </span>

              <h2
                id="mission-title"
                className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl"
              >
                Continue your NDA preparation
              </h2>

              <p className="mt-3 text-indigo-200">
                Your study plan is created from your preparation profile and
                today's available study time.
              </p>
            </div>

            <button
              type="button"
              onClick={startTodayMission}
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-base font-bold text-indigo-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-200"
            >
              Start Today's Mission
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </div>
        </section>

        {/* Progress + Mock Tests */}
        <section className="mt-6 grid gap-6 sm:grid-cols-2">
          {/* Progress */}
          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <BarChart3 className="h-6 w-6" aria-hidden="true" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">Progress</h3>

            <p className="mt-2 text-slate-600">
              Your learning history and performance will appear here.
            </p>
          </div>

          {/* Mock Tests (button) */}
          <button
            type="button"
           
            className="group flex flex-col items-start rounded-3xl bg-white p-7 text-left shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-100 hover:ring-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-200"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
              <ClipboardCheck className="h-6 w-6" aria-hidden="true" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Mock Tests
            </h3>

            <p className="mt-2 text-slate-600">
              Practice tests will be available here later.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-600">
              Coming soon for Mock Tests
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </button>
        </section>
      </div>
    </main>
  );
}