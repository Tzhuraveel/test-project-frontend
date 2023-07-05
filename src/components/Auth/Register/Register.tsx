import { useMutation } from "@apollo/client";
import { TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FC } from "react";

import { REGISTER } from "../../../graphql/mutation/register";
import { authFormValidator } from "../../../validators";
import css from "./Register.module.css";

interface IAuthForm {
  name: string;
  password: string;
}

const Register: FC = () => {
  const initialValues: IAuthForm = { name: "", password: "" };
  const [register, { data, error, loading }] = useMutation(REGISTER, {
    errorPolicy: "all",
  });
  const submit = async (values: IAuthForm) => {
    await register({
      variables: {
        credentials: {
          name: values.name,
          password: values.password,
        },
      },
    });
  };

  return (
    <div className={css.auth__container}>
      <h1 className={css.auth__title}>Welcome to True Global</h1>
      <div>Let's create your account!</div>
      <div className={css.auth__error_block}>
        {error?.graphQLErrors.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </div>
      <div className={css.form__container}>
        <Formik
          initialValues={initialValues}
          onSubmit={submit}
          validationSchema={authFormValidator}
          validateOnBlur={true}
        >
          <Form className={css.auth__form}>
            <div className={css.auth__input_container}>
              <Field name="name" className={css.auth__toper}>
                {({ field }: any) => (
                  <TextField
                    className={css.auth__input}
                    label="username"
                    variant="filled"
                    autoComplete="on"
                    {...field}
                  />
                )}
              </Field>
              <div className={css.auth__error_block}>
                <ErrorMessage name={"name"} />
              </div>
              <Field name="password">
                {({ field }: any) => (
                  <TextField
                    className={css.auth__input}
                    label="password"
                    variant="filled"
                    type="password"
                    autoComplete="on"
                    {...field}
                  />
                )}
              </Field>
              <div className={css.auth__error_block}>
                <ErrorMessage name={"password"} />
              </div>
            </div>
            <button className={css.auth__button} type="submit">
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export { Register };
