import { DocumentNode, gql } from "@apollo/client";

export const EDIT_CATEGORY: DocumentNode = gql`
  mutation editCategory($categoryId: Int!, $editCategory: UpdateCategoryDto!) {
    editCategory(categoryId: $categoryId, editCategory: $editCategory) {
      id
    }
  }
`;
