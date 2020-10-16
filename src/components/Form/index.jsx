import React, { useState } from "react";
import useStyles from "./Form.styles";
import { Button, Input, InputLabel, FormControl } from "@material-ui/core";

const Form = ({ createUser, styledForm }) => {
  const [input, setInput] = useState("");

  const classes = useStyles();

  return (
    <form className={(classes.form, styledForm)} onSubmit={createUser}>
      <FormControl className={classes.control}>
        <InputLabel htmlFor="message-input" className={classes.label}>
          Please enter your nickname to continue
        </InputLabel>
        <Input
          id="message-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className={classes.inputText}
        />
        <Button
          variant="contained"
          onClick={(event) => createUser(event, input, setInput)}
          type="submit"
          disabled={!input}
          className={classes.inputBtn}
        >
          Start
        </Button>
      </FormControl>
    </form>
  );
};

export default Form;
