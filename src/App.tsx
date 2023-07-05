import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { MainLayout } from "./layouts";
import { NotFoundPage, RegisterPage } from "./pages";

const App: FC = () => {
  return (
    <div
      className="general__container"
      style={{ height: "100%", width: "100%" }}
    >
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route index={true} element={<RegisterPage />} />
        </Route>
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export { App };
