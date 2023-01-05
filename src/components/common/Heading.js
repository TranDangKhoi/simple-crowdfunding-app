import React from "react";

const Heading = ({ campaignAmount = null, children, className = "" }) => {
  return (
    <h2
      className={`${className} text-lg font-semibold dark:text-whiteSoft text-text1`}
    >
      {children}
      {campaignAmount && (
        <span className="text-secondary"> {`(${campaignAmount})`}</span>
      )}
    </h2>
  );
};

export default Heading;
