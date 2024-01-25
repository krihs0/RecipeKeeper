import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/authProvider";

import React from "react";

const Auth = ({ allowedRoles }) => {
    const {user, token, setUser, setToken} = useStateContext()
  const location = useLocation();

  return allowedRoles.find((role) => user.role.includes(role)) ? (
    <Outlet />
  ) : user?.name ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/register" state={{ from: location }} replace />
  );
};

export default Auth;