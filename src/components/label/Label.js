import React from "react";

const Label = ({ children, htmlFor, className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${className} inline-block text-sm font-medium cursor-pointer text-text2`}
    >
      {children}
    </label>
  );
};

export default Label;
