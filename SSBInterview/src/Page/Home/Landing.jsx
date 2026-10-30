import { useState } from "react";
import { useNavigate } from "react-router-dom";
/**
 * PivoTal — NDA Written Exam & SSB Interview Preparation
 * Design language: "Institutional / Parade Ground"
 * — deep navy & olive drab, brass insignia gold, parchment paper texture,
 *   ruled-margin dividers (exam answer sheet), Playfair Display headlines,
 *   Oswald stencil-style labels, Inter body copy.
 */

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Oswald:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap";

const faqs = [
  {
    q: "What exactly does PivoTal prepare me for?",
    a: "Two things, back to back: the NDA written exam (Maths + GAT) and the 5-day SSB interview process that follows it. Most platforms only cover one — we built ours so you never have to switch tools mid-journey.",
  },
  {
    q: "How is the mock testing structured?",
    a: "Full-length, negative-marking-accurate mocks that mirror the real UPSC paper pattern and timing. After every test you get a sectional breakdown so you know exactly which topics cost you marks.",
  },
  {
    q: "I've never faced an SSB before. Will I be lost?",
    a: "No. The 5-day activity module walks you through Screening, Psychology, GTO tasks, and the Personal Interview in the same order the board runs them, with guided practice at each stage.",
  },
  {
    q: "Can I track whether I'm actually improving?",
    a: "Yes — every attempt feeds your performance ledger: accuracy by topic, speed trends, and a mock-to-mock score curve, so progress is something you can see, not guess at.",
  },
];

const stats = [
  { value: "Written Exam Preparation", label: "Structured learning for Mathematics, English, and General Knowledge." },
  { value: "5-Day SSB Preparation", label: "Practice every stage of the SSB selection process." },
  { value: "Progress Tracking", label: "Monitor your strengths and improve weak subjects." },
];

const whyChoose = [
  { title: "Structured Learning", desc: "A fixed syllabus path, not a pile of random videos — every day has a job to do." },
  { title: "Time Management", desc: "Sectional timers that train you to finish papers the way the exam demands." },
  { title: "Smart Practice", desc: "Weak-topic detection so revision time goes where it's actually needed." },
  { title: "Full-Length Mocks", desc: "Paper pattern, marking scheme, and difficulty matched to the real UPSC exam." },
  { title: "Performance Ledger", desc: "One dashboard tracking every attempt from day one to exam day." },
];

const problems = [
  { tag: "01", title: "Poor Time Management", desc: "Aspirants know the syllabus but run out of time on paper — accuracy alone isn't enough." },
  { tag: "02", title: "Incomplete Preparation", desc: "Written prep and SSB prep are treated as separate journeys, started too late." },
  { tag: "03", title: "Lack of Real Practice", desc: "Solving PDFs isn't the same as sitting a timed, negatively-marked paper under pressure." },
];

const steps = [
  { n: "01", title: "Assess", desc: "Take a diagnostic mock to see exactly where you stand today." },
  { n: "02", title: "Study", desc: "Follow a structured plan built around your weak topics." },
  { n: "03", title: "Practice", desc: "Sit full-length mocks and SSB simulations under real conditions." },
  { n: "04", title: "Review", desc: "Read your performance ledger and correct course before the next attempt." },
];

