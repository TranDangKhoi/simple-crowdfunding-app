import React from "react";

import { useDropdown } from "./dropdown-context";

const Option = ({ onClick, children }) => {
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="flex items-center justify-between px-6 py-4 text-sm transition-all border-l-4 cursor-pointer border-l-transparent hover:text-secondary hover:border-l-secondary"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Option;
