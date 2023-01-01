import React from "react";
import { v4 } from "uuid";
import DashboardRelatedItem from "./DashboardRelatedItem";

const DashboardRelatedResults = () => {
  return (
    <>
      <h5 className="mb-2 text-sm font-semibold"> Related searches</h5>
      <div className="flex flex-col gap-y-2">
        {Array(3)
          .fill(0)
          .map((item) => (
            <DashboardRelatedItem key={v4()}>Something</DashboardRelatedItem>
          ))}
      </div>
    </>
  );
};

export default DashboardRelatedResults;
