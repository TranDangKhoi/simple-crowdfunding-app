import React from "react";
import { useDropdown } from "./dropdown-context";

const Search = ({ placeholder, ...props }) => {
  const { onChange } = useDropdown();
  return (
    <div className="sticky top-0 z-10 w-full p-2 bg-white bg-opacity-60">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-6 py-4 text-sm font-medium border-2 dark:bg-darkSoft dark:border-darkStroke dark:text-white rounded-xl text-text1"
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Search;
