const CHALLENGES = [
 // "I don't know where to start studying.",
  "I don't know which subject to study first.",
 // "I struggle to finish the paper on time.",
  "I find Mathematics difficult.",
 // "I find GAT difficult.",
];

export default function ChallengeSelector({ value, onChange }) {
  return (
    <div className="max-w-3xl mx-auto my-12 bg-white/90 rounded-3xl shadow-2xl border border-slate-200 p-10">
      <h2 className="text-xl font-semibold">What is your biggest challenge right now?</h2>
      <div className="mt-4 grid gap-3">
        {CHALLENGES.map((challenge) => (
          <label key={challenge} className="cursor-pointer">
            <input type="radio" name="challenge" value={challenge} checked={value === challenge} onChange={(event) => onChange(event.target.value)} className="peer hidden" />
            <div className="border-2 border-gray-200 rounded-xl p-4 peer-checked:border-blue-600 peer-checked:bg-blue-50">
              {challenge}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
