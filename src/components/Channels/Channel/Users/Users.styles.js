import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    fontSize: "2rem",
    fontWeight: 300,
    padding: "1rem 2.25rem",
    color: theme.palette.primary.ContrastText,
  },
}));

export default useStyles;
