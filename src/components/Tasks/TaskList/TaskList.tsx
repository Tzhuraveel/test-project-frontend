import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GET_ALL_TASKS } from "../../../graphql/query/Task";
import { MultiUseButton } from "../../Supporting";
import { TaskAddPopup } from "../TaskAddPopup/TaskAddPopup";
import { TaskItem } from "../TaskItem/TaskItem";
import { IGetAllTasks, ITask } from "./task-list-interface";
import css from "./TaskList.module.css";
const TaskList = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isOpenAddPopup, setIsOpenAddPopup] = useState<boolean>(false);

  const { categoryId, categoryName } = useParams<{
    categoryId: string;
    categoryName: string;
  }>();

  const { data, loading } = useQuery<IGetAllTasks>(GET_ALL_TASKS, {
    errorPolicy: "all",
    variables: {
      categoryId: categoryId ? +categoryId : null,
    },
  });

  useEffect(() => {
    if (data?.getAllTasks !== undefined) {
      setTasks(data?.getAllTasks);
    }
  }, [data]);

  return (
    <div className={css.tasks__wrapper}>
      <div className={css.tasks__header}>
        <h2>{categoryName}</h2>
        <div onClick={() => setIsOpenAddPopup(true)}>
          <MultiUseButton contentButton={"add Task"} />
        </div>
      </div>
      <div className={css.tasks__container}>
        {tasks.length !== 0 &&
          tasks.map((task) => <TaskItem task={task} key={task.id} />)}
        {loading && <h1>Loading...</h1>}
        {tasks.length === 0 && !loading && (
          <h2>Your list of tasks is empty...</h2>
        )}
      </div>
      {isOpenAddPopup && (
        <TaskAddPopup
          categoryId={categoryId ? +categoryId : 1}
          setIsOpenPopup={setIsOpenAddPopup}
        />
      )}
    </div>
  );
};

export { TaskList };
