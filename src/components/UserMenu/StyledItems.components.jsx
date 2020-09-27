import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const MenuButton = withStyles((theme) => ({
  root: {
    color: theme.palette.info.ContrastText,
    backgroundColor: theme.palette.info.main,
    "&:hover": {
      backgroundColor: theme.palette.info.dark,
    },
  },
}))(Button);

export const PopupMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "center",
      horizontal: "right",
    }}
    {...props}
  />
));

export const Item = withStyles((theme) => ({
  root: {
    "&:active": {
      backgroundColor: theme.palette.info.light,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.info.ContrastText,
      },
    },
  },
}))(MenuItem);
