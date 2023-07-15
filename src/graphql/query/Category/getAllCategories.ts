import { DocumentNode, gql } from "@apollo/client";

export const GET_ALL_CATEGORIES: DocumentNode = gql`
  query {
    getAllCategories {
      id
      name
      dateCreated
      taskCount
      tasks {
        id
        name
        description
        dateStart
        dateEnd
      }
    }
  }
`;
