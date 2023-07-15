import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { BrowserHistory, createBrowserHistory } from "history";

import { authService } from "./authService";
const history: BrowserHistory = createBrowserHistory({ window });

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
});

const authLink: ApolloLink = setContext((_, { headers }) => {
  const accessToken = authService.getAccessToken();
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors }) => {
  graphQLErrors?.map((error) => {
    // @ts-ignore
    if (error?.message === "Unauthorized" || error?.code === "Unauthorized") {
      authService.deleteToken();

      history.replace("/login?expSession=true");
    }
  });
});
export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export { history };
