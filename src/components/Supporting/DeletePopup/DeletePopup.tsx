import { ApolloError } from "@apollo/client";
import { Button, ThemeProvider } from "@mui/material";
import React, { FC } from "react";

import { buttonStyle } from "../../../overrided-style";
import style from "../../multiple-styles/popup.module.css";
import { ErrorFromDb } from "../Error/ErrorFromDb";
import css from "./DeletePopup.module.css";

interface IProps {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  itemName: string;
  deleteItem: (id: number) => Promise<void>;
  itemId: number;
  error: ApolloError | undefined;
}

const DeletePopup: FC<IProps> = ({
  setIsOpenPopup,
  deleteItem,
  itemId,
  itemName,
  error,
}) => {
  return (
    <div className={style.popup_wrapper} onClick={() => setIsOpenPopup(false)}>
      <div
        className={css.popup__container}
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className={css.popup__title}>Do you want delete this {itemName}</h3>
        <ErrorFromDb error={error} />
        <div className={css.popup__block_button}>
          <ThemeProvider theme={buttonStyle}>
            <Button variant="contained" onClick={() => setIsOpenPopup(false)}>
              no
            </Button>
          </ThemeProvider>
          <ThemeProvider theme={buttonStyle}>
            <Button
              onClick={async () => {
                await deleteItem(itemId);
                setIsOpenPopup(false);
              }}
              variant="contained"
            >
              yes
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export { DeletePopup };
