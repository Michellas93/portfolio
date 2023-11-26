import React, { createContext, useState, useContext, useEffect } from "react";
import { User } from "firebase/auth";
import { auth } from "./config";

interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType>({ user: null });

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() =>
    JSON.parse(localStorage.getItem("authUser") || "{}")
  );

  useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener?.();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
