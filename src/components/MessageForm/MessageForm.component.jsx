import React, { useState } from "react";
import { FormControl, InputLabel } from "@material-ui/core";
import { SubmitButton, TextInput } from "./StyledItems.components";

const MessageForm = ({ sendMessage }) => {
  const [input, setInput] = useState("");
  return (
    <FormControl
      style={{
        flexDirection: "row",
        flex: "1 1 95%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <InputLabel htmlFor="message-input">Enter a messages</InputLabel>
      <TextInput
        id="message-input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        style={{ flex: "1 2 80%", fontSize: "2rem" }}
      />
      <SubmitButton
        variant="contained"
        onClick={(event) => sendMessage(event, input, setInput)}
        type="submit"
        disabled={!input}
        style={{
          flex: "1 1 20%",
          marginBottom: "-2rem",
          marginLeft: "2rem",
          fontSize: "2rem",
        }}
      >
        Send Message
      </SubmitButton>
    </FormControl>
  );
};

export default MessageForm;
