import { ArrowDownIcon, FundrisingIcon } from "components/icon";
import React from "react";

const DashboardFund = () => {
  return (
    <span className="flex items-center justify-center cursor-pointer text-iconColor gap-x-2">
      <FundrisingIcon></FundrisingIcon>
      <p className="text-xs font-medium lg:text-sm text-text2">
        Fundrising for
      </p>
      <ArrowDownIcon></ArrowDownIcon>
    </span>
  );
};

export default DashboardFund;
