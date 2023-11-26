// AuthContext.tsx
import React, { createContext, useState, useContext } from "react";

// Definování typu pro stavový objekt kontextu
interface AuthContextType {
  isAuthenticated: boolean;
  loginUser: () => void;
  logoutUser: () => void;
}

// Vytvoření kontextu s výchozími hodnotami typu
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // loginUser a logoutUser budou nastaveny později
  const loginUser = () => setIsAuthenticated(true);
  const logoutUser = () => setIsAuthenticated(false);

  // Vrátí poskytovatele kontextu
  return (
    <AuthContext.Provider value={{ isAuthenticated, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook pro snadný přístup k kontextu
export const useAuth = () => useContext(AuthContext);
