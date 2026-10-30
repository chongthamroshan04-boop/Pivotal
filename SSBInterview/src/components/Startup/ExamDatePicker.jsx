

export default function ExamDatePicker({ value, onChange }) {
    const today = new Date().toISOString().split("T")[0];
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
       <div className="flex flex-col gap-3">
    <h2 className="text-xl font-semibold"> When is your exam date?</h2>
    <input
      type="date"
      min={today}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="border-2 border-gray-200 rounded-xl p-3 w-full sm:w-64 outline-none focus:border-blue-600"
    />
    <p className="text-sm text-gray-500">Only today or a future date can be selected.</p>
  </div>
    </div>
  
  )
}
