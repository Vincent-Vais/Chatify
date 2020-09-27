import { Breadcrumbs, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const LinkPath = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.dark,
  },
}))(Link);

export const Paths = withStyles((theme) => ({
  root: {
    color: theme.palette.secondary.contrastText,
  },
}))(Breadcrumbs);
