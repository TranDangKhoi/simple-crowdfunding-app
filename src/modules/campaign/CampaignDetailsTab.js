import { Button } from "components/button";
import LayoutGrid from "layout/LayoutGrid";
import React from "react";
import CampaignItem from "./CampaignItem";
import CampaignPerks from "./CampaignPerks";
import CampaignSupport from "./CampaignSupport";

const CampaignDetailsTab = () => {
  return (
    <>
      <div className="w-full py-4 mt-10 mb-6 bg-white shadow-tabShadow">
        <div className="max-w-[1300px] px-4 mx-auto flex items-center md:justify-between justify-center w-full">
          <div className="flex items-center text-sm font-medium gap-x-14 text-text3">
            <span className="cursor-pointer text-secondary">Campaign</span>
            <span className="cursor-pointer">Risks</span>
            <span className="cursor-pointer">FAQ</span>
            <span className="cursor-pointer">Updates</span>
          </div>
          <Button className="text-white bg-primary w-[300px] text-sm md:block hidden">
            Back this project
          </Button>
        </div>
      </div>
      <div className="p-7 grid gap-x-[124px] grid-cols-[1fr,500px] mb-[70px]">
        <div>
          <h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
          <div className="w-full bg-white">fakfjlkafjkl</div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerks></CampaignPerks>
            <CampaignPerks></CampaignPerks>
            <CampaignPerks></CampaignPerks>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold px-7 mb-7">
        You also may be interested in:
      </h2>
      <LayoutGrid itemsPerRow={4} gapX={7} className="px-7">
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </LayoutGrid>
    </>
  );
};

export default CampaignDetailsTab;
