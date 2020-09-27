import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  heading: {
    marginBottom: "5rem",
    textAlign: "center",
  },
  form: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  control: {
    flex: "1 2 80%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  inputText: {
    flex: "1 2 65%",
    marginRight: "1rem",
    borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
    fontSize: "2rem",
  },
  inputBtn: {
    flex: "1 1 35%",
    fontSize: "2rem",
  },
  userBtn: {
    flex: "1 1 35%",
    marginRight: "10rem",
    fontSize: "2rem",
  },
});

export default useStyles;
