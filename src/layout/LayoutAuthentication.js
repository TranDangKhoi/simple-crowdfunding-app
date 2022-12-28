import React from "react";
import { Link } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import Logo from "assets/images/Logo.png";
import BackgroundBig from "assets/images/EclipseBig.png";
import ErrorComponent from "components/common/ErrorComponent";
const LayoutAuthentication = ({ children, heading = "" }) => {
  return (
    <div className="relative w-full min-h-screen p-7 isolate bg-lite dark:bg-darkBg">
      <img
        src={BackgroundBig}
        alt="Background"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]"
      />
      <Link to={"/"} className="inline-block mb-5 lg:mb-16">
        <img srcSet={`${Logo} 2x`} alt="Logo" />
      </Link>
      <div className="mx-auto w-full max-w-[556px] bg-white dark:text-white dark:bg-darkSoft shadow-soft rounded-xl px-5 py-8 lg:px-16 lg:py-12">
        <h1 className="mb-1 text-lg font-semibold text-center dark:text-white lg:text-xl lg:mb-3 text-text1">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
