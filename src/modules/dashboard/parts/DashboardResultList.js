import React from "react";
import { v4 } from "uuid";
import DashboardResultsItem from "./DashboardResultsItem";

const DashboardResultList = () => {
  return (
    <div className="flex flex-col p-6 gap-y-5">
      {Array(5)
        .fill(0)
        .map((item) => (
          <DashboardResultsItem key={v4()}></DashboardResultsItem>
        ))}
    </div>
  );
};

export default DashboardResultList;
