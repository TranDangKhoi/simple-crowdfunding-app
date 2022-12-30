import React from "react";

const CampaignAuthor = ({ authorName = "Dang Khoi" }) => {
  return (
    <div className="flex items-center gap-x-[10px]">
      <div className="flex items-center justify-center object-cover w-8 h-8 overflow-hidden rounded-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1669735912474-bc43863312b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
          alt="Avatar"
          className="w-full h-full"
        />
      </div>
      <p className="text-xs text-text3">
        By <span className="font-semibold text-text2">{authorName}</span>
      </p>
    </div>
  );
};

export default CampaignAuthor;
