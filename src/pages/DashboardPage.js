import React from "react";

import Heading from "components/common/Heading";
import LayoutDashboard from "layout/LayoutDashboard";
import LayoutGrid from "layout/LayoutGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import { v4 } from "uuid";
import CampaignMain from "modules/campaign/CampaignMain";
const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Heading className="mb-5" campaignAmount={4}>
        Your Campaign
      </Heading>
      <CampaignMain></CampaignMain>
      <Heading className="mb-5">Popular Campaign</Heading>
      <LayoutGrid gapX={8}>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </LayoutGrid>
    </LayoutDashboard>
  );
};

export default DashboardPage;
