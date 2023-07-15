import { object, ObjectSchema, string } from "yup";

export const categoryFormValidator: ObjectSchema<{
  name: string;
}> = object({
  name: string()
    .required("This field is required")
    .trim()
    .matches(/^([А-ЩЬЮЯҐЄІЇа-щьюяґєії]|[a-zA-Z\s])*$/, {
      message: "Ukrainian and English letters only",
    })
    .min(5, "Minimum 5 letters")
    .max(15, "Maximum 15 letters"),
});
