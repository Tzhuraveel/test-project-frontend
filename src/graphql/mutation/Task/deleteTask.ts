import { DocumentNode, gql } from "@apollo/client";

export const DELETE_TASK: DocumentNode = gql`
  mutation deleteTask($taskId: Int!) {
    deleteTask(taskId: $taskId)
  }
`;
