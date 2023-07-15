import { useMutation } from "@apollo/client";
import React, { FC } from "react";

import { DELETE_TASK } from "../../../graphql/mutation/Task";
import { client } from "../../../services";
import { DeletePopup } from "../../Supporting";

interface IProps {
  taskId: number;
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskDeletePopup: FC<IProps> = ({ setIsOpenPopup, taskId }) => {
  const [deletionTask, { error }] = useMutation(DELETE_TASK, {
    onCompleted: () => {
      client.resetStore().then();
    },
  });

  const deleteTask = async (id: number): Promise<void> => {
    await deletionTask({
      variables: {
        taskId: id,
      },
    });
  };

  return (
    <DeletePopup
      error={error}
      setIsOpenPopup={setIsOpenPopup}
      deleteItem={deleteTask}
      itemId={taskId}
      itemName={"task"}
    />
  );
};

export { TaskDeletePopup };
