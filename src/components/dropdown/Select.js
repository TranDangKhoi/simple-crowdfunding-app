import React from "react";

import { ArrowDownIcon, ArrowUpIcon } from "components/icon";

import { useDropdown } from "./dropdown-context";

const Select = ({
  placeholder = "Please select an category",
  className = "",
}) => {
  const { show, handleToggleDropdown } = useDropdown();
  return (
    <div
      className={`${className} px-6 py-4 text-sm font-medium text-text3 rounded-lg border-2 border-strock cursor-pointer flex items-center justify-between`}
      onClick={handleToggleDropdown}
    >
      <span className="text-text3">{placeholder}</span>
      <span>
        {show ? <ArrowUpIcon></ArrowUpIcon> : <ArrowDownIcon></ArrowDownIcon>}
      </span>
    </div>
  );
};

export default Select;