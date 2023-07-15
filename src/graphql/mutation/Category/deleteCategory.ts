import { DocumentNode, gql } from "@apollo/client";

export const DELETE_CATEGORY: DocumentNode = gql`
  mutation deleteCategory($categoryId: Int!) {
    deleteCategory(categoryId: $categoryId)
  }
`;
