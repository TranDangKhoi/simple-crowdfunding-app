import React from "react";

const CampaignAnalytics = ({ raisedAmount = "1,900", totalBackers = 173 }) => {
  return (
    <div className="flex mb-5 gap-x-12">
      <div className="flex flex-col gap-y-1">
        <h4 className="text-sm font-semibold text-text2">$2,000</h4>
        <span className="text-sm text-text4">Raised of ${raisedAmount}</span>
      </div>
      <div className="flex flex-col gap-y-1">
        <h4 className="text-sm font-semibold text-text2">{totalBackers}</h4>
        <span className="text-sm text-text4">Total backers</span>
      </div>
    </div>
  );
};

export default CampaignAnalytics;
