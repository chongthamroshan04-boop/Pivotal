const RANGE_DASH = String.fromCharCode(0x2013);
const STUDY_TIME_OPTIONS = [
  "Less than 1 hour",
  `1${RANGE_DASH}2 hours`,
  `2${RANGE_DASH}4 hours`,
  "More than 4 hours",
];

export default function StudyTimeSelector({ value, onChange }) {
  return (
    <div className="max-w-3xl mx-auto my-12 bg-white/90 rounded-3xl shadow-2xl border border-slate-200 p-10">
      <h2 className="text-xl font-semibold">How much time can you study daily?</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {STUDY_TIME_OPTIONS.map((option) => (
          <label key={option} className="cursor-pointer">
            <input type="radio" name="studyTime" value={option} checked={value === option} onChange={(event) => onChange(event.target.value)} className="peer hidden" />
            <div className="border-2 border-gray-200 rounded-xl p-4 peer-checked:border-blue-600 peer-checked:bg-blue-50 transition">
              <span className="font-medium">{option}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
