import classNames from "classnames";
import React from "react";

const LayoutGrid = ({ itemsPerRow = 4, gapX = 8, children }) => {
  return (
    <div
      className={classNames(
        `grid`,
        { "grid-cols-5": itemsPerRow === 5 },
        { "grid-cols-4": itemsPerRow === 4 },
        { "grid-cols-3": itemsPerRow === 3 },
        { "grid-cols-2": itemsPerRow === 2 },
        { "grid-cols-1": itemsPerRow === 1 },
        { "gap-x-10": gapX === 10 },
        { "gap-x-9": gapX === 9 },
        { "gap-x-8": gapX === 8 },
        { "gap-x-7": gapX === 7 },
        { "gap-x-6": gapX === 6 },
        { "gap-x-5": gapX === 5 },
        { "gap-x-4": gapX === 4 },
        { "gap-x-3": gapX === 3 },
        { "gap-x-2": gapX === 2 },
        { "gap-x-1": gapX === 1 }
      )}
    >
      {children}
    </div>
  );
};

export default LayoutGrid;
