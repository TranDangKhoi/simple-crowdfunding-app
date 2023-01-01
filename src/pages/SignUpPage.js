import { yupResolver } from "@hookform/resolvers/yup";
import { Button, ButtonGoogle } from "components/button";
import { Checkbox } from "components/checkbox";
import FormGroup from "components/common/FormGroup";
import { Input } from "components/input";
import InputPassword from "components/input/InputPassword";
import { Label } from "components/label";
import LayoutAuthentication from "layout/LayoutAuthentication";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signUpSchema } from "schemas/yupSchemas";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(signUpSchema),
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
      <ButtonGoogle></ButtonGoogle>
      <p className="mb-4 font-normal text-center dark:text-whiteSoft lg:mb-8 text-text2">
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
          <Checkbox name="term">
            <p className="text-xs font-normal dark:text-text3 lg:text-sm text-text2">
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

export default SignUpPage;
