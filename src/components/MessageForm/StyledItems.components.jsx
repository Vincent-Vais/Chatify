import { Button, Input } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const SubmitButton = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.ContrastText,
    fontWeight: 700,
  },
}))(Button);

export const TextInput = withStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.success.main}`,
  },
  underline: {
    "&:before": {
      borderBottom: `2px solid ${theme.palette.success.main}`,
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: `2px solid ${theme.palette.success.main}`,
    },
  },
}))(Input);
