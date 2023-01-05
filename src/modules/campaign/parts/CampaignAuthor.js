import { defaultAvatar } from "constants/global";
import React from "react";

const CampaignAuthor = ({
  image = defaultAvatar,
  authorName = "Dang Khoi",
}) => {
  return (
    <div className="flex items-center gap-x-[10px]">
      <div className="flex items-center justify-center object-cover w-8 h-8 overflow-hidden rounded-full">
        <img src={image} alt={authorName} className="w-full h-full" />
      </div>
      <p className="text-xs dark:text-text4 text-text3">
        By{" "}
        <span className="font-semibold dark:text-white text-text2">
          {authorName}
        </span>
      </p>
    </div>
  );
};

export default CampaignAuthor;
