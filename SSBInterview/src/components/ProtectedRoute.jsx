{/*User tries to open protected page
        ↓
Does localStorage have our JWT?
        ↓
       NO ─────→ /login
        ↓
       YES
        ↓
Allow the page*/ }
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;