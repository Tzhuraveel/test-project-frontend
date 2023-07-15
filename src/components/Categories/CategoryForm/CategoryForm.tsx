import { ApolloError } from "@apollo/client";
import { TextField, ThemeProvider } from "@mui/material";
import { Field, FieldAttributes, Form, Formik } from "formik";
import React, { FC } from "react";

import { inputStyle } from "../../../overrided-style";
import { addCategoryValidator } from "../../../validators";
import { ErrorFromDb, MultiUseButton } from "../../Supporting";
import { ErrorFormik } from "../../Supporting/Error/ErrorFormik";
import css from "./CategoryForm.module.css";
interface ICategoryInfo {
  nameCloseButton: string;
  nameActionButton: string;
  popupTitle: string;
}

interface IProps {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  errorFromDb: ApolloError | undefined;
  initialValues: { name: string };
  submit: any;
  categoryInfo: ICategoryInfo;
}

const CategoryForm: FC<IProps> = ({
  initialValues,
  submit,
  setIsOpenPopup,
  categoryInfo,
  errorFromDb,
}) => {
  return (
    <div
      onClick={(event) => event.stopPropagation()}
      className={css.form__container}
    >
      <div className={css.formik__container}>
        <h3 className={css.title}>{categoryInfo.popupTitle}</h3>
        <Formik
          validationSchema={addCategoryValidator}
          initialValues={initialValues}
          validateOnBlur={true}
          onSubmit={submit}
        >
          <Form className={css.form}>
            <div className={css.block__title}>
              <h4>Name:</h4>
            </div>
            <Field name="name">
              {({ field }: FieldAttributes<any>) => (
                <ThemeProvider theme={inputStyle}>
                  <TextField label="name" variant="outlined" {...field} />
                </ThemeProvider>
              )}
            </Field>
            {errorFromDb ? (
              <ErrorFromDb error={errorFromDb} />
            ) : (
              <ErrorFormik nameInput={"name"} />
            )}
            <div className={css.button__container}>
              <div onClick={() => setIsOpenPopup(false)}>
                <MultiUseButton contentButton={categoryInfo.nameCloseButton} />
              </div>
              <MultiUseButton
                contentButton={categoryInfo.nameActionButton}
                typeOfButton={"submit"}
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export { CategoryForm };
