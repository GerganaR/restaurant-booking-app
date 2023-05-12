import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const isLoggedIn = !!currentUser;

  const register = (userData) => {
    // Perform registration logic and set the currentUser state
    setCurrentUser(userData);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, isLoggedIn, register, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
