import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Button, ButtonGoogle } from "components/button";
import { FormGroup } from "components/common";
import { Input } from "components/input";
import InputPassword from "components/input/InputPassword";
import { Label } from "components/label";
import LayoutAuthentication from "layout/LayoutAuthentication";
import { Link, useNavigate } from "react-router-dom";
import { signInSchema } from "schemas/yupSchemas";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "store/auth/auth-slice";
import { useEffect } from "react";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(signInSchema),
  });
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user && user.id) {
      navigate("/");
    }
  }, [navigate, user]);
  const handleSignIn = (values) => {
    try {
      dispatch(authLogin(values));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <LayoutAuthentication heading="Welcome back!">
      <p className="mb-6 text-xs font-normal text-center text-text3 lg:text-sm lg:mb-8">
        Don't have an account?{" "}
        <Link className="font-medium underline text-primary" to={"/sign-up"}>
          Sign up
        </Link>
      </p>
      <ButtonGoogle></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
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
            placeholder="Enter password"
            error={errors?.password?.message}
            name="password"
          ></InputPassword>
        </FormGroup>
        <span className="flex justify-end mb-4 cursor-pointer lg:mb-5 text-primary">
          Forgot password
        </span>
        <Button
          type="submit"
          className="w-full text-white bg-primary"
          disabled={isSubmitting}
          isLoading={isSubmitting}
        >
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
