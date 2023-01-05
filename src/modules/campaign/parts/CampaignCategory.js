import classNames from "classnames";
import { FolderIcon } from "components/icon";
import React from "react";
import { Link } from "react-router-dom";

const CampaignCategory = ({ text = "Education", size = "small" }) => {
  return (
    <Link
      to="/"
      className="flex items-baseline mb-4 text-text3 dark:text-text4 gap-x-3"
    >
      <FolderIcon></FolderIcon>
      <span
        className={classNames("font-medium dark:text-text4 text-text3", {
          "text-xs": size === "small",
          "text-sm": size === "normal",
        })}
      >
        {text}
      </span>
    </Link>
  );
};

export default CampaignCategory;
