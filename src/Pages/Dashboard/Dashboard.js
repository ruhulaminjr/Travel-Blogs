import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import AdminPanle from "./AdminPanel/AdminPanle";

const Dashboard = () => {
  return (
    <>
      <AdminPanle />
      <Outlet />
    </>
  );
};

export default Dashboard;
