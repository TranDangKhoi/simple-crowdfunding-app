import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute max-h-[300px] overflow-y-auto left-0 z-20 w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:border-darkStroke dark:bg-darkSecondary border-t-transparent top-full">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
