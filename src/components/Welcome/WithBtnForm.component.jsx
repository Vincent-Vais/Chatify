import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Form from "../Form";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  userBtn: {
    flex: "2 1 35%",
    fontSize: "2rem",
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.ContrastText,
    "&.MuiButton-contained:hover": {
      backgroundColor: `${theme.palette.info.light}`,
    },
  },
  mobileBtn: {
    marginBottom: "2rem",
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

  const smallQuery = useMediaQuery("(max-width:700px)");

  return (
    <React.Fragment>
      {username && (
        <Button
          variant="contained"
          onClick={goToChannels}
          type="button"
          className={smallQuery ? classes.mobileBtn : classes.userBtn}
        >
          Continue as {username}
        </Button>
      )}
      <Form {...otherProps} />
    </React.Fragment>
  );
};

export default WithBtnForm;
