import { DocumentNode, gql } from "@apollo/client";

export const ADD_TASK: DocumentNode = gql`
  mutation createTask($createTask: CreateTaskDto!, $categoryId: Int!) {
    createTask(createTask: $createTask, categoryId: $categoryId) {
      id
    }
  }
`;
