import { ApolloError } from "@apollo/client";
import { FC } from "react";

import css from "./ErrorFronDb.module.css";
interface IProps {
  error: ApolloError | undefined;
}

const ErrorFromDb: FC<IProps> = ({ error }) => {
  return (
    <div className={css.auth_error_container}>
      {error?.graphQLErrors.map(({ message }, i) => (
        <span className={css.auth__error_text} key={i}>
          {message}
        </span>
      ))}
    </div>
  );
};

export { ErrorFromDb };
