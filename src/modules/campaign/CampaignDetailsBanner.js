import React from "react";

const CampaignDetailsBanner = ({ categoryName = "Education" }) => {
  return (
    <div
      className="h-[140px] mb-10 flex items-center justify-center text-white rounded-3xl bg-cover bg-opacity-40 bg-no-repeat bg-center"
      style={{
        background:
          "linear-gradient(179.14deg, rgba(32, 18, 63, 0) -7.14%, #666666 87.01%),url(https://source.unsplash.com/random)",
      }}
    >
      <h1 className="font-semibold text-[35px]">{categoryName}</h1>
    </div>
  );
};

export default CampaignDetailsBanner;
