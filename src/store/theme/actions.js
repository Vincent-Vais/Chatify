import { SET_THEME } from "./types";

export const setCurrentTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});
