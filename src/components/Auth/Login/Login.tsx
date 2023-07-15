import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { LOGIN } from "../../../graphql";
import { authService, client } from "../../../services";
import css from "../Auth.module.css";
import { AuthForm } from "../AuthForm/AuthForm";
import { IAuthInitialValue } from "../AuthForm/authForm.interface";
import { ILoginResponse } from "./login.interface";
const Login = () => {
  const navigate = useNavigate();

  const [login, { data, error }] = useMutation<ILoginResponse>(LOGIN, {
    errorPolicy: "all",
    onCompleted: (data) => {
      if (data?.login) {
        authService.setAccessToken(data.login);
        client.resetStore().then();
      }
    },
  });

  useEffect(() => {
    if (data) {
      navigate("/categories", { replace: true });
    }
  }, [data]);

  const submit = async (values: IAuthInitialValue): Promise<void> => {
    await login({
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
        <h1 className={css.auth__title}>
          Glad to see you again in True Global
        </h1>
        <h4 className={css.auth__subtitle}>Let's login</h4>
      </div>
      <div className={css.auth__form_wrapper}>
        <AuthForm buttonName={"Login"} submit={submit} error={error} />
        <div className={css.auth__container_navigation}>
          <Link to={"/register"} className={css.auth__navigation}>
            I don't have an account yet
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Login };
