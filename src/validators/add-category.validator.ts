import { object, ObjectSchema, string } from "yup";

export const addCategoryValidator: ObjectSchema<{
  name: string;
}> = object({
  name: string()
    .required("This field is required")
    .trim()
    .matches(/^[a-zA-Z]+$/, { message: "Latin letters only" })
    .min(5, "Minimum 5 letters")
    .max(15, "Maximum 15 letters"),
});
