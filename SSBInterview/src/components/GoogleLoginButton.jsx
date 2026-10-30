import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function GoogleLoginButton() {
  const navigate = useNavigate();

  const googleInitialized = useRef(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function waitForGoogle() {
    return new Promise((resolve, reject) => {
      const startedAt = Date.now();

      const timer = setInterval(() => {
        if (window.google?.accounts?.id) {
          clearInterval(timer);
          resolve(window.google.accounts.id);
          return;
        }

        if (Date.now() - startedAt > 8000) {
          clearInterval(timer);
          reject(new Error("Google did not load"));
        }
      }, 100);
    });
  }

  async function handleGoogleLogin() {
    setIsLoading(true);
    setError("");

    try {
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

      if (!clientId) {
        throw new Error("Missing VITE_GOOGLE_CLIENT_ID");
      }

      const googleId = await waitForGoogle();

      if (!googleInitialized.current) {
        googleId.initialize({
          client_id: clientId,

          callback: async (response) => {
            try {
              if (!response.credential) {
                throw new Error("No Google credential");
              }

              const res = await fetch(
                `${import.meta.env.VITE_API_URL}/auth/google`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    credential: response.credential,
                  }),
                }
              );

              const data = await res.json(); 

              if (!res.ok) {
                throw new Error(data.message || "Login failed");
              }

              if (!data.token) {
                throw new Error("Backend did not return an app token");
              }

              localStorage.setItem("token", data.token);

              if (data.onboardingCompleted) {
                navigate("/dashboard");
              } else {
                navigate("/startup");
              }
            } catch (error) {
              console.error("Google login error:", error);
              setError("We couldn't sign you in. Please try again.");
            } finally {
              setIsLoading(false);
            }
          },
        });

        googleInitialized.current = true;
      }

      googleId.prompt((notification) => {
        if (
          notification.isNotDisplayed() ||
          notification.isSkippedMoment()
        ) {
          setIsLoading(false);
          setError("Google picker did not open. Please try again.");
        }
      });
    } catch (error) {
      console.error("Google login setup error:", error);
      setError("We couldn't start Google sign-in. Please try again.");
      setIsLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={isLoading}
        className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-neutral-300 bg-white px-4 text-sm font-medium text-neutral-800 shadow-sm transition-all duration-200 hover:bg-neutral-50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
      >
        {!isLoading ? (
          <>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M21.35 12.23c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42Z"
              />
              <path
                fill="#34A853"
                d="M12 21.7c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.74 9.74 0 0 0 12 21.7Z"
              />
              <path
                fill="#FBBC05"
                d="M6.54 13.8A5.84 5.84 0 0 1 6.24 12c0-.63.11-1.24.3-1.8V7.67H3.3A9.74 9.74 0 0 0 2.25 12c0 1.57.38 3.05 1.05 4.33l3.24-2.53Z"
              />
              <path
                fill="#EA4335"
                d="M12 6.17c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.24 14.63 2.3 12 2.3a9.74 9.74 0 0 0-8.7 5.37l3.24 2.53C7.31 7.89 9.46 6.17 12 6.17Z"
              />
            </svg>

            <span>Continue with Google</span>
          </>
        ) : (
          <span>Signing you in...</span>
        )}
      </button>

      {error && (
        <p className="mt-3 text-center text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default GoogleLoginButton;