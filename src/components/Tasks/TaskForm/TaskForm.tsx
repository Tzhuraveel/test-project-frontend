import { ApolloError } from "@apollo/client";
import { Form, Formik } from "formik";
import React, { FC } from "react";

import { taskFormValidator } from "../../../validators/task-form.validator";
import { ErrorFromDb, MultiUseButton } from "../../Supporting";
import { ITaskValue } from "../interfaces/task-edit-interface";
import { DateInput } from "./DateInput/DateInput";
import { DescriptionInput } from "./DescriptionInput/DescriptionInput";
import { NameInput } from "./NameInput/NameInput";
import css from "./TaskForm.module.css";

interface ITaskInfo {
  nameCloseButton: string;
  nameActionButton: string;
}

interface IProps {
  initialValues: ITaskValue;
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  taskInfo: ITaskInfo;
  submit: (values: any) => void;
  errorFromDb: ApolloError | undefined;
}

const TaskForm: FC<IProps> = ({
  initialValues,
  submit,
  errorFromDb,
  setIsOpenPopup,
  taskInfo,
}) => {
  return (
    <div
      className={css.form__container}
      onClick={(event) => event.stopPropagation()}
    >
      <ErrorFromDb error={errorFromDb} />
      <div className={css.formik__container}>
        <Formik
          initialValues={initialValues}
          onSubmit={submit}
          validationSchema={taskFormValidator}
        >
          <Form className={css.form}>
            <div className={css.input__block}>
              <NameInput />
            </div>
            <div className={css.input__block}>
              <DescriptionInput />
            </div>
            <div className={css.input__block}>
              <DateInput inputName={"dateStart"} inputTitle={"start date"} />
            </div>
            <div className={css.input__block}>
              <DateInput inputName={"dateEnd"} inputTitle={"end date"} />
            </div>
            <div className={css.button__container}>
              <div onClick={() => setIsOpenPopup(false)}>
                <MultiUseButton contentButton={taskInfo.nameCloseButton} />
              </div>
              <div>
                <MultiUseButton
                  contentButton={taskInfo.nameActionButton}
                  typeOfButton={"submit"}
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export { TaskForm };
