import React from "react";

const Button = ({ type = "button", children, className = "" }) => {
  return (
    <button
      className={`${className} flex items-center justify-center px-5 py-4 font-semibold text-white rounded-md`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
