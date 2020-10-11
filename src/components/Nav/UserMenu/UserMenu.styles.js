import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 1 25%",
  },
  menu__btn: {
    color: theme.palette.info.ContrastText,
    backgroundColor: theme.palette.info.main,
    fontWeight: 700,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.info.dark,
    },
  },
  menu__popup: {
    border: `1px solid ${theme.palette.secondary.dark}`,
    transform: "translateX(-1rem)",
  },
  menu__item: {
    "&:active": {
      backgroundColor: theme.palette.info.light,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.info.ContrastText,
      },
    },
  },
  popper: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(164, 176, 190, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  container: {
    width: "70vw",
    minHeight: "70vh",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  grid: {
    width: "80%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-between",
  },
  item: {
    flex: "1 1 45%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "3rem",
    marginLeft: "2rem",
  },
  info: {
    marginBottom: "2rem",
    fontWeight: 300,
    fontSize: "2rem",
    paddingBottom: "1rem",
    borderBottom: "2.5px solid black",
    width: "100%",
  },
  btn: {
    width: "100%",
    fontSize: "2rem",
    color: `${theme.palette.success.contrastText}`,
    "&.MuiButton-root:hover": {
      backgroundColor: `${theme.palette.success.light}`,
    },
  },
  close: {
    position: "absolute",
    top: "5%",
    right: "2.5%",
    transform: "translate(-50%, -50%)",
  },
  icon: {
    fontSize: "4rem",
    cursor: "pointer",
  },
}));

export default useStyles;
