import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./hoc";
import { MainLayout } from "./layouts";
import {
  CategoriesPage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
  TasksPage,
} from "./pages";

const App: FC = () => {
  return (
    <div className="general__container">
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route index element={<Navigate to={"categories"} />} />
          <Route
            path={"categories"}
            element={
              <AuthProvider>
                <CategoriesPage />
              </AuthProvider>
            }
          />
          <Route
            path={"tasks/:categoryId/:categoryName"}
            element={
              <AuthProvider>
                <TasksPage />
              </AuthProvider>
            }
          />
        </Route>

        <Route path={"register"} element={<RegisterPage />} />
        <Route path={"login"} element={<LoginPage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export { App };
