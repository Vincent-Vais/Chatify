import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  message: {
    padding: "10px",
    margin: "10px",
    width: "fit-content",
    "&.left": {
      marginRight: "auto",
    },
    "&.right": {
      marginLeft: "auto",
    },
  },
}));

export default useStyles;
