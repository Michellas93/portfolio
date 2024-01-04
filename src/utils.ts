import { User } from "firebase/auth";

export const isAdmin = (user: User | null) => {
  return !!user && user.email === import.meta.env.VITE_ADMIN_EMAIL;
};
