import { ErrorComponent } from "components/common";
import EyeClosedIcon from "components/icon/EyeClosedIcon";
import EyeOpenedIcon from "components/icon/EyeOpenedIcon";
import useToggleValue from "hooks/useToggleValue";
import { withErrorBoundary } from "react-error-boundary";
import { useController } from "react-hook-form";
const InputPassword = ({
  type = "password",
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
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  return (
    <div className="relative">
      <input
        type={showPassword ? "password" : "text"}
        className={`${className} ${
          error.length > 0
            ? "border-error placeholder:text-error"
            : "border-strock placeholder:text-text4 dark:placeholder:text-text3"
        } w-full dark:bg-darkSoft dark:text-white dark:border-darkStroke pl-6 pr-12 py-4 text-sm font-medium border-2 rounded-xl text-text1`}
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
      <span
        className="absolute z-10 -translate-y-1/2 cursor-pointer select-none top-1/2 right-3"
        onClick={handleTogglePassword}
      >
        {showPassword ? (
          <EyeOpenedIcon></EyeOpenedIcon>
        ) : (
          <EyeClosedIcon></EyeClosedIcon>
        )}
      </span>
    </div>
  );
};

export default withErrorBoundary(InputPassword, {
  FallbackComponent: ErrorComponent,
});
