

 function LevelPlanner({ value, onChange }) {
  return (

<div className="max-w-3xl
mx-auto
my-12
bg-white/90
backdrop-blur-md
rounded-3xl
shadow-2xl
border
border-slate-200
p-10
flex
flex-col
gap-10">
       <div>
    <h1 className="text-5xl
font-bold
tracking-tight
text-slate-900">Welcome to Pivotal </h1>
    <p className="text-lg
text-slate-500
mt-2">Let's build your study plan.</p>
  </div>
  <div className="flex flex-col gap-4">
  <h2 className="text-xl font-semibold">
     What is your current preparation level?
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

    {/* Beginner */}
    <label className="cursor-pointer">
      <input type="radio" name="level" value="beginner" checked={value === "beginner"} onChange={(event) => onChange(event.target.value)} className="peer hidden" />
      <div
        className="border-2 border-slate-200 rounded-2xl p-4 text-center
        shadow-sm hover:shadow-lg hover:border-blue-500 hover:-translate-y-1
        transition-all duration-300
        peer-checked:border-blue-600 peer-checked:bg-blue-50"
      >
        <h3 className="font-semibold text-lg"> Beginner</h3>
        <p className="text-sm text-gray-500 mt-1">
          I'm just starting my NDA preparation.
        </p>
      </div>
    </label>

    {/* Intermediate */}
    <label className="cursor-pointer">
      <input type="radio" name="level" value="intermediate" checked={value === "intermediate"} onChange={(event) => onChange(event.target.value)} className="peer hidden" />
      <div
        className="border-2 border-slate-200 rounded-2xl p-4 text-center
        shadow-sm hover:shadow-lg hover:border-blue-500 hover:-translate-y-1
        transition-all duration-300
        peer-checked:border-blue-600 peer-checked:bg-blue-50"
      >
        <h3 className="font-semibold text-lg"> Intermediate</h3>
        <p className="text-sm text-gray-500 mt-1">
          I know the basics but need more practice.
        </p>
      </div>
    </label>

    {/* Advanced */}
    <label className="cursor-pointer">
      <input type="radio" name="level" value="advanced" checked={value === "advanced"} onChange={(event) => onChange(event.target.value)} className="peer hidden" />
      <div
        className="border-2 border-slate-200 rounded-2xl p-4 text-center
        shadow-sm hover:shadow-lg hover:border-blue-500 hover:-translate-y-1
        transition-all duration-300
        peer-checked:border-blue-600 peer-checked:bg-blue-50"
      >
        <h3 className="font-semibold text-lg"> Advanced</h3>
        <p className="text-sm text-gray-500 mt-1">
          I'm preparing with mock tests and revision.
        </p>
      </div>
    </label>

  </div>
</div>
  </div>
  
  )
}
export default LevelPlanner
