import { ErrorMessage } from "formik";
import React, { FC } from "react";

import css from "./ErrorFormik.module.css";
interface IProps {
  nameInput: string;
}

const ErrorFormik: FC<IProps> = ({ nameInput }) => {
  return (
    <div className={css.block__error}>
      <span className={css.error_text}>
        <ErrorMessage name={nameInput} />
      </span>
    </div>
  );
};

export { ErrorFormik };
