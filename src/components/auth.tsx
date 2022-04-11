import React, { useCallback, useContext, useMemo, useState } from "react";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  user: string;
  login: (user: string) => void;
  logout: () => void;
};

const AuthContext: React.Context<AuthContextType> = React.createContext(
  {} as AuthContextType
);

/**
 * Within this component, we maintain the user state and define
 * the functions to login and logout.
 */

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null);

  const login = useCallback(
    (username: string) => {
      setUser(username);
    },
    [setUser]
  );

  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);

  const value = useMemo(
    () => ({
      user: user ?? "",
      login,
      logout,
    }),
    [user, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//Define a function that returns the value of auth context.
export const useAuth = () => {
  return useContext(AuthContext);
};
