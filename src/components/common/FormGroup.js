import React from "react";

const FormGroup = ({ children, className = "" }) => {
  return (
    <div
      className={`${className} flex flex-col lg:gap-y-3 gap-y-2 lg:mb-6 mb-4`}
    >
      {children}
    </div>
  );
};

export default FormGroup;
