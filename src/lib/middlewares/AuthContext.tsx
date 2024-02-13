/* eslint-disable */
import { UserType } from "../types/types";
import React, { ReactNode, createContext, useContext, useReducer } from "react";

type AuthAction =
  | { type: "LOGIN"; payload: UserType }
  | { type: "LOGOUT" }
  | { type: "REMEMBER_ME"; payload: boolean };

interface AuthState {
  isAuthenticated: boolean;
  user: UserType | null;
  rememberMe: boolean;
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null };
    case "REMEMBER_ME":
      return { ...state, rememberMe: action.payload };
    default:
      return state;
  }
};

const AuthContext = createContext<
  { state: AuthState; dispatch: React.Dispatch<AuthAction> } | undefined
>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
    rememberMe: false,
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuth doit être utilisé à l'intérieur d'un AuthProvider"
    );
  }
  return context;
};
