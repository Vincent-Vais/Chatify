import { makeStyles } from "@material-ui/core/styles";
import { convertHexToRgba } from "../../utils";

const useStyles = makeStyles((theme) => ({
  nav: {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    height: "10vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0",
    background: convertHexToRgba(theme.palette.secondary.main, 0.75),
    color: theme.palette.secondary.contrastText,
    zIndex: 1,
  },
  hero: {
    flex: "1 1 50%",
    textAlign: "center",
    fontWeight: 100,
  },
  hero__colored: {
    color: theme.palette.info.main,
  },
}));

export default useStyles;
