import { makeStyles } from "@material-ui/core/styles";
import { convertHexToRgba } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  control: {
    flexDirection: "row",
    flex: "1 1 95%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    flex: "1 2 80%",
    fontSize: "2rem",
    marginRight: "2rem",
    borderBottom: `1px solid ${theme.palette.info.light}`,
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
  btn: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.ContrastText,
    fontWeight: 700,
    fontSize: "2.25rem",
    flex: "1 1 15%",
  },
  label: {
    "&.MuiFormLabel-root.Mui-focused": {
      color: "rgba(0, 0, 0, 0.54)",
    },
  },
}));

export default useStyles;
