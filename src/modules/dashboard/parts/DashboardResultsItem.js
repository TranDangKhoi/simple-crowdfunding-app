import { defaultAvatar } from "constants/global";
import React from "react";

const DashboardResultsItem = () => {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={defaultAvatar}
        alt="Avatar"
        className="w-[50px] h-[50px] rounded-xl"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-1 text-sm">Education fund for Durgham Family</h3>
        <span className="text-xs text-text3">By Durgham Family</span>
      </div>
    </div>
  );
};

export default DashboardResultsItem;
