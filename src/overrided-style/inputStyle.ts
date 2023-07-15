import { createTheme } from "@mui/material";

export const inputStyle = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "60px",
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

export const textArea = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
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
          height: "130px",
          color: "white",
          backgroundColor: "#303244;",
        },
      },
    },
  },
});
