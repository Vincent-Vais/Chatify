import { makeStyles } from "@material-ui/core/styles";
import { convertHexToRgba, getContrastText } from "../../utils";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  control: {
    flex: "1 2 80%",
    display: "flex!important",
    justifyContent: "space-between",
    alignItems: "center!important",
    flexDirection: "row!important",
  },
  inputText: {
    flex: "1 2 65%",
    marginRight: "1rem",
    borderBottom: `1px solid ${theme.palette.info.light}`,
    fontSize: "2rem",
    "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: `2px solid ${theme.palette.info.main}`,
    },
    "&.MuiInput-underline:before": {
      borderBottom: `1px solid ${theme.palette.info.light}`,
    },
    "&.MuiInput-underline:after": {
      borderBottom: `2px solid ${convertHexToRgba(
        theme.palette.secondary.main,
        0.9,
        0.1
      )}`,
    },
    color: `${theme.palette.secondary.contrastText}`,
  },
  inputBtn: {
    flex: "1 1 35%",
    fontSize: "2rem",
    backgroundColor: `${theme.palette.info.main}`,
    color: `${theme.palette.secondary.contrastText}`,
    "&.MuiButton-contained.Mui-disabled": {
      backgroundColor: `${getContrastText(theme.palette.info.light, 1)}`,
      color: `${theme.palette.primary.contrastText}`,
      opacity: 0.8,
    },
  },
  label: {
    "&.MuiFormLabel-root.Mui-focused": {
      color: "rgba(0, 0, 0, 0.54)",
    },
  },
}));

export default useStyles;
