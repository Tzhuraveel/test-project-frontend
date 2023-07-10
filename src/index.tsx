import "./styles/variables.css";
import "./styles/global.css";

import { ApolloProvider } from "@apollo/client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";
import ReactDOM from "react-dom/client";
import { unstable_HistoryRouter as BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { client, history } from "./services";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <ApolloProvider client={client}>
      {/*// @ts-ignore*/}
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </LocalizationProvider>
);
