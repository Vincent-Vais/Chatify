import React, { forwardRef } from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import "./Message.styles.css";
import { coloredComponent } from "./StyledItems.components";

const Message = forwardRef(({ message, username }, ref) => {
  const key = message.username === username ? "messageOut" : "messageIn";
  const ColoredContainer = coloredComponent(key, "main", Card);
  const ColoredText = coloredComponent(key, "ContrastText", Typography);
  return (
    <ColoredContainer
      ref={ref}
      className="message"
      style={
        message.username === username
          ? { marginLeft: "auto" }
          : { marginRight: "auto" }
      }
    >
      <CardContent>
        <ColoredText variant="h5" component="h2">
          {message.username} : {message.text}
        </ColoredText>
      </CardContent>
    </ColoredContainer>
  );
});

export default Message;
