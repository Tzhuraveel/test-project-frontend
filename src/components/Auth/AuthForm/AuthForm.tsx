import { ApolloError } from "@apollo/client";
import { Button, TextField, ThemeProvider } from "@mui/material";
import { Field, FieldAttributes, Form, Formik } from "formik";
import { FC } from "react";

import { inputStyle } from "../../../overrided-style";
import { authFormValidator } from "../../../validators";
import { ErrorFromDb } from "../../Supporting";
import { ErrorFormik } from "../../Supporting/Error/ErrorFormik";
import { IAuthInitialValue } from "./authForm.interface";
import css from "./AuthForm.module.css";

interface IProps {
  buttonName: string;
  submit: (values: IAuthInitialValue) => void;
  error: ApolloError | undefined;
}

const AuthForm: FC<IProps> = ({ buttonName, submit, error }) => {
  const initialValues: IAuthInitialValue = { name: "", password: "" };

  return (
    <div className={css.auth__form_container}>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={authFormValidator}
        validateOnBlur={true}
      >
        <Form className={css.auth__form}>
          <ErrorFromDb error={error} />
          <div className={css.auth__input_container}>
            <Field name="name">
              {({ field }: FieldAttributes<any>) => (
                <ThemeProvider theme={inputStyle}>
                  <TextField
                    className={css.auth__input}
                    label="username"
                    variant="outlined"
                    autoComplete="on"
                    {...field}
                  />
                </ThemeProvider>
              )}
            </Field>
            <ErrorFormik nameInput={"name"} />
            <Field name="password">
              {({ field }: FieldAttributes<any>) => (
                <ThemeProvider theme={inputStyle}>
                  <TextField
                    className={css.auth__input}
                    label="password"
                    variant="outlined"
                    type="password"
                    autoComplete="on"
                    {...field}
                  />
                </ThemeProvider>
              )}
            </Field>
            <ErrorFormik nameInput={"password"} />
          </div>
          <Button
            className={css.auth__button}
            type="submit"
            variant="contained"
          >
            {buttonName}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export { AuthForm };
