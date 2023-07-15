import { DocumentNode, gql } from "@apollo/client";

export const GET_ALL_TASKS: DocumentNode = gql`
  query getAllTasks($categoryId: Int!) {
    getAllTasks(categoryId: $categoryId) {
      id
      name
      dateStart
      description
      dateEnd
      category {
        id
        name
      }
    }
  }
`;
