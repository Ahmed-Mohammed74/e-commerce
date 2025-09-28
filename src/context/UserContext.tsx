"use client";
import { createContext, useState, useEffect, useContext } from "react";

interface UserContextType {
  token: string | null;
  userName: string | null;
  setUser: (token: string, name: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType>({
  token: null,
  userName: null,
  setUser: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedName = localStorage.getItem("userName");
    if (storedToken) setToken(storedToken);
    if (storedName) setUserName(storedName);
  }, []);

  const setUser = (token: string, name: string) => {
    setToken(token);
    setUserName(name);
    localStorage.setItem("token", token);
    localStorage.setItem("userName", name);
  };

  const logout = () => {
    setToken(null);
    setUserName(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
  };

  return (
    <UserContext.Provider value={{ token, userName, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
