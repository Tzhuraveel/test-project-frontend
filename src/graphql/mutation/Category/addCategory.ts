import { DocumentNode, gql } from "@apollo/client";

export const ADD_CATEGORY: DocumentNode = gql`
  mutation createCategory($createCategory: CreateCategoryDto!) {
    createCategory(createCategory: $createCategory) {
      id
      name
      taskCount
    }
  }
`;
