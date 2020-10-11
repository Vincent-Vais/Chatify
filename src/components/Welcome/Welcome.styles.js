import { makeStyles } from "@material-ui/core/styles";
import { convertHexToRgba } from "../../utils";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: convertHexToRgba(theme.palette.secondary.main, 0.9, 0.1),
    maxWidth: "80vw",
  },
  heading: {
    marginBottom: "5rem",
    textAlign: "center",
    color: theme.palette.secondary.contrastText,
  },
}));

export default useStyles;
