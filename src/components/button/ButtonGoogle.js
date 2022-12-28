import React from "react";
import GoogleIcon from "assets/images/Google.png";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "components/common";
const ButtonGoogle = () => {
  return (
    <button className="flex items-center justify-center w-full p-4 mb-5 border-2 rounded-lg lg:mb-4 border-strock dark:border-darkStroke gap-x-3">
      <img srcSet={GoogleIcon} alt="Google" />
      <span className="font-semibold">Sign in with Google</span>
    </button>
  );
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});
