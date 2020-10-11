import { SET_THEME } from "./types";

const INIT_STATE = {
  primary: {
    main: "#fff",
  },
  secondary: {
    main: "#f1f2f6",
  },
  info: {
    main: "#ff6b81",
  },
  success: {
    main: "#e9e9eb",
    light: "#f5f6fa",
  },
};

const getInitState = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) return INIT_STATE;
  return JSON.parse(theme);
};

const themeReducer = (state = getInitState(), action) => {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
