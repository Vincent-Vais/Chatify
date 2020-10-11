import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  canvas: {
    marginTop: "10vh",
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    flex: "2 1 90%",
    overflowY: "scroll",
  },
  messages: {
    flex: "1 1 90%",
  },
  form: {
    flex: "1 1 10%",
    order: "1",
    padding: "2rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
