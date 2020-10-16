import React, { useEffect, useState } from "react";
import useStyles from "./Stats.styles";
import { Box, Typography } from "@material-ui/core";
import { db } from "../../../../firebase";

const Stats = ({ channelId }) => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const channelsOff = db.doc(`channels/${channelId}`).onSnapshot((snap) => {
      setUsers(snap.data().users.length);
    });

    const messagesOff = db
      .collection(`channels/${channelId}/messages`)
      .onSnapshot((snap) => {
        setMessages(snap.docs.length);
      });

    return () => {
      channelsOff();
      messagesOff();
    };
  }, [channelId]);

  const classes = useStyles();
  return (
    <Box className={classes.main__dashboard}>
      <Typography className={classes.dashboard__item}>
        Total messages: <span style={{ fontWeight: 700 }}>{messages}</span>
      </Typography>
      <Typography className={classes.dashboard__item}>
        Total users: <span style={{ fontWeight: 700 }}>{users}</span>
      </Typography>
    </Box>
  );
};

export default Stats;
