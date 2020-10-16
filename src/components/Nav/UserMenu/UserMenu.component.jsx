import React, { useState } from "react";
// import { Fade, Button, Menu, MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
import useStyles from "./UserMenu.styles";
import ColorPicker from "./ColorPicker.component";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const UserMenu = () => {
  const bigQuery = useMediaQuery("(max-width:1300px)");
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
      <div className={bigQuery ? classes.menuMobile : classes.menu}>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
          variant="contained"
          className={bigQuery ? classes.menu__btnMobile : classes.menu__btn}
        >
          Pick colors
        </Button>
      </div>
      {open && <ColorPicker closePopper={closePopper} />}
    </React.Fragment>
  );
};

export default UserMenu;
