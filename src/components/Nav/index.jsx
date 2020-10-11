import React from "react";
import UserMenu from "./UserMenu/UserMenu.component";
import CurrentPath from "./CurrentPath/CurrentPath.component";
import { Typography } from "@material-ui/core";
import { useSelector, shallowEqual } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import useStyles from "./Nav.styles";

const Nav = () => {
  const user = useSelector(selectUser, shallowEqual);
  const username = user ? user.name : "";

  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <CurrentPath />
      <Typography variant="h1" className={classes.hero}>
        {username && (
          <span>
            Hello <span className={classes.hero__colored}>@ </span>
            {username}
          </span>
        )}
      </Typography>
      <UserMenu />
    </div>
  );
};

export default Nav;
