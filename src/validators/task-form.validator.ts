import { date, object, ObjectSchema, string } from "yup";

export const taskFormValidator: ObjectSchema<{
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
  description: string().trim().max(200, "Maximum 200 letters").nullable(),
  dateStart: date().nullable(),
  dateEnd: date().nullable(),
});
