import { Button, ThemeProvider } from "@mui/material";
import { ButtonPropsVariantOverrides } from "@mui/material/Button/Button";
import { OverridableStringUnion } from "@mui/types";
import React, { FC } from "react";

import { buttonStyle } from "../../../overrided-style";

interface IProps {
  disabled?: boolean;
  contentButton: string;
  typeOfButton?: "submit" | undefined;
  variant?: OverridableStringUnion<
    "text" | "outlined" | "contained",
    ButtonPropsVariantOverrides
  >;
}
const MultiUseButton: FC<IProps> = ({
  disabled = false,
  contentButton,
  typeOfButton,
  variant = "contained",
}) => {
  return (
    <ThemeProvider theme={buttonStyle}>
      <Button variant={variant} disabled={disabled} type={typeOfButton}>
        {contentButton}
      </Button>
    </ThemeProvider>
  );
};

export { MultiUseButton };
