import classNames from "classnames";
import React from "react";

const LayoutGrid = ({
  className = "",
  itemsPerRow = 4,
  gapX = 8,
  gapY = 1,
  alignItems = "stretch",
  justifyItems = "stretch",
  children,
}) => {
  return (
    <div
      className={classNames(
        `grid ${className}`,
        { "grid-cols-5": itemsPerRow === 5 },
        { "grid-cols-4": itemsPerRow === 4 },
        { "grid-cols-3": itemsPerRow === 3 },
        { "grid-cols-2": itemsPerRow === 2 },
        { "grid-cols-1": itemsPerRow === 1 },
        { "gap-x-12": gapX === 12 },
        { "gap-x-11": gapX === 11 },
        { "gap-x-10": gapX === 10 },
        { "gap-x-9": gapX === 9 },
        { "gap-x-8": gapX === 8 },
        { "gap-x-7": gapX === 7 },
        { "gap-x-6": gapX === 6 },
        { "gap-x-5": gapX === 5 },
        { "gap-x-4": gapX === 4 },
        { "gap-x-3": gapX === 3 },
        { "gap-x-2": gapX === 2 },
        { "gap-x-1": gapX === 1 },
        { "gap-y-12": gapY === 12 },
        { "gap-y-11": gapY === 11 },
        { "gap-y-10": gapY === 10 },
        { "gap-y-9": gapY === 9 },
        { "gap-y-8": gapY === 8 },
        { "gap-y-7": gapY === 7 },
        { "gap-y-6": gapY === 6 },
        { "gap-y-5": gapY === 5 },
        { "gap-y-4": gapY === 4 },
        { "gap-y-3": gapY === 3 },
        { "gap-y-2": gapY === 2 },
        { "gap-y-1": gapY === 1 },
        { "items-start": alignItems === "start" },
        { "items-center": alignItems === "center" },
        { "items-end": alignItems === "end" },
        { "items-stretch": alignItems === "stretch" },
        { "justify-items-start": justifyItems === "start" },
        { "justify-items-center": justifyItems === "center" },
        { "justify-items-end": justifyItems === "end" },
        { "justify-items-stretch": justifyItems === "stretch" }
      )}
    >
      {children}
    </div>
  );
};

export default LayoutGrid;
