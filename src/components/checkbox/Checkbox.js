import { CheckboxIcon } from "components/icon";
import useToggleValue from "hooks/useToggleValue";
import React from "react";

const Checkbox = ({ name, children }) => {
  const { value: checked, handleToggleValue: handleCheck } = useToggleValue();
  return (
    <div className="flex items-start select-none gap-x-5">
      <label
        className={`p-1 flex items-center text-white dark:text-darkSoft justify-center flex-shrink-0 w-5 h-5 border-2 rounded cursor-pointer ${
          checked
            ? "bg-primary border-primary"
            : "border-text4 bg-white dark:bg-darkSoft"
        }`}
        htmlFor={name}
      >
        <input
          type="checkbox"
          className="hidden"
          onClick={handleCheck}
          name={name}
          id={name}
        />
        <span>
          <CheckboxIcon></CheckboxIcon>
        </span>
      </label>
      {children && (
        <label className="cursor-pointer select-none text-text2" htmlFor={name}>
          {children}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
