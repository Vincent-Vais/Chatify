import { Paper, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const Container = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: "60vw",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "0 2rem",
  },
}))(Paper);

export const Item = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.ContrastText,
  },
}))(MenuItem);
