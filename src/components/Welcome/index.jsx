import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Card, CardContent, CardActions, Typography } from "@material-ui/core";
import useStyles from "./Welcome.styles";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { setUser } from "../../store/user/actions";
import WithBtnForm from "./WithBtnForm.component";
import { SignalCellularNull } from "@material-ui/icons";

const Welcome = () => {
  const history = useHistory();
  const location = useLocation();
  const bigQuery = useMediaQuery("(max-width:1200px)");
  const smallQuery = useMediaQuery("(max-width:700px)");

  const user = useSelector(selectUser, shallowEqual);
  const username = user ? user.name : null;
  const dispatch = useDispatch();

  const createUser = (event, name, callback) => {
    event.preventDefault();
    dispatch(
      setUser(name, () => history.push(`${location.pathname}/channels`))
    );
    callback("");
  };
  const goToChannels = () => history.push(`${location.pathname}/channels`);

  const classes = useStyles();

  return (
    <Card
      className={bigQuery ? classes.containerMobile : classes.container}
      elevation={3}
    >
      <CardContent>
        <Typography variant="h1" className={classes.heading}>
          Welcome to Chatify - an instant messaging app that connects you with
          people from other countries
        </Typography>
      </CardContent>
      <CardActions
        className={`${
          smallQuery ? classes.verticalContainer : SignalCellularNull
        }`}
      >
        <WithBtnForm
          username={username}
          goToChannels={goToChannels}
          createUser={createUser}
          styledForm={smallQuery ? classes.mobileForm : classes.form}
        />
      </CardActions>
    </Card>
  );
};

export default Welcome;
