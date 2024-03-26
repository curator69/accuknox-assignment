import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"; // Install react-router-dom for routing

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.user !== null);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
