import { withStyles } from "@material-ui/core/styles";

export const coloredComponent = (key, type, component) =>
  withStyles((theme) => ({
    root: {
      backgroundColor: theme.palette[key][type],
    },
  }))(component);
