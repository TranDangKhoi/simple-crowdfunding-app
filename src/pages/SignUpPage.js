import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import GoogleIcon from "../assets/images/Google.png";
const SignUpPage = () => {
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs font-normal text-center text-text3 lg:text-sm lg:mb-8">
        Already have an account?{" "}
        <Link className="font-medium underline text-primary" to={"/sign-in"}>
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full p-4 mb-4 border-2 rounded-lg border-strock gap-x-2">
        <img srcSet={GoogleIcon} alt="Google" />
        <span className="font-semibold">Sign up with Google</span>
      </button>
      <p className="text-center text-text2">Or sign up with email</p>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
