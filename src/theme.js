import { createMuiTheme } from "@material-ui/core/styles";

export const COLORS = {
  INFO: "#ff6b81",
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#2f3542",
    },
    info: {
      main: "#ff6b81",
    },
    success: {
      main: "#e9e9eb",
      light: "#f5f6fa",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 20,
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2.5rem",
    },
    h4: {
      fontSize: "2rem",
    },
  },
});

export default theme;
