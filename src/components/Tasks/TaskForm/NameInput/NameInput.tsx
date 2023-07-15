import { TextField, ThemeProvider } from "@mui/material";
import { Field, FieldAttributes } from "formik";
import React from "react";

import { inputStyle } from "../../../../overrided-style";
import { ErrorFormik } from "../../../Supporting/Error/ErrorFormik";
import css from "../TaskForm.module.css";

const NameInput = () => {
  return (
    <Field name="name">
      {({ field }: FieldAttributes<any>) => (
        <div>
          <h3 className={css.input__title}>name</h3>
          <div>
            <ThemeProvider theme={inputStyle}>
              <TextField label="name" variant="outlined" {...field} />
            </ThemeProvider>
          </div>
          <ErrorFormik nameInput={"name"} />
        </div>
      )}
    </Field>
  );
};

export { NameInput };
