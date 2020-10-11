import { USE_USER, USE_USERS } from "./types";

const INIT_STATE = {
  currentUser: null,
  users: [],
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USE_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case USE_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
