import { defaultImage } from "constants/global";
import React from "react";

const CampaignImage = ({
  image = defaultImage,
  containerClassName = "h-[158px]",
}) => {
  return (
    <div className={containerClassName}>
      <img src={image} alt="Campaign" className="object-cover w-full h-full" />
    </div>
  );
};

export default CampaignImage;
