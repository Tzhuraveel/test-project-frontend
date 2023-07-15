import { ThemeProvider } from "@mui/material";
import { DateField } from "@mui/x-date-pickers";
import { Field, FieldAttributes } from "formik";
import React, { FC } from "react";

import { inputStyle } from "../../../../overrided-style";
import { ErrorFormik } from "../../../Supporting/Error/ErrorFormik";
import css from "../TaskForm.module.css";

interface IProps {
  inputName: string;
  inputTitle: string;
}

const DateInput: FC<IProps> = ({ inputName, inputTitle }) => {
  return (
    <Field name={inputName}>
      {({ field, form }: FieldAttributes<any>) => (
        <div className={css.input__container}>
          <div className={css.input__date_block}>
            <h3 className={css.input__title}>{inputTitle}</h3>
            <ThemeProvider theme={inputStyle}>
              <DateField
                {...field}
                error={false}
                style={{ maxWidth: "220px" }}
                onChange={(change) => {
                  form.setFieldValue(inputName, change);
                }}
                label={"date"}
              />
            </ThemeProvider>
          </div>
          <ErrorFormik nameInput={inputName} />
        </div>
      )}
    </Field>
  );
};

export { DateInput };
