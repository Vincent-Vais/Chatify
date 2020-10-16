import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  MenuItem,
} from "@material-ui/core";
import { db } from "../../../firebase";
import useStyles from "./Channel.styles";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { selectUser, selectUsers } from "../../../store/user/selectors";
import { setChannel } from "../../../store/channels/actions";
import { useHistory, useLocation } from "react-router-dom";
import Stats from "./Stats/Stats.component";
import Users from "./Users/Users.component";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Channel = ({ channel, open, toggleOpen }) => {
  const history = useHistory();
  const location = useLocation();

  const dispatch = useDispatch();

  const { name, id, users } = channel;
  const currentUser = useSelector(selectUser, shallowEqual);
  const allUsers = useSelector(selectUsers, shallowEqual);

  const [channelUsers, setChannelUsers] = useState([]);

  const classes = useStyles();

  const bigQuery = useMediaQuery("(max-width:1250px)");
  const smallQuery = useMediaQuery("(max-width:800px)");

  useEffect(() => {
    setChannelUsers(
      allUsers.filter(({ id }) => users.includes(id) && id !== currentUser.id)
    );
  }, [allUsers, currentUser.id, users]);

  const handleClick = () => {
    if (!users.includes(currentUser.id)) {
      db.doc(`channels/${id}`).update({ users: [...users, currentUser.id] });
    }
    dispatch(setChannel(channel));
    history.push(`${location.pathname}/${channel.name}`);
  };

  return (
    <div>
      <MenuItem
        variant="contained"
        onClick={() => toggleOpen(id)}
        className={classes.item}
      >
        {name}
      </MenuItem>
      {open === id && (
        <Card className={smallQuery ? classes.cardMobile : classes.card}>
          <CardContent className={classes.card__content}>
            <Typography as="h4" variant="h4" className={classes.header}>
              Location: <span style={{ fontWeight: 400 }}>{name}</span>
            </Typography>
            {!bigQuery ? (
              <Box className={classes.main}>
                <Box
                  className={classes.main__block}
                  style={{ flex: "1 1 50%" }}
                >
                  <Stats channelId={id} />
                  <Button
                    size="small"
                    onClick={handleClick}
                    className={classes.main__btnBlock}
                  >
                    Go to channel
                  </Button>
                </Box>
                <Box
                  className={classes.main__block}
                  style={{ flex: "1 1 50%", overflowY: "scroll" }}
                >
                  <Users channelUsers={channelUsers} />
                </Box>
              </Box>
            ) : (
              <Box className={classes.main}>
                <Box
                  className={classes.main__block}
                  style={{
                    flex: "1 1 100%",
                    overflowY: "scroll",
                    height: "70%",
                  }}
                >
                  <Users channelUsers={channelUsers} />
                </Box>
                <Button
                  size="small"
                  onClick={handleClick}
                  className={classes.main__btnBlock}
                  style={{ marginTop: "1rem" }}
                >
                  Go to channel
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Channel;
