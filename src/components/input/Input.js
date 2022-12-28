import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useController } from "react-hook-form";
const Input = ({
  type = "text",
  control,
  name,
  error = "",
  errorFields,
  placeholder = "Your placeholder...",
  className,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <div className="relative">
      <input
        type={type}
        className={`${className} ${
          error.length > 0
            ? "border-error placeholder:text-error"
            : "border-strock placeholder:text-text4"
        } w-full px-6 py-4 text-sm font-medium border-2 rounded-xl text-text1`}
        placeholder={error.length > 0 ? "" : placeholder}
        id={name}
        value={error}
        {...field}
        {...props}
      />
      {error && (
        <span className="absolute text-sm font-medium -translate-y-1/2 bg-white pointer-events-none text-error left-6 top-1/2 error-message">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
