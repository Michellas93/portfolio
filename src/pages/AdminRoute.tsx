import { useAuth } from "../firebase/AuthContext";
import { isAdmin } from "../utils";
import { ProtectedRoute } from "./ProtectedRoute";

export const AdminRoute = () => {
  const { user } = useAuth();

  return <ProtectedRoute condition={isAdmin(user)} />;
};
