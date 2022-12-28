import { CheckboxIcon } from "components/icon";
import React from "react";

const Checkbox = ({ checked = false, name, onClick = () => {}, children }) => {
  return (
    <div className="flex items-start gap-x-5">
      <label
        className={`p-1 flex items-center text-white justify-center flex-shrink-0 w-5 h-5 border-2 rounded cursor-pointer ${
          checked ? "bg-primary border-primary" : "border-text4 bg-white"
        }`}
        htmlFor={name}
      >
        <input
          type="checkbox"
          className="hidden"
          onClick={onClick}
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
