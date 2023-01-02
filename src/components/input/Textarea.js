import React from "react";
import { useController } from "react-hook-form";

const Textarea = ({
  className = "",
  placeholder = "Enter something...",
  control,
  error = "",
  name,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <textarea
        className={`${className} ${
          error.length > 0
            ? "border-error placeholder:text-error dark:border-error"
            : "border-strock placeholder:text-text4 dark:placeholder:text-text3"
        } dark:bg-darkSoft min-h-[140px] dark:border-darkStroke resize-none dark:text-white w-full px-6 py-4 text-sm font-medium border-2 rounded-xl text-text1`}
        id={name}
        value={error}
        placeholder={error.length > 0 ? "" : placeholder}
        {...field}
        {...props}
      ></textarea>
    </div>
  );
};

export default Textarea;
