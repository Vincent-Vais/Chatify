import { Card, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const PopperCard = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    maxWidth: "80vw",
  },
}))(Card);

export const Text = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.ContrastText,
  },
}))(Typography);

export const UserBtn = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.ContrastText,
  },
}))(Button);
