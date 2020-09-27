import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CardContent,
  CardActions,
  Button,
  Input,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import useStyles from "./UsernamePopper.styles";
import { PopperCard, Text, UserBtn } from "./StyledItems.components";
import "./UsernamePopper.styles.css";

const UsernamePopper = ({ setUsername, username }) => {
  const [input, setInput] = useState("");
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const createUser = (event) => {
    event.preventDefault();
    setUsername(input);
    setInput("");
    history.push(`${location.pathname}/channels`);
  };

  return (
    <PopperCard>
      <CardContent>
        <Text variant="h1" className={classes.heading}>
          Welcome to Chatify - an instant messaging app that connects you with
          people from other countries
        </Text>
      </CardContent>
      <CardActions>
        <form className={classes.form}>
          {username && (
            <UserBtn
              variant="contained"
              onClick={() => history.push(`${location.pathname}/channels`)}
              type="submit"
              className={classes.userBtn}
            >
              Continue as {username}
            </UserBtn>
          )}
          <FormControl className={classes.control}>
            <InputLabel htmlFor="message-input">
              Please enter your name to continue
            </InputLabel>
            <Input
              id="message-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className={classes.inputText}
            />
            <Button
              variant="contained"
              onClick={createUser}
              type="submit"
              disabled={!input}
              className={classes.inputBtn}
            >
              Start
            </Button>
          </FormControl>
        </form>
      </CardActions>
    </PopperCard>
  );
};

export default UsernamePopper;
