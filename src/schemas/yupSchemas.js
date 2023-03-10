import * as yup from "yup";

export const signUpSchema = yup.object({
  fullname: yup.string().required("Please enter your full name").max(24),
  email: yup
    .string()
    .required("Please enter your e-mail")
    .email("Please enter a valid e-mail"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Your password must be at least 8 characters"),
});

export const signInSchema = yup.object({
  email: yup.string().required("E-mail is invalid"),
  password: yup.string().required("Wrong password"),
});

export const addNewCampaignSchema = yup.object({
  title: yup.string().required("Please enter a title"),
  description: yup.string(),
});
