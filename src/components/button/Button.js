import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  to,
  isLoading = false,
  className = "",
  children,
  ...props
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  if (to)
    return (
      <Link to={to}>
        <button
          className={`${className} flex items-center justify-center px-5 py-4 font-semibold rounded-md min-h-[56px]`}
          type={type}
          {...props}
        >
          {child}
        </button>
      </Link>
    );
  return (
    <button
      className={`${className} ${
        isLoading ? "opacity-50 pointer-events-none" : "opacity-100"
      } flex items-center justify-center px-5 py-4 font-semibold rounded-md min-h-[56px]`}
      type={type}
      {...props}
    >
      {child}
    </button>
  );
};

export default Button;
