import React, { useState } from "react";
// import { Fade, Button, Menu, MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
import useStyles from "./UserMenu.styles";
import ColorPicker from "./ColorPicker.component";

const UserMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const closePopper = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.menu}>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
          variant="contained"
          className={classes.menu__btn}
        >
          Pick colors
        </Button>
      </div>
      {open && <ColorPicker closePopper={closePopper} />}
    </React.Fragment>
  );
};

export default UserMenu;
