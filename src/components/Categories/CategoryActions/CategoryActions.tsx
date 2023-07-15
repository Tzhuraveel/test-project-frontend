import { Button, ThemeProvider } from "@mui/material";
import React, { FC } from "react";

import { buttonStyle } from "../../../overrided-style";
import { CloseButton } from "../../Supporting";
import css from "./CategoryActions.module.css";

interface IProps {
  setIsOpenActionsPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenEditPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenDeletePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryActions: FC<IProps> = ({
  setIsOpenActionsPopup,
  setIsOpenDeletePopup,
  setIsOpenEditPopup,
}) => {
  return (
    <div
      className={css.popup__wrapper_actions}
      onClick={(event) => event.stopPropagation()}
    >
      <CloseButton setIsOpenPopup={setIsOpenActionsPopup} />
      <div className={css.popup__container_actions}>
        <ThemeProvider theme={buttonStyle}>
          <Button
            onClick={() => {
              setIsOpenEditPopup(true);
              setIsOpenActionsPopup(false);
            }}
            variant="text"
            className={css.popup__button}
          >
            Edit
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={buttonStyle}>
          <Button
            onClick={() => {
              setIsOpenDeletePopup(true);
              setIsOpenActionsPopup(false);
            }}
            variant="text"
            className={css.popup__button}
          >
            Delete
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export { CategoryActions };
