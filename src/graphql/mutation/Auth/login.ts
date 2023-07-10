import { DocumentNode, gql } from "@apollo/client";

export const LOGIN: DocumentNode = gql`
  mutation login($credentials: LoginDto!) {
    login(credentials: $credentials) {
      accessToken
      user {
        id
        name
        role
      }
    }
  }
`;
