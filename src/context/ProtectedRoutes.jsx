import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

const ProtectedRoutes = () => {
  const { userLoggedIn, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return userLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