function Check() {

  
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="9" fill="#C7A028" />
      <path d="M5 9.2L7.6 11.8L13 6" stroke="#10202E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}



function Chevron({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
    >
      <path d="M3 6L8 11L13 6" stroke="#10202E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PivotalLanding() {
  const [openFaq, setOpenFaq] = useState(0);
 
 const navigate = useNavigate(); 

function NavigatetoLogin(){
  
navigate("/login")
}


  return (
    <div className="pv-root">
      <style>{`
        @import url('${FONT_IMPORT_URL}');

        .pv-root {
          --ink: #10202E;
          --ink-soft: #45536A;
          --olive: #3E4A34;
          --brass: #C7A028;
          --brass-light: #E4C567;
          --parchment: #F5F1E6;
          --parchment-dark: #EAE3D0;
          --rule: #CBBFA0;
          --paper-red: #9C3B32;
          font-family: 'Inter', sans-serif;
          background: var(--parchment);
          color: var(--ink);
          min-height: 100vh;
        }
        .pv-serif { font-family: 'Playfair Display', serif; }
        .pv-label {
          font-family: 'Oswald', sans-serif;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .pv-ruled {
          background-image: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 34px,
            var(--rule) 34px,
            var(--rule) 35px
          );
        }
        .pv-margin-line {
          position: relative;
        }
        .pv-margin-line::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--paper-red);
          opacity: 0.55;
        }
        .pv-btn-primary {
          background: var(--brass);
          color: var(--ink);
          font-family: 'Oswald', sans-serif;
          letter-spacing: 0.06em;
        }
        .pv-btn-primary:hover { background: var(--brass-light); }
        .pv-card {
          background: #FFFDF8;
          border: 1px solid var(--parchment-dark);
        }
        .pv-badge-num {
          font-family: 'Playfair Display', serif;
          color: var(--brass);
          opacity: 0.9;
        }
      `}</style>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[var(--ink)] text-[var(--parchment)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="pv-serif text-2xl font-bold tracking-tight">
            PivoTal <span style={{ color: "var(--brass)" }}>AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 pv-label text-xs">
            <a href="#why" className="hover:text-[var(--brass-light)] transition-colors">Why PivoTal</a>
            <a href="#features" className="hover:text-[var(--brass-light)] transition-colors">Features</a>
            <a href="#how" className="hover:text-[var(--brass-light)] transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-[var(--brass-light)] transition-colors">FAQ</a>
          </nav>
          
        </div>
        <div style={{ height: "3px", background: "linear-gradient(90deg, var(--brass) 0%, var(--brass) 40%, transparent 40%)" }} />
      </header>

      {/* HERO */}
      <section className="pv-ruled relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="pv-label text-xs mb-5" style={{ color: "var(--olive)" }}>
              NDA Written Exam &nbsp;·&nbsp; SSB Interview Programme
            </div>
            <h1 className="pv-serif text-4xl sm:text-5xl font-extrabold leading-[1.12]">
              Master the Written Exam.
              <br />
              Command the SSB Interview.
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed" style={{ color: "var(--ink-soft)", maxWidth: "34rem" }}>
              One structured path from your first mock test to your final SSB day —
              built for aspirants who want a real plan, not a pile of PDFs.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <button onClick={NavigatetoLogin}
               className="pv-btn-primary px-6 py-3.5 rounded-sm text-sm font-medium cursor-pointer">
                Prepare for Written Exam
              </button>
              <button
                className="px-6 py-3.5 rounded-sm text-sm font-medium pv-label"
                style={{ border: "1.5px solid var(--ink)", color: "var(--ink)" }}
              >
                Comming soon for SSB
              </button>
            </div>

            <div className="mt-10 flex items-center gap-3 text-xs" style={{ color: "var(--ink-soft)" }}>
              <Check />
              <span>No credit card required to start your first mock test</span>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 rounded-sm"
              style={{ background: "var(--olive)", opacity: 0.9 }}
            />
            <div className="relative rounded-sm overflow-hidden" style={{ border: "3px solid var(--brass)" }}>
              <img
                src="/Background2.jpg"
                alt="NDA aspirant preparing for exam"
                className="w-full h-[420px] object-cover"
              />
            </div>
            {/* corner insignia */}
            <div
              className="absolute -bottom-5 -left-5 pv-card rounded-sm px-5 py-3 shadow-lg"
              style={{ borderColor: "var(--brass)" }}
            >
              <div className="pv-serif text-2xl font-bold" style={{ color: "var(--olive)" }}>85%</div>
              <div className="pv-label text-[10px]" style={{ color: "var(--ink-soft)" }}>Avg. Score Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="bg-[var(--ink)] text-[var(--parchment)]">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#2A3B4D]">
          {stats.map((s) => (
            <div key={s.label} className="text-center py-6 sm:py-0">
              <div className="pv-serif text-4xl font-bold" style={{ color: "var(--brass)" }}>{s.value}</div>
              <div className="pv-label text-xs mt-2" style={{ color: "var(--parchment-dark)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section id="why" className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14">
          <div className="pv-label text-xs mb-3" style={{ color: "var(--olive)" }}>Why Aspirants Choose Us</div>
          <h2 className="pv-serif text-3xl sm:text-4xl font-bold">Why Students Choose PivoTal AI</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {whyChoose.map((item) => (
            <div key={item.title} className="pv-card pv-margin-line rounded-sm p-6 pl-7">
              <h3 className="pv-serif text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEMS WE SOLVE */}
      <section className="pv-ruled" style={{ background: "var(--parchment-dark)" }}>
        <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14">
          <div>
            <div className="pv-label text-xs mb-3" style={{ color: "var(--paper-red)" }}>The Real Struggle</div>
            <h2 className="pv-serif text-3xl sm:text-4xl font-bold leading-tight">
              We Solve the Challenges Faced by NDA Aspirants
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--ink-soft)", maxWidth: "30rem" }}>
              These aren't guesses — they're the three reasons most aspirants
              repeat an attempt, according to what students tell us after every exam cycle.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {problems.map((p) => (
              <div key={p.tag} className="flex gap-5 items-start pv-card rounded-sm p-6">
                <div className="pv-badge-num text-3xl font-bold leading-none">{p.tag}</div>
                <div>
                  <h3 className="pv-serif text-lg font-bold mb-1">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES (kept intentionally minimal) */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14">
          <div className="pv-label text-xs mb-3" style={{ color: "var(--olive)" }}>What You Get</div>
          <h2 className="pv-serif text-3xl sm:text-4xl font-bold">Everything Built Around One Goal</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { title: "Written Exam Mocks", desc: "Full-length, UPSC-pattern papers with accurate negative marking." },
            { title: "SSB 5-Day Simulation", desc: "Screening through Personal Interview, practiced in real sequence." },
            { title: "Performance Ledger", desc: "Every attempt logged, so you always know where you stand." },
          ].map((f) => (
            <div key={f.title} className="rounded-sm p-7" style={{ background: "var(--ink)", color: "var(--parchment)" }}>
              <div className="w-10 h-10 rounded-sm flex items-center justify-center mb-5" style={{ background: "var(--brass)" }}>
                <span className="pv-serif font-bold" style={{ color: "var(--ink)" }}>✓</span>
              </div>
              <h3 className="pv-serif text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--parchment-dark)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ background: "var(--olive)" }} className="text-[var(--parchment)]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-14">
            <div className="pv-label text-xs mb-3" style={{ color: "var(--brass-light)" }}>The Process</div>
            <h2 className="pv-serif text-3xl sm:text-4xl font-bold">How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="pv-serif text-5xl font-bold mb-4" style={{ color: "var(--brass)", opacity: 0.85 }}>
                  {s.n}
                </div>
                <h3 className="pv-serif text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment-dark)" }}>{s.desc}</p>
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-6 -right-4 w-8 h-px"
                    style={{ background: "var(--brass)", opacity: 0.5 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT PROGRESS PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="pv-label text-xs mb-3" style={{ color: "var(--olive)" }}>See It In Action</div>
            <h2 className="pv-serif text-3xl sm:text-4xl font-bold mb-5">You can easily understand how much progress you've made.</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--ink-soft)", maxWidth: "28rem" }}>
              Every mock test updates one ledger — accuracy, speed, and topic-wise
              weak spots — so preparation stops being a guessing game.
            </p>
            <ul className="flex flex-col gap-3">
              {["Score trend across every attempt", "Topic-wise accuracy breakdown", "Time-per-section comparison"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm" style={{ color: "var(--ink-soft)" }}>
                  <Check /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="pv-card rounded-sm p-7 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="pv-label text-xs" style={{ color: "var(--ink-soft)" }}>Mock Test Ledger</div>
              <div className="pv-serif text-sm font-bold" style={{ color: "var(--brass)" }}>Mock #14</div>
            </div>
            <div className="flex items-end gap-3 h-32 mb-4">
              {[42, 55, 48, 63, 71, 68, 82].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{ height: `${h}%`, background: i === 6 ? "var(--brass)" : "var(--olive)", opacity: i === 6 ? 1 : 0.55 }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--parchment-dark)" }}>
              <div>
               
              </div>
              <div className="text-right">
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="pv-ruled" style={{ background: "var(--parchment-dark)" }}>
        <div className="max-w-3xl mx-auto px-6 py-24">
          <div className="mb-12">
            <div className="pv-label text-xs mb-3" style={{ color: "var(--olive)" }}>Questions, Answered</div>
            <h2 className="pv-serif text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="pv-card rounded-sm overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between text-left px-6 py-5"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                  >
                    <span className="pv-serif font-bold text-base pr-4">{f.q}</span>
                    <Chevron open={open} />
                  </button>
                  {open && (
                    <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--ink)", color: "var(--parchment-dark)" }}>
        <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="pv-serif text-2xl font-bold mb-3" style={{ color: "var(--parchment)" }}>
              PivoTal <span style={{ color: "var(--brass)" }}>AI</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Structured preparation for the NDA Written Exam and the SSB Interview,
              built by people who've sat through both.
            </p>
          </div>
          <div>
            <div className="pv-label text-xs mb-4" style={{ color: "var(--brass-light)" }}>Preparation</div>
            <ul className="flex flex-col gap-2 text-sm">
              <li><a href="#" className="hover:text-[var(--brass-light)]">Written Exam Mocks</a></li>
              <li><a href="#" className="hover:text-[var(--brass-light)]">5-Day SSB Programme</a></li>

            </ul>
          </div>
          <div>
            <div className="pv-label text-xs mb-4" style={{ color: "var(--brass-light)" }}>Company</div>
            <ul className="flex flex-col gap-2 text-sm">
              <li><a href="#" className="hover:text-[var(--brass-light)]">About</a></li>
              <li><a href="#faq" className="hover:text-[var(--brass-light)]">FAQ</a></li>
              <li><a href="#" className="hover:text-[var(--brass-light)]">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="pv-label text-xs mb-4" style={{ color: "var(--brass-light)" }}>Stay in Touch</div>
           
            <p className="text-xs" style={{ color: "var(--ink-soft)" }}>
              PivoTal is an independent exam-preparation platform and is not
              affiliated with UPSC, the NDA, or the Indian Armed Forces.
            </p>
          </div>
        </div>
        <div className="border-t border-[#2A3B4D]">
          <div className="max-w-6xl mx-auto px-6 py-5 text-xs flex flex-col sm:flex-row justify-between gap-2">
            <span>© 2026 PivoTal AI. All rights reserved.</span>
            <span>Built for aspirants, by aspirants.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}