import { TextField, ThemeProvider } from "@mui/material";
import { Field, FieldAttributes } from "formik";
import React from "react";

import { textArea } from "../../../../overrided-style";
import { ErrorFormik } from "../../../Supporting/Error/ErrorFormik";
import css from "../TaskForm.module.css";

const DescriptionInput = () => {
  return (
    <Field name="description">
      {({ field }: FieldAttributes<any>) => (
        <div>
          <h3 className={css.input__title}>description</h3>
          <ThemeProvider theme={textArea}>
            <TextField
              inputProps={{ maxLength: 200 }}
              label="description"
              rows={5}
              multiline={true}
              variant="outlined"
              {...field}
            />
          </ThemeProvider>
          <ErrorFormik nameInput={"description"} />
        </div>
      )}
    </Field>
  );
};

export { DescriptionInput };
