import { DocumentNode, gql } from "@apollo/client";

export const EDIT_TASK: DocumentNode = gql`
  mutation editTask($taskId: Int!, $editTask: UpdateTaskDto!) {
    editTask(taskId: $taskId, editTask: $editTask) {
      id
    }
  }
`;
