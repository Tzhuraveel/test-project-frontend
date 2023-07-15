import CloseIcon from "@mui/icons-material/Close";
import React, { FC } from "react";

import css from "./CloseButton.module.css";

interface IProps {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
const CloseButton: FC<IProps> = ({ setIsOpenPopup }) => {
  return (
    <div className={css.popup__block_close}>
      <CloseIcon
        className={css.popup__close_icon}
        onClick={() => setIsOpenPopup(false)}
      />
    </div>
  );
};

export { CloseButton };
