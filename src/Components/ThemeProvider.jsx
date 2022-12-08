import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#fb923c",
    },
    secondary: {
      main: "#e4e7e4",
    },
  },
  typography: {
    fontFamily: ["Nunito Sans", "sans-serif"].join(","),
    fontSize: 15,
  },

  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export default theme;
