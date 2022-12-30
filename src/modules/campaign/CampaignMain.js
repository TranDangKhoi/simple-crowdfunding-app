import LayoutGrid from "layout/LayoutGrid";
import React from "react";
import CampaignAnalytics from "./CampaignAnalytics";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignDescription from "./parts/CampaignDescription";
import CampaignImage from "./parts/CampaignImage";
import CampaignTitle from "./parts/CampaignTitle";

const CampaignMain = () => {
  return (
    <div className="flex mb-8 w-full max-w-[1048px] items-center gap-x-8">
      <CampaignImage containerClassName="h-[266px] flex-1 rounded-xl overflow-hidden"></CampaignImage>
      <div className="flex-1 max-w-[435px]">
        <CampaignCategory size="normal" text="Architecture"></CampaignCategory>
        <CampaignTitle className="mb-4 text-xl font-bold">
          Remake - We Make architecture exhibition
        </CampaignTitle>
        <CampaignDescription className="mb-6 text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampaignDescription>
        <div className="relative mb-4 w-full h-1 rounded-full bg-strock after:w-[50%] after:h-full after:bg-primary after:absolute after:left-0 after:top-0"></div>
        <LayoutGrid itemsPerRow={3} gapX={5}>
          <CampaignAnalytics size="normal"></CampaignAnalytics>
          <CampaignAnalytics size="normal"></CampaignAnalytics>
          <CampaignAnalytics size="normal"></CampaignAnalytics>
        </LayoutGrid>
      </div>
    </div>
  );
};

export default CampaignMain;
