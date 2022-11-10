import React from "react";
import Login from "../pages/login/Login";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const userLog = true;
  return <>{userLog ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRouter;
