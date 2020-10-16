import { makeStyles } from "@material-ui/core/styles";
import { convertHexToRgba } from "../../../../utils";

const useStyles = makeStyles((theme) => ({
  main__dashboard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  dashboard__item: {
    color: convertHexToRgba(theme.palette.secondary.contrastText, 0.65),
    fontWeight: 400,
    fontSize: "2.5rem",
    marginBottom: "2rem",
  },
}));

export default useStyles;
