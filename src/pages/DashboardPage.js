import React from "react";

import Heading from "components/common/Heading";
import LayoutDashboard from "layout/LayoutDashboard";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Heading className="mb-5" campaignAmount={4}>
        Your Campaign
      </Heading>
    </LayoutDashboard>
  );
};

export default DashboardPage;
