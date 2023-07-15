import { createTheme } from "@mui/material";

export const dateFieldStyle = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "60px",
        },
      },
    },
  },
});
