import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "layout/LayoutAuthentication";
import GoogleIcon from "assets/images/Google.png";
import { useForm } from "react-hook-form";
import { Label } from "components/label";
import { Input } from "components/input";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({});
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs font-normal text-center text-text3 lg:text-sm lg:mb-8">
        Already have an account?{" "}
        <Link className="font-medium underline text-primary" to={"/sign-in"}>
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full p-4 mb-5 border-2 rounded-lg lg:mb-4 border-strock gap-x-3">
        <img srcSet={GoogleIcon} alt="Google" />
        <span className="font-semibold">Sign up with Google</span>
      </button>
      <p className="mb-4 font-normal text-center lg:mb-8 text-text2">
        Or sign up with email
      </p>
      <form>
        <div className="flex flex-col gap-y-3">
          <Label htmlFor="fullname">Full Name *</Label>
          <Input
            type="text"
            control={control}
            placeholder="John Doe"
            name="fullname"
          ></Input>
        </div>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
