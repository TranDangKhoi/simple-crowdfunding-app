import React from "react";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...props
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      className={`${className} ${
        isLoading ? "opacity-50 pointer-events-none" : "opacity-100"
      } flex items-center justify-center px-5 py-4 font-semibold text-white rounded-md min-h-[56px]`}
      type={type}
      {...props}
    >
      {child}
    </button>
  );
};

export default Button;
