import { useState } from "react";
import { createContext, ReactElement, ReactNode } from "react";
import { User } from "../models/User";

export interface IAuthContext {
  currentUser?: User;
  login: (user: User, token: string) => void;
  logout: () => void;
  checkUser: () => void;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  const login = async (user: User, token: string) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("token", token);
    setCurrentUser(new User(user));
  };

  const logout = async () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    setCurrentUser(undefined);
  };

  const checkUser = async () => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) setCurrentUser(new User(JSON.parse(currentUser)));
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        checkUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;