import { User } from "firebase/auth";
import { useAuth } from "../firebase/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";

export const isAdmin = (user: User | null) => {
  return user?.email === import.meta.env.VITE_ADMIN_EMAIL;
};

export const AdminRoute = () => {
  const { user } = useAuth();

  return <ProtectedRoute condition={isAdmin(user)} />;
};
