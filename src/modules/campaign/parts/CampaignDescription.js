import classNames from "classnames";
import React from "react";

const CampaignDescription = ({ children, className = "mb-4 text-sm" }) => {
  return (
    <p
      className={classNames(
        "font-normal text-text3 dark:text-text4",
        className
      )}
    >
      {children}
    </p>
  );
};

export default CampaignDescription;
