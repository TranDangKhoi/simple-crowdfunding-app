import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import LayoutAuthentication from "layout/LayoutAuthentication";
import GoogleIcon from "assets/images/Google.png";
import { useForm } from "react-hook-form";
import { Label } from "components/label";
import { Input } from "components/input";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";
import { Checkbox } from "components/checkbox";
import { useEffect } from "react";
import { signUpSchema } from "schemas/yupSchemas";
import { EyeClosedIcon } from "components/icon";
import InputPassword from "components/input/InputPassword";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(signUpSchema),
  });

  const [acceptTerm, setAcceptTerm] = useState(false);
  const handleSignUp = (values) => {
    console.log(values);
  };

  const handleAcceptTerm = () => {
    setAcceptTerm(!acceptTerm);
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
            error={errors?.fullname?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">E-mail *</Label>
          <Input
            type="text"
            control={control}
            placeholder="example@gmail.com"
            error={errors?.email?.message}
            name="email"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <InputPassword
            type="password"
            control={control}
            placeholder="Create a password"
            error={errors?.password?.message}
            name="password"
          ></InputPassword>
        </FormGroup>
        <div className="flex items-start mb-6 gap-x-5">
          <Checkbox name="term" onClick={handleAcceptTerm} checked={acceptTerm}>
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
          </Checkbox>
        </div>
        <Button
          type="submit"
          className="w-full bg-primary"
          disabled={isSubmitting}
          isLoading={isSubmitting}
        >
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
