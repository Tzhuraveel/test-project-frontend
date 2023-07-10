import { useMutation } from "@apollo/client";
import { Button, TextField, ThemeProvider } from "@mui/material";
import { ErrorMessage, Field, FieldAttributes, Form, Formik } from "formik";
import React, { FC, useEffect } from "react";

import { ADD_CATEGORY } from "../../../graphql";
import { inputStyle } from "../../../overrided-style";
import { addCategoryValidator } from "../../../validators";
import { CloseButton } from "../../Supporting/CloseButton";
import { ICategory } from "../CategoryList/categoryInterface";
import { ICategoryAddInitialValue } from "./categoryAdd.interface";
import css from "./CategoryAddPopup.module.css";

interface IProps {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
}

const CategoryAddPopup: FC<IProps> = ({ setIsOpenPopup, setCategories }) => {
  const initialValues: ICategoryAddInitialValue = { name: "" };

  const [addCategory, { data, error, loading }] = useMutation(ADD_CATEGORY, {
    errorPolicy: "all",
  });

  const submit = async (value: ICategoryAddInitialValue): Promise<void> => {
    await addCategory({
      variables: {
        createCategory: {
          name: value.name,
        },
      },
    });
  };

  useEffect(() => {
    if (!loading && data?.createCategory) {
      setCategories((prevState) => [...prevState, data?.createCategory]);
    }
  }, [data]);

  return (
    <div className={css.popup_wrapper} onClick={() => setIsOpenPopup(false)}>
      <div
        onClick={(event) => event.stopPropagation()}
        className={css.popup_container}
      >
        <CloseButton setIsOpenPopup={setIsOpenPopup} />
        <div className={css.popup__block_action}>
          <Formik
            validationSchema={addCategoryValidator}
            initialValues={initialValues}
            validateOnBlur={true}
            onSubmit={submit}
          >
            <Form className={css.popup__form}>
              <Field name="name">
                {({ field }: FieldAttributes<any>) => (
                  <ThemeProvider theme={inputStyle}>
                    <TextField label="name" variant="outlined" {...field} />
                  </ThemeProvider>
                )}
              </Field>
              <div className={css.popup__block_error}>
                <span className={css.auth__error_text}>
                  <ErrorMessage name={"name"} />
                </span>
              </div>
              <Button variant="contained" type={"submit"}>
                Add category
              </Button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export { CategoryAddPopup };
