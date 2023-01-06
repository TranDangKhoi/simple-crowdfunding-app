import { Button } from "components/button";
import React from "react";

const CampaignViewDetails = () => {
  return (
    <div className="w-full py-4 mt-10 bg-white shadow-tabShadow">
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
  );
};

export default CampaignViewDetails;
