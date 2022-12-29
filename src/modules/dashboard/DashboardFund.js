import { FundrisingIcon } from "components/icon";
import React from "react";

const DashboardFund = () => {
  return (
    <span className="flex items-center justify-center cursor-pointer gap-x-2">
      <FundrisingIcon></FundrisingIcon>
      <p className="font-medium text-text2">Fundrising for</p>
      <i className="fa-solid fa-angle-down text-iconColor"></i>
    </span>
  );
};

export default DashboardFund;
