import moment from "moment/moment";
import React, { FC, useState } from "react";

import { MultiUseButton } from "../../Supporting";
import { TaskDeletePopup } from "../TaskDeletePopup/TaskDeletePopup";
import { TaskEditPopup } from "../TaskEditPopup/TaskEditPopup";
import { ITask } from "../TaskList/task-list-interface";
import css from "./TaskItem.module.css";

interface IProps {
  task: ITask;
}

const TaskItem: FC<IProps> = ({ task }) => {
  const [isOpenDeletePopup, setIsOpenDeletePopup] = useState<boolean>(false);
  const [isOpenEditPopup, setIsOpenEditPopup] = useState<boolean>(false);

  return (
    <div className={css.task__wrapper}>
      <div className={css.task__container}>
        <div className={css.task__info_container}>
          <h2>{task.name}</h2>
          <p>
            start date:
            {task.dateStart
              ? ` ${moment(task.dateStart).format("YYYY.MM.DD")}`
              : ""}
          </p>
          <p>
            end date:
            {task.dateEnd
              ? ` ${moment(task.dateEnd).format("YYYY.MM.DD")}`
              : ""}
          </p>
          <p className={css.task__description}>{task.description}</p>
        </div>
        <div className={css.task__actions}>
          <div onClick={() => setIsOpenDeletePopup(true)}>
            <MultiUseButton contentButton={"delete"} />
          </div>
          <div onClick={() => setIsOpenEditPopup(true)}>
            <MultiUseButton contentButton={"edit"} />
          </div>
        </div>
      </div>
      {isOpenEditPopup && (
        <TaskEditPopup task={task} setIsOpenPopup={setIsOpenEditPopup} />
      )}
      {isOpenDeletePopup && (
        <TaskDeletePopup
          setIsOpenPopup={setIsOpenDeletePopup}
          taskId={task.id}
        />
      )}
    </div>
  );
};

export { TaskItem };
