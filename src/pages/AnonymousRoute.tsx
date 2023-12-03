import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../firebase/AuthContext";
import { ROUTES } from "../routes";

export const AnonymousRoute = () => {
  const { user } = useAuth();

  return !user ? <Outlet /> : <Navigate to={ROUTES.index()} replace />;
};
