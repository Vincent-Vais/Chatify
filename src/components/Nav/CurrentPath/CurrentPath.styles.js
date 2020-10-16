import { makeStyles } from "@material-ui/core/styles";
import { convertHexToRgba } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  paths: {
    color: theme.palette.secondary.contrastText,
  },
  link: {
    color: convertHexToRgba(theme.palette.secondary.contrastText, 0.6),
    cursor: "pointer",
  },
  currentPath: {
    flex: "0 0 25%",
    justifyContent: "center",
    paddingLeft: "5vw",
  },
  currentPathMobile: {
    flex: "0 0 50%",
    justifyContent: "flex-start",
    paddingLeft: "5vw",
  },
}));

export default useStyles;
