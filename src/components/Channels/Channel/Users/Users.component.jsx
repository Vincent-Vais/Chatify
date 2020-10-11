import React from "react";
import useStyles from "./Users.styles";

const Users = ({ channelUsers }) => {
  const classes = useStyles();
  return (
    <ul>
      {channelUsers.map(({ online, name, id }) => (
        <li className={classes.listItem} key={id}>
          <span className={online ? "online" : "offline"}>@ {name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Users;
