

export default function ContinueButton({ onContinue }) {
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
     <button type="button" onClick={onContinue} className="bg-blue-600 text-white rounded-xl py-3 font-medium hover:bg-blue-700 transition">
    Continue
  </button>
    </div>
    
  )
}
