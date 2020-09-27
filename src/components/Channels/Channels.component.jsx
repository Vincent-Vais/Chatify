import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { MenuList, FormControl, InputLabel, Input } from "@material-ui/core";
import { Container, Item } from "./StyledItems.components";
import { db } from "../../firebase";
import useStyles from "./Channels.styles";

const Channels = () => {
  const history = useHistory();
  const location = useLocation();
  const [input, setInput] = useState("");
  const [channels, setChannels] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    db.collection("channels").onSnapshot((snap) => {
      setChannels(
        snap.docs.map((doc) => ({ channel: doc.data().name, id: doc.id }))
      );
    });
  }, []);

  const handleClick = (event, id) => {
    history.push(`${location.pathname}/${id}`);
  };

  return (
    <Container>
      <FormControl className={classes.form}>
        <InputLabel htmlFor="message-input">United States</InputLabel>
        <Input
          id="message-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className={classes.inputText}
        />
      </FormControl>
      <MenuList>
        {channels
          .filter(({ channel }) => {
            const regex = new RegExp(input.toLowerCase().split("").join(".*"));
            return !!channel.toLowerCase().replace(" ", "").match(regex);
          })
          .map(({ channel, id }) => (
            <Item key={id} onClick={(event) => handleClick(event, id)}>
              {channel}
            </Item>
          ))}
      </MenuList>
    </Container>
  );
};

export default Channels;
