import React, { useState } from "react";
import { Fade } from "@material-ui/core";
import { MenuButton, PopupMenu, Item } from "./StyledItems.components";
import "./UserMenu.styles.css";

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="user-menu">
      <MenuButton
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        style={{ fontWeight: "700" }}
      >
        Settings
      </MenuButton>
      <PopupMenu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
        TransitionComponent={Fade}
        style={{ transform: "translateX(-1rem)" }}
      >
        <Item onClick={handleClose}>Change username</Item>
        <Item onClick={handleClose}>Change theme</Item>
      </PopupMenu>
    </div>
  );
};

export default UserMenu;
