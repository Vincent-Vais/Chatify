import { USE_CHANNELS, USE_CHANNEL } from "./types";

const INIT_STATE = {
  allChannels: [],
  currentChannel: null,
};

const channelsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USE_CHANNELS:
      return {
        ...state,
        allChannels: action.payload,
      };
    case USE_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload,
      };
    default:
      return state;
  }
};

export default channelsReducer;
