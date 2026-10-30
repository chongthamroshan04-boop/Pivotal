import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Check,
  Lightbulb,
  RotateCcw,
} from "lucide-react";

const primaryButton =
  "flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 font-sans text-lg font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 disabled:cursor-not-allowed disabled:bg-slate-300 sm:flex-1";

const secondaryButton =
  "flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-sans text-base font-medium text-slate-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200 sm:w-auto sm:flex-none sm:py-4 sm:text-lg";

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

function StepIndicator({ current }) {
  const steps = ["Learn", "Practice"];

  return (
    <ol className="flex items-center gap-3 font-sans" aria-label="Your progress">
      {steps.map((label, index) => {
        const number = index + 1;
        const done = number < current;
        const active = number === current;

        return (
          <li
            key={label}
            className="flex items-center gap-3"
            aria-current={active ? "step" : undefined}
          >
            <span
              className={`grid h-7 w-7 place-items-center rounded-full text-sm font-semibold ${
                done
                  ? "bg-teal-600 text-white"
                  : active
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 text-slate-600"
              }`}
            >
              {done ? <Check className="h-4 w-4" strokeWidth={3} /> : number}
            </span>
            <span
              className={`text-sm font-medium ${
                active ? "text-slate-900" : "text-slate-600"
              }`}
            >
              {label}
            </span>
            {index < steps.length - 1 && (
              <span className="h-px w-8 bg-slate-300" aria-hidden="true" />
            )}
          </li>
        );
      })}
    </ol>
  );
}

function PracticeQuestion({ question, onBack }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [responseText, setResponseText] = useState("");
  const feedbackRef = useRef(null);

  const isTextQuestion = Boolean(question?.acceptedAnswers?.length);
  const isCorrect = submitted
    ? isTextQuestion
      ? question.acceptedAnswers.some(
          (answer) =>
            String(answer).trim().toLowerCase() ===
            responseText.trim().toLowerCase()
        )
      : selectedOption === question?.correctAnswer
    : false;

  useEffect(() => {
    if (!submitted) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    feedbackRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
  }, [submitted]);

  function tryAgain() {
    setSelectedOption(null);
    setResponseText("");
    setSubmitted(false);
  }

  if (!question) {
    return (
      <PageShell
        actions={
          <button type="button" onClick={onBack} className={primaryButton}>
            <ArrowLeft className="h-5 w-5" />
            Back to lesson
          </button>
        }
      >
        <StepIndicator current={2} />
        <h1 className="mt-8 font-serif text-3xl text-slate-900">
          No question available yet
        </h1>
        <p className="mt-4 font-serif text-lg leading-relaxed text-slate-600">
          We could not find a practice question for your level. Go back to the
          lesson and try again later.
        </p>
      </PageShell>
    );
  }

  const letters = ["A", "B", "C", "D", "E", "F"];
  const canSubmit = isTextQuestion
    ? responseText.trim().length > 0
    : Boolean(selectedOption);

  let actions;
  if (!submitted) {
    actions = (
      <>
        <button
          type="button"
          disabled={!canSubmit}
          onClick={() => setSubmitted(true)}
          className={primaryButton}
        >
          Check answer
        </button>
        <button type="button" onClick={onBack} className={secondaryButton}>
          <ArrowLeft className="h-5 w-5" />
          Back to lesson
        </button>
      </>
    );
  } else if (isCorrect) {
    actions = (
      <button type="button" onClick={onBack} className={primaryButton}>
        <ArrowLeft className="h-5 w-5" />
        Back to lesson
      </button>
    );
  } else {
    actions = (
      <>
        <button type="button" onClick={tryAgain} className={primaryButton}>
          <RotateCcw className="h-5 w-5" />
          Try again
        </button>
        <button type="button" onClick={onBack} className={secondaryButton}>
          <ArrowLeft className="h-5 w-5" />
          Back to lesson
        </button>
      </>
    );
  }

  return (
    <PageShell actions={actions}>
      <StepIndicator current={2} />

      <h1 className="mt-8 font-serif text-2xl leading-snug text-slate-900 sm:text-3xl">
        {question.prompt}
      </h1>

      <p className="mt-3 font-sans text-base text-slate-600">
        {isTextQuestion
          ? "Type your answer, then submit it."
          : "Pick one answer, then press "}
        {!isTextQuestion && <strong className="font-semibold">Check answer</strong>}
      </p>

      {isTextQuestion ? (
        <div className="mt-6">
          <label
            htmlFor="practice-answer"
            className="mb-2 block font-sans text-sm font-medium text-slate-700"
          >
            Your answer
          </label>
          <input
            id="practice-answer"
            type="text"
            value={responseText}
            onChange={(event) => setResponseText(event.target.value)}
            disabled={submitted}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-sans text-base text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-100"
            placeholder="Type your answer here"
          />
        </div>
      ) : (
        <div role="radiogroup" aria-label="Answer choices" className="mt-6 space-y-3">
          {question.options?.map((option, index) => {
            const selected = selectedOption === option;
            const showCorrect = submitted && selected && isCorrect;
            const showWrong = submitted && selected && !isCorrect;

            let box =
              "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/60";
            let badge = "bg-slate-100 text-slate-700";

            if (selected && !submitted) {
              box = "border-indigo-600 bg-indigo-50";
              badge = "bg-indigo-600 text-white";
            }
            if (showCorrect) {
              box = "border-teal-600 bg-teal-50";
              badge = "bg-teal-600 text-white";
            }
            if (showWrong) {
              box = "border-amber-500 bg-amber-50";
              badge = "bg-amber-500 text-white";
            }
            if (submitted && !selected) {
              box = "border-slate-200 bg-white opacity-60";
            }

            return (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={selected}
                disabled={submitted}
                onClick={() => setSelectedOption(option)}
                className={`flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left font-sans text-lg text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200 disabled:cursor-default ${box}`}
              >
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-base font-semibold ${badge}`}
                  aria-hidden="true"
                >
                  {showCorrect ? (
                    <Check className="h-5 w-5" strokeWidth={3} />
                  ) : (
                    letters[index]
                  )}
                </span>
                <span className="flex-1">{option}</span>
              </button>
            );
          })}
        </div>
      )}

      <div ref={feedbackRef} aria-live="polite" className="mt-8">
        {submitted &&
          (isCorrect ? (
            <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal-600 text-white">
                  <Check className="h-6 w-6" strokeWidth={3} />
                </span>
                <div>
                  <h2 className="font-sans text-xl font-bold text-teal-900">
                    Correct!
                  </h2>
                  <p className="font-sans text-base text-teal-800">
                    Nice work. You understood the idea.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-white p-4">
                <p className="font-sans font-semibold text-slate-900">Why?</p>
                <p className="mt-2 font-serif text-base leading-relaxed text-slate-700">
                  {question.explanation}
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-amber-500 text-white">
                  <Lightbulb className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-sans text-xl font-bold text-amber-900">
                    Not quite
                  </h2>
                  <p className="font-sans text-base text-amber-800">
                    That&apos;s okay. Read this, then try again.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-white p-4">
                <p className="font-sans font-semibold text-slate-900">
                  Explanation
                </p>
                <p className="mt-2 font-serif text-base leading-relaxed text-slate-700">
                  {question.explanation}
                </p>
              </div>
            </div>
          ))}
      </div>
    </PageShell>
  );
}

export default PracticeQuestion;