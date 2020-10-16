import { makeStyles } from "@material-ui/core/styles";
import { convertHexToRgba } from "../../utils";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: convertHexToRgba(theme.palette.secondary.main, 0.9, 0.1),
      maxWidth: "80vw",
    },
    containerMobile: {
      backgroundColor: convertHexToRgba(theme.palette.secondary.main, 0.9, 0.1),
      maxWidth: "95vw",
    },
    heading: {
      marginBottom: "5rem",
      textAlign: "center",
      color: theme.palette.secondary.contrastText,
    },
    form: {
      flex: "1 2 65%",
    },
    mobileForm: {
      width: "100%",
    },
    verticalContainer: {
      flexDirection: "column",
    },
  };
});

export default useStyles;
