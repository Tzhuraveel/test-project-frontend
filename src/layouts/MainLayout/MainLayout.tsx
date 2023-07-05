import React from "react";
import { Outlet } from "react-router-dom";

import css from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={css.mainLayout__container}>
      <Outlet />
    </div>
  );
};

export { MainLayout };
