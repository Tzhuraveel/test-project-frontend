import { useMutation } from "@apollo/client";
import moment from "moment/moment";
import React, { FC } from "react";

import { EDIT_TASK } from "../../../graphql/mutation/Task";
import { client } from "../../../services";
import css from "../../multiple-styles/popup.module.css";
import { ITaskValue } from "../interfaces/task-edit-interface";
import { TaskForm } from "../TaskForm/TaskForm";
import { ITask } from "../TaskList/task-list-interface";
interface IProps {
  task: ITask;
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskEditPopup: FC<IProps> = ({ task, setIsOpenPopup }) => {
  const [editTask, { error }] = useMutation(EDIT_TASK, {
    onCompleted: () => {
      client.resetStore().then();
    },
  });

  const initialValues: ITaskValue = {
    name: task.name,
    description: task.description,
    dateStart: !!task.dateStart ? moment.utc(task.dateStart) : null,
    dateEnd: !!task.dateEnd ? moment.utc(task.dateEnd) : null,
  };

  const submit = async (values: ITaskValue) => {
    await editTask({
      variables: {
        taskId: task.id,
        editTask: {
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
        taskInfo={{ nameCloseButton: "close", nameActionButton: "edit" }}
        initialValues={initialValues}
        submit={submit}
        setIsOpenPopup={setIsOpenPopup}
      />
      ;
    </div>
  );
};

export { TaskEditPopup };
