import classNames from "classnames";
import React from "react";

/* <div className="flex mb-5 gap-x-12">
  <div className="flex flex-col gap-y-1">
    <h4 className="text-sm font-semibold text-text2">$2,000</h4>
    <span className="text-sm text-text4">Raised of ${amount}</span>
  </div>
  <div className="flex flex-col gap-y-1">
    <h4 className="text-sm font-semibold text-text2">{totalBackers}</h4>
    <span className="text-sm text-text4">Total backers</span>
  </div>
</div>; */

const CampaignAnalytics = ({
  amount = "2,000",
  description = "Raised of $1,900",
  size = "small",
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4
        className={classNames(
          "font-semibold text-text2",
          { "text-xs": size === "small" },
          { "text-base": size === "normal" }
        )}
      >
        ${amount}
      </h4>
      <span className={classNames("text-sm text-text4")}>{description}</span>
    </div>
  );
};

export default CampaignAnalytics;
