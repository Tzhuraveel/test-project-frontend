import { object, ObjectSchema, string } from "yup";

export const authFormValidator: ObjectSchema<{
  name: string;
  password: string;
}> = object({
  name: string()
    .required("This field is required")
    .trim()
    .matches(/^[a-zA-Z]+$/, { message: "Latin letters only" })
    .min(2, "Minimum 2 letters")
    .max(50, "Maximum 50 letters"),
  password: string()
    .required("This field is required")
    .trim()
    .min(8, "Minimum 8 letters")
    .max(20, "Maximum 20 letters"),
});
