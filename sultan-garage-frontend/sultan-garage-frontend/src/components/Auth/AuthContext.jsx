import  { createContext, useContext, useState } from "react";

// 1. Create the context
const AuthContext = createContext();

// 2. Create the provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  // Helper function to handle login
  const login = () => {
    setIsLoggedIn(true);
    setIsRegistering(false);
    setCurrentPage("home");
  };

  // Helper function to handle logout
  const logout = () => {
    setIsLoggedIn(false);
    setIsRegistering(false);
    setCurrentPage("home");
  };

  // Helper function to register
  const register = () => {
    setIsLoggedIn(false);
    setIsRegistering(true);
    setCurrentPage("register");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isRegistering,
        currentPage,
        setCurrentPage,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 3. Create a custom hook for easier context usage
export const useAuth = () => {
  return useContext(AuthContext);
};
