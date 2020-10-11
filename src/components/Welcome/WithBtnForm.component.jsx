import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Form from "../Form";

const useStyles = makeStyles((theme) => ({
  userBtn: {
    flex: "1 1 35%",
    marginRight: "10rem",
    fontSize: "2rem",
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.ContrastText,
    "&.MuiButton-contained:hover": {
      backgroundColor: `${theme.palette.info.light}`,
    },
  },
}));

const WithBtnForm = ({ username, goToChannels, ...otherProps }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {username && (
        <Button
          variant="contained"
          onClick={goToChannels}
          type="button"
          className={classes.userBtn}
        >
          Continue as {username}
        </Button>
      )}
      <Form {...otherProps} />
    </React.Fragment>
  );
};

export default WithBtnForm;
