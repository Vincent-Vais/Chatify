import React from "react";
import "./Nav.styles.css";
import UserMenu from "../UserMenu/UserMenu.component";
import CurrentPath from "../CurrentPath/CurrentPath.component";
import { Typography } from "@material-ui/core";

const Nav = ({ username }) => (
  <div className="nav">
    <CurrentPath />
    <Typography variant="h1" className="nav__hero">
      {username && `Welcome ${username}`}
    </Typography>
    <UserMenu />
  </div>
);

export default Nav;
