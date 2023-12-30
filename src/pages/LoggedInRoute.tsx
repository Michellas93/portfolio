import { useAuth } from "../firebase/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";

export const LoggedInRoute = () => {
  const { user } = useAuth();

  return <ProtectedRoute condition={!!user} />;
};
