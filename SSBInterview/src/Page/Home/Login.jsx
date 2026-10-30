import GoogleLoginButton from "../../components/GoogleLoginButton";
function Login() {

  return (
    <div className="flex min-h-screen flex-col justify-center items-center gap-8 bg-gradient-to-b from-neutral-50 to-neutral-100 px-4">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
          Welcome to Pivotal
        </h1>
        <p className="text-neutral-500 text-sm">
          Sign in to continue to your account
        </p>
      </div>



  


      <div className="flex flex-col items-center gap-4 w-full max-w-xs">
      <GoogleLoginButton 
      
      />


        <button
          onClick={() => window.history.back()}
          className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors duration-200 cursor-pointer"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  )
}

export default Login