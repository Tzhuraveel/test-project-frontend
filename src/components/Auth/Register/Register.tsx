import { useMutation } from "@apollo/client";
import { FC, useEffect } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

import { REGISTER } from "../../../graphql";
import css from "../Auth.module.css";
import { AuthForm } from "../AuthForm/AuthForm";
import { IAuthInitialValue } from "../AuthForm/authForm.interface";

const Register: FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const [register, { error, data }] = useMutation(REGISTER, {
    errorPolicy: "all",
  });

  useEffect(() => {
    if (data?.register) {
      navigate("/login", { replace: true });
    }
  }, [data]);

  const submit = async (values: IAuthInitialValue): Promise<void> => {
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
      <div className={css.auth__description}>
        <h1 className={css.auth__title}>Welcome to True Global</h1>
        <h4 className={css.auth__subtitle}>Let's create your account</h4>
      </div>
      <div className={css.auth__form_wrapper}>
        <AuthForm buttonName={"Register"} submit={submit} error={error} />
        <div className={css.auth__container_navigation}>
          <Link to={"/login"} className={css.auth__navigation}>
            I already have an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Register };
