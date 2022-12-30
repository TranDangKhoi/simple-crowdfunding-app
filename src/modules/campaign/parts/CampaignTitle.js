import classNames from "classnames";
import React from "react";

const CampaignTitle = ({ children, className = "mb-[5px] font-semibold" }) => {
  return <h3 className={classNames("text-text1", className)}>{children}</h3>;
};

export default CampaignTitle;
