import React from "react";

import LayoutGrid from "layout/LayoutGrid";

const FormRow = ({ children }) => {
  return (
    <LayoutGrid itemsPerRow={2} gapX={11}>
      {children}
    </LayoutGrid>
  );
};

export default FormRow;
