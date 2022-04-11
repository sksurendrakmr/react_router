import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export type StateType = {
  path: string;
};
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    //Will make use of state in login component
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return <>{children}</>;
};
