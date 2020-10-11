import { combineReducers } from "redux";
import user from "./user";
import channels from "./channels";
import theme from "./theme";

export default combineReducers({ user, channels, theme });
