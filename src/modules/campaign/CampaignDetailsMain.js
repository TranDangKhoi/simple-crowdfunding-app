import { Button } from "components/button";
import LayoutGrid from "layout/LayoutGrid";
import React from "react";
import CampaignAnalytics from "./parts/CampaignAnalytics";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignDescription from "./parts/CampaignDescription";
import CampaignImage from "./parts/CampaignImage";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignViewAuthor from "./parts/CampaignViewAuthor";

const CampaignDetailsMain = () => {
  return (
    <div className="flex items-center w-full mb-8 gap-x-10 max-w-[1066px]">
      <div className="flex-1">
        <CampaignImage containerClassName="max-w-[600px] h-[398px] rounded-xl overflow-hidden"></CampaignImage>
      </div>
      <div className="flex-1">
        <CampaignCategory size="normal" text="Architecture"></CampaignCategory>
        <CampaignTitle className="mb-4 text-xl font-bold">
          Remake - We Make architecture exhibition
        </CampaignTitle>
        <CampaignDescription className="mb-6 text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampaignDescription>
        <CampaignViewAuthor></CampaignViewAuthor>
        <div className="relative mb-4 w-full h-1 rounded-full bg-strock after:w-[50%] after:h-full after:bg-primary after:absolute after:left-0 after:top-0"></div>
        <LayoutGrid className="mb-4" itemsPerRow={3} gapX={5}>
          <CampaignAnalytics size="normal"></CampaignAnalytics>
          <CampaignAnalytics size="normal"></CampaignAnalytics>
          <CampaignAnalytics size="normal"></CampaignAnalytics>
        </LayoutGrid>
        <Button className="w-full text-white bg-primary">
          Back this project
        </Button>
      </div>
    </div>
  );
};

export default CampaignDetailsMain;
