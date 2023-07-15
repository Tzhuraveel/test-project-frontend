import { date, object, ObjectSchema, string } from "yup";

export const taskFormValidator: ObjectSchema<{
  name: string;
}> = object({
  name: string()
    .required("This field is required")
    .trim()
    .matches(/^[a-zA-Z0-9\s]+$/, { message: "Latin letters only" })
    .min(5, "Minimum 5 letters")
    .max(15, "Maximum 15 letters"),
  description: string()
    .trim()
    .matches(/^[a-zA-Z0-9\s]+$/, { message: "Latin letters only" })
    .max(200, "Maximum 200" + " letters")
    .nullable(),
  dateStart: date().nullable(),
  dateEnd: date().nullable(),
});
