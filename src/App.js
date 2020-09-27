import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/Nav/Nav.component";
import UsernamePopper from "./components/UsernamePopper/UsernamePopper.component";
import ChatCanvas from "./components/ChatCanvas/ChatCanvas.component";
import Channels from "./components/Channels/Channels.component";
import "./App.css";
import WithUsername from "./WithUsername";

function App() {
  const [username, setUsername] = useState("");

  const createUser = (name) => {
    setUsername(name);
  };

  useEffect(() => {
    const user = localStorage.getItem("name");
    if (!username) {
      createUser(user);
    }
    if (user !== username) {
      localStorage.setItem("name", username);
    }
  }, [username]);

  return (
    <div className="app">
      <Nav key={username} username={username} />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/welcome" />} />
        <Route
          exact
          path="/welcome"
          render={() => (
            <UsernamePopper setUsername={createUser} username={username} />
          )}
        />
        <Route
          exact
          path="/welcome/channels"
          render={() => (
            <WithUsername WrappedComponent={Channels} username={username} />
          )}
        />
        <Route
          exact
          path="/welcome/channels/:id"
          render={() => (
            <WithUsername
              WrappedComponent={ChatCanvas}
              setUsername={createUser}
              username={username}
            />
          )}
          // render={() => <ChatCanvas username={username} />}
        />
        <Route path="/:whatever" render={() => <Redirect to="/welcome" />} />
      </Switch>
    </div>
  );
}

export default App;
