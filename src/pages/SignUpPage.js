import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "layout/LayoutAuthentication";
import GoogleIcon from "assets/images/Google.png";
import { useForm } from "react-hook-form";
import { Label } from "components/label";
import { Input } from "components/input";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onSubmit",
  });

  const handleSignUp = (values) => {
    console.log(values);
  };
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
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="fullname">Full Name *</Label>
          <Input
            type="text"
            control={control}
            placeholder="John Doe"
            name="fullname"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">E-mail *</Label>
          <Input
            type="text"
            control={control}
            placeholder="example@gmail.com"
            name="email"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            type="password"
            control={control}
            placeholder="Create a password"
            name="password"
          ></Input>
        </FormGroup>
        <div className="flex items-start mb-6 gap-x-5">
          <span className="flex-shrink-0 inline-block w-5 h-5 border-2 border-text3"></span>
          <p className="text-sm font-normal text-text2">
            I agree to the{" "}
            <span className="underline cursor-pointer text-secondary">
              Terms of Use
            </span>{" "}
            and have read and understand the{" "}
            <span className="underline cursor-pointer text-secondary">
              Privacy policy.
            </span>
          </p>
        </div>
        <Button type="submit" className="w-full bg-primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
