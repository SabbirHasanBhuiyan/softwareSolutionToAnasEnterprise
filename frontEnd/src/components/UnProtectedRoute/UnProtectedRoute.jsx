import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
const UnProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (user) {
    return <Navigate to="/home" />;
  }
  return children;
};

export default UnProtectedRoute;
