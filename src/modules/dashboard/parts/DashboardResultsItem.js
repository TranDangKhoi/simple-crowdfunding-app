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
    </div>
  );
};

export default DashboardResultsItem;
