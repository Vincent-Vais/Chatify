import { makeStyles } from "@material-ui/core/styles";
import { convertHexToRgba } from "../../utils";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: convertHexToRgba(theme.palette.secondary.main, 0.9, 0.1),
    width: "60vw",
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "0 2rem",
  },
  containerMobile: {
    backgroundColor: convertHexToRgba(theme.palette.secondary.main, 0.9, 0.1),
    width: "95vw",
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "0 2rem",
  },
  inputText: {
    flex: "1 2 100%",
    marginRight: "1rem",
    padding: "0.5rem",
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
  form: {
    width: "100%",
    marginBottom: "2rem",
  },
  list: {
    width: "25%",
    height: "100%",
    marginBottom: "2rem",
  },
  label: {
    "&.MuiFormLabel-root.Mui-focused": {
      color: "rgba(0, 0, 0, 0.54)",
    },
  },
}));

export default useStyles;
