import React from "react";

const FormGroup = ({ children, className = "" }) => {
  return (
    <div className={`${className} flex flex-col gap-y-3 mb-5`}>{children}</div>
  );
};

export default FormGroup;
