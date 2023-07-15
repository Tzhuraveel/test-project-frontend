import { useMutation } from "@apollo/client";
import React, { FC } from "react";

import { ADD_TASK } from "../../../graphql/mutation/Task";
import { client } from "../../../services";
import css from "../../multiple-styles/popup.module.css";
import { ITaskValue } from "../interfaces/task-edit-interface";
import { TaskForm } from "../TaskForm/TaskForm";

interface IProps {
  categoryId: number;
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskAddPopup: FC<IProps> = ({ setIsOpenPopup, categoryId }) => {
  const [addTask, { error }] = useMutation(ADD_TASK, {
    onCompleted: () => {
      client.resetStore().then();
    },
  });

  const initialValues: ITaskValue = {
    name: "",
    description: "",
    dateStart: null,
    dateEnd: null,
  };

  const submit = async (values: ITaskValue) => {
    await addTask({
      variables: {
        categoryId,
        createTask: {
          name: values.name,
          description: values.description,
          dateStart: values.dateStart,
          dateEnd: values.dateEnd,
        },
      },
    });

    if (!error) {
      setIsOpenPopup(false);
    }
  };

  return (
    <div className={css.popup_wrapper} onClick={() => setIsOpenPopup(false)}>
      <TaskForm
        errorFromDb={error}
        taskInfo={{ nameCloseButton: "close", nameActionButton: "save" }}
        initialValues={initialValues}
        submit={submit}
        setIsOpenPopup={setIsOpenPopup}
      />
      ;
    </div>
  );
};

export { TaskAddPopup };
