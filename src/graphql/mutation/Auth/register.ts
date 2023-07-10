import { DocumentNode, gql } from "@apollo/client";

export const REGISTER: DocumentNode = gql`
  mutation register($credentials: RegisterDto!) {
    register(credentials: $credentials)
  }
`;
