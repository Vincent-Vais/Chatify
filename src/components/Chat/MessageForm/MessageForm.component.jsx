import React, { useState } from "react";
import { FormControl, InputLabel, Button, Input } from "@material-ui/core";
import useStyles from "./MessageForm.styles";

const MessageForm = ({ sendMessage }) => {
  const [input, setInput] = useState("");

  const classes = useStyles();
  return (
    <FormControl className={classes.control}>
      <InputLabel htmlFor="message-input" className={classes.label}>
        Enter a messages
      </InputLabel>
      <Input
        id="message-input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        className={classes.input}
      />
      <Button
        variant="contained"
        onClick={(event) => sendMessage(event, input, setInput)}
        type="submit"
        disabled={!input}
        className={classes.btn}
      >
        Send
      </Button>
    </FormControl>
  );
};

export default MessageForm;
