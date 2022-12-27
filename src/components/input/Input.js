import React from "react";
import { useController } from "react-hook-form";
const Input = ({
  type = "text",
  control,
  name,
  placeholder = "Your placeholder...",
  className,
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
        className={`${className} w-full px-6 py-4 text-sm font-medium border-2 border-strock rounded-xl text-text1 placeholder:text-text4`}
        placeholder={placeholder}
        {...field}
      />
    </div>
  );
};

export default Input;
