import { createTheme } from "@mui/material";

export const buttonStyle = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "40px",
          minWidth: "92px",
          color: "white",
        },
      },
    },
  },
});
