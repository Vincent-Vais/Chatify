import React, { useEffect, useState } from "react";
import {
  Paper,
  MenuList,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import { db } from "../../firebase";
import useStyles from "./Channels.styles";
import Channel from "./Channel/Channel.component";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getChannelsFromSnap } from "../../store/channels/actions";
import { selectChannels } from "../../store/channels/selectors";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Channels = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(null);
  const channels = useSelector(selectChannels, shallowEqual);
  const dispatch = useDispatch();

  const smallQuery = useMediaQuery("(max-width:800px)");

  const classes = useStyles();

  useEffect(() => {
    db.collection("channels").onSnapshot((snap) =>
      dispatch(getChannelsFromSnap(snap))
    );
  }, [dispatch]);

  const toggleOpen = (id) => setOpen(id);

  return (
    <Paper className={smallQuery ? classes.containerMobile : classes.container}>
      <FormControl className={classes.form}>
        <InputLabel htmlFor="message-input" className={classes.label}>
          United States
        </InputLabel>
        <Input
          id="message-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className={classes.inputText}
        />
      </FormControl>
      <MenuList className={classes.list}>
        {channels
          .filter(({ name }) => {
            const regex = new RegExp(input.toLowerCase().split("").join(".*"));
            return !!name.toLowerCase().replace(" ", "").match(regex);
          })
          .map((channel) => (
            <Channel
              key={channel.id}
              open={open}
              channel={channel}
              toggleOpen={toggleOpen}
            />
          ))}
      </MenuList>
    </Paper>
  );
};

export default Channels;
