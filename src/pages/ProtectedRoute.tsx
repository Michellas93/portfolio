import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../routes";

export const ProtectedRoute = ({ condition }: { condition: boolean }) => {
  return condition ? <Outlet /> : <Navigate to={ROUTES.index()} replace />;
};
