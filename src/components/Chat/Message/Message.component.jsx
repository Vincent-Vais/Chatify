import React, { forwardRef } from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import useStyles from "./Message.styles";
import { coloredComponent } from "./StyledItems.components";

const Message = forwardRef(({ message, username }, ref) => {
  const key = message.username === username ? "info" : "success";
  const ColoredContainer = coloredComponent(key, "main", Card);
  const ColoredText = coloredComponent(key, "ContrastText", Typography);
  const classes = useStyles();
  return (
    <ColoredContainer
      ref={ref}
      className={`${classes.message} ${
        message.username === username ? "right" : "left"
      }`}
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
