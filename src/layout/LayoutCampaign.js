import { Button } from "components/button";
import { Overlay } from "components/common";
import { BaseModal } from "components/modal";
import CampaignDetailsBanner from "modules/campaign/CampaignDetailsBanner";
import CampaignDetailsMain from "modules/campaign/CampaignDetailsMain";
import CampaignPerks from "modules/campaign/CampaignPerks";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const LayoutCampaign = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="min-h-screen p-7 bg-lite dark:bg-darkBg">
        <BaseModal openModal={openModal} setOpenModal={setOpenModal}>
          <h2 className="font-bold text-center text-[25px] mb-10 mt-5">
            Back this project 🚀
          </h2>
          <p className="mb-3 text-sm">Enter the contribute amount</p>
          <input
            type="text"
            placeholder="$10"
            name="amount"
            className="w-full px-5 py-3 text-lg font-medium border rounded border-strock"
          ></input>
          <p className="my-5 text-sm text-text3">
            Contribution are not associatied with perks
          </p>
          <Button className="text-white bg-primary">Continue</Button>
          <div className="mt-[60px]"></div>
          <CampaignPerks showButton></CampaignPerks>
        </BaseModal>
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
