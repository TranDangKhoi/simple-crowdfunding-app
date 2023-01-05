import { SearchIcon } from "components/icon";
import { useState } from "react";
import DashboardResults from "./parts/DashboardResults";

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative z-50">
      <div className="flex items-center p-2 bg-white rounded-full dark:bg-darkSecondary dark:shadow-none shadow-lightShadow">
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Do fundrise now or never 🤔"
            className="w-full text-sm font-normal bg-transparent text-text1 dark:placeholder:text-text3 placeholder:text-text4"
          />
        </div>
        <button className="h-10 flex-shrink-0 flex items-center justify-center text-white rounded-full bg-primary w-[72px]">
          <SearchIcon></SearchIcon>
        </button>
      </div>
      {showSearch && <DashboardResults></DashboardResults>}
    </div>
  );
};

export default DashboardSearch;
