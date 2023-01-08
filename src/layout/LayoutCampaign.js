import { Overlay } from "components/common";
import CampaignDetailsBanner from "modules/campaign/CampaignDetailsBanner";
import CampaignDetailsMain from "modules/campaign/CampaignDetailsMain";
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
            <CampaignDetailsBanner></CampaignDetailsBanner>
            <CampaignDetailsMain></CampaignDetailsMain>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default LayoutCampaign;
