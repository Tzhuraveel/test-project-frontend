import { createTheme } from "@mui/material";

export const inputStyle = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "40px",
          marginBottom: "5px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "gray",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor: "#303244;",
        },
      },
    },
  },
});
