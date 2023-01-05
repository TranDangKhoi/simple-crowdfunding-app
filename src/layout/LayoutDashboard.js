import { Overlay } from "components/common";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="min-h-screen p-7 bg-lite dark:bg-darkBg">
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>
      <div className="main-layout gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
