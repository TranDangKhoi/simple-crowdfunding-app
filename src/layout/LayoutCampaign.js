import { Overlay } from "components/common";
import CampaignViewDetails from "modules/campaign/CampaignViewDetails";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";
import { Outlet } from "react-router-dom";

const LayoutCampaign = ({ children }) => {
  return (
    <>
      <div className="min-h-screen p-7 bg-lite dark:bg-darkBg">
        <Overlay></Overlay>
        <DashboardTopbar></DashboardTopbar>
        <div className="main-layout gap-x-10">
          <DashboardSidebar></DashboardSidebar>
          <div className="w-full">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <CampaignViewDetails></CampaignViewDetails>
    </>
  );
};

export default LayoutCampaign;
