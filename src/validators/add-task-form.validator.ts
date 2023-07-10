import { object, ObjectSchema, string } from "yup";

export const addTaskFormValidator: ObjectSchema<{
  name: string;
}> = object({
  name: string()
    .required("This field is required")
    .trim()
    .matches(/^[^0-9]*$/, { message: "Only letters" })
    .min(5, "Minimum 5 letters")
    .max(15, "Maximum 15 letters"),
  description: string()
    .required("This field is required")
    .trim()
    .min(15, "Minimum 15 letters")
    .max(200, "Maximum 200 letters"),
});
