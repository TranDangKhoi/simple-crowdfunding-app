import React from "react";
import { useController } from "react-hook-form";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "components/common";
const Input = ({
  type = "text",
  control,
  name,
  error = "",
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
            ? "border-error placeholder:text-error dark:border-error"
            : "border-strock placeholder:text-text4 dark:placeholder:text-text3"
        } dark:bg-darkSoft dark:border-darkStroke dark:text-white w-full px-6 py-4 text-sm font-medium border-2 rounded-xl text-text1`}
        placeholder={error.length > 0 ? "" : placeholder}
        id={name}
        value={error}
        {...field}
        {...props}
      />
      {error && (
        <span className="absolute text-sm font-medium -translate-y-1/2 bg-white pointer-events-none dark:bg-darkSoft text-error left-6 top-1/2 error-message">
          {error}
        </span>
      )}
    </div>
  );
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
