export default function MockExperienceSelector({ value, onChange }) {
  return (
    <div className="max-w-3xl mx-auto my-12 bg-white/90 rounded-3xl shadow-2xl border border-slate-200 p-10">
      <h2 className="text-xl font-semibold">Have you attempted NDA mock tests before?</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {["Yes", "No"].map((option) => (
          <label key={option} className="cursor-pointer">
            <input type="radio" name="mockExperience" value={option} checked={value === option} onChange={(event) => onChange(event.target.value)} className="peer hidden" />
            <div className="border-2 border-gray-200 rounded-xl p-4 peer-checked:border-blue-600 peer-checked:bg-blue-50 transition">
              <div className="font-medium">{option}</div>
              <p className="text-sm text-gray-500 mt-1">{option === "Yes" ? "I've attempted NDA mocks." : "I'm just getting started."}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
