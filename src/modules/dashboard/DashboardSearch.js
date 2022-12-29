import { SearchIcon } from "components/icon";
import React from "react";

const DashboardSearch = () => {
  return (
    <div className="flex items-center p-2 bg-white rounded-full shadow-lightShadow ">
      <div className="flex-1 px-5">
        <input
          type="text"
          placeholder="Do fundrise now or never 🤔"
          className="w-full text-sm font-normal bg-transparent text-text1 placeholder:text-text4"
        />
      </div>
      <button className="h-10 flex-shrink-0 flex items-center justify-center text-white rounded-full bg-primary w-[72px]">
        <SearchIcon></SearchIcon>
      </button>
    </div>
  );
};

export default DashboardSearch;
