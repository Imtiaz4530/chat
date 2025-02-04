/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("talkoToken"));

  useEffect(() => {
    if (!token && localStorage.getItem("talkoToken")) {
      setToken(localStorage.getItem("talkoToken"));
    }
  }, []);

  useEffect(() => {
    if (!user && localStorage.getItem("talkoUser")) {
      setUser(JSON.parse(localStorage.getItem("talkoUser")));
    }
  }, []);

  const value = {
    token,
    setToken,
    user,
    setUser,
    showLogin,
    setShowLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
