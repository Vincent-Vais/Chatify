import { makeStyles } from "@material-ui/core/styles";
import { convertHexToRgba } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  item: {
    color: theme.palette.secondary.ContrastText,
    margin: "0.5rem 0",
    "&:active": {
      backgroundColor: `${theme.palette.info.light}`,
    },
    "&:focus": {
      backgroundColor: `${theme.palette.info.light}`,
    },
    "&.MuiListItem-button:hover": {
      backgroundColor: `${theme.palette.secondary.light}`,
    },
  },
  card: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    left: 0,
    transform: "translate(40%, 0)",
    zIndex: "10",
    width: "40vw",
    height: "45vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    boxShadow: "none",
  },
  cardMobile: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    left: 0,
    transform: "translate(40%, 0)",
    zIndex: "10",
    width: "60vw",
    height: "45vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    boxShadow: "none",
  },
  card__content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 0,
  },
  header: {
    color: theme.palette.secondary.ContrastText,
    fontWeight: 300,
    height: "10%",
  },
  main: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  main__block: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: "1 1 50%",
    height: "100%",
    "&:last-child": {
      borderLeft: `2px solid ${convertHexToRgba(
        theme.palette.secondary.contrastText,
        0.65
      )}`,
    },
  },
  main__btnBlock: {
    width: "100%",
    marginTop: "auto",
    textAlign: "center",
    fontSize: "2rem",
    "&.MuiButton-root:hover": {
      backgroundColor: `${theme.palette.info.main}`,
    },
  },
}));

export default useStyles;
