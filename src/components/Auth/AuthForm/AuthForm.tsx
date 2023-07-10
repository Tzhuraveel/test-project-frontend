import { ApolloError } from "@apollo/client";
import { Button, TextField, ThemeProvider } from "@mui/material";
import { ErrorMessage, Field, FieldAttributes, Form, Formik } from "formik";
import { FC } from "react";

import { inputStyle } from "../../../overrided-style";
import { authFormValidator } from "../../../validators";
import { IAuthInitialValue } from "./AuthForm.interface";
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
          <div className={css.auth_error_container}>
            {error?.graphQLErrors.map(({ message }, i) => (
              <span className={css.auth__error_text} key={i}>
                {message}
              </span>
            ))}
          </div>
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
            <div className={css.auth_error_container}>
              <span className={css.auth__error_text}>
                <ErrorMessage name={"name"} />
              </span>
            </div>
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
            <div className={css.auth_error_container}>
              <span className={css.auth__error_text}>
                <ErrorMessage name={"password"} />
              </span>
            </div>
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
