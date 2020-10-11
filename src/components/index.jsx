import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Welcome from "./Welcome";
import Chat from "./Chat";
import Channels from "./Channels";
import WithUsername from "./WithUsername.component";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getUser, getUsersFromSnap } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";
import { db } from "../firebase";
import { clearUser } from "../firebase/utils";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { selectTheme } from "../store/theme/selectors";
import svg from "../assets/floating-cogs.svg";
import { convertHexToRgba } from "../utils";

function App() {
  const user = useSelector(selectUser, shallowEqual);
  const dispatch = useDispatch();

  const colors = useSelector(selectTheme, shallowEqual);

  const theme = {
    palette: {
      ...colors,
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
    typography: {
      fontSize: 20,
      h1: {
        fontSize: "4rem",
      },
      h2: {
        fontSize: "3rem",
      },
      h3: {
        fontSize: "2.5rem",
      },
      h4: {
        fontSize: "2rem",
      },
    },
  };

  useEffect(() => {
    if (!user) dispatch(getUser());
    db.collection("users").onSnapshot((snap) =>
      dispatch(getUsersFromSnap(snap))
    );
  }, [user, dispatch]);

  useEffect(() => {
    window.onbeforeunload = clearUser;
  }, []);

  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <div
        className="app"
        style={getBackground(
          theme.palette.primary.main,
          theme.palette.secondary.main
        )}
      >
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/welcome" />} />
          <Route exact path="/welcome" render={() => <Welcome />} />
          <Route
            exact
            path="/welcome/channels"
            render={() => (
              <WithUsername>
                <Channels />
              </WithUsername>
            )}
          />
          <Route
            exact
            path="/welcome/channels/:id"
            render={() => (
              <WithUsername>
                <Chat />
              </WithUsername>
            )}
          />
          <Route path="/:whatever" render={() => <Redirect to="/welcome" />} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

function getBackground(background, texture) {
  return {
    backgroundColor: `${convertHexToRgba(background, 0.8, 0.2)}`,
    backgroundImage: `url(${svg})`,
  };
}

export default App;
