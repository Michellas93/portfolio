import { useAuth } from "../firebase/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";

export const AnonymousRoute = () => {
  const { user } = useAuth();

  return <ProtectedRoute condition={!user} />;
};
