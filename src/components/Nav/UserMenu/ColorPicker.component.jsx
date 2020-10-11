import { Paper, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import { TwitterPicker } from "react-color";
import useStyles from "./UserMenu.styles";
import { selectTheme } from "../../../store/theme/selectors";
import { setCurrentTheme } from "../../../store/theme/actions";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

const ColorPicker = ({ closePopper }) => {
  const currentTheme = useSelector(selectTheme, shallowEqual);
  const dispatch = useDispatch();

  const [theme, setTheme] = useState({ ...currentTheme });

  const types = [
    {
      type: "primary",
      text: "Background",
    },
    {
      type: "secondary",
      text: "Background-alt",
    },
    {
      type: "info",
      text: "Primary",
    },
    {
      type: "success",
      text: "Secondary",
    },
  ];

  const handleChangeComplete = (color, type) => {
    setTheme({
      ...theme,
      [type]: { main: color },
    });
  };

  const handleClick = () => {
    localStorage.setItem("theme", JSON.stringify(theme));
    dispatch(setCurrentTheme(theme));
    closePopper();
  };

  const classes = useStyles();

  return (
    <div className={classes.popper}>
      <Paper className={classes.container}>
        <div className={classes.close} onClick={closePopper}>
          <CloseIcon className={classes.icon} />
        </div>
        <div className={classes.grid}>
          {types.map(({ type, text }, idx) => (
            <div key={idx} className={classes.item}>
              <h2
                className={classes.info}
                style={{ borderBottomColor: `${theme[type].main}` }}
              >
                {text}
              </h2>
              <TwitterPicker
                color={theme[type].main}
                onChangeComplete={(color) =>
                  handleChangeComplete(color.hex, type)
                }
              />
            </div>
          ))}
        </div>
        <Button className={classes.btn} onClick={handleClick}>
          Done
        </Button>
      </Paper>
    </div>
  );
};

export default ColorPicker;
