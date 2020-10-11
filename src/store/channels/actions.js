import { USE_CHANNELS, USE_CHANNEL } from "./types";

export const getChannelsFromSnap = (snap) => {
  return (dispatch) => {
    const channels = snap.docs.map((doc) => ({
      name: doc.data().name,
      users: doc.data().users || [],
      id: doc.id,
    }));
    dispatch(useChannels(channels));
  };
};

export const setChannel = (channel) => ({
  type: USE_CHANNEL,
  payload: channel,
});

const useChannels = (channels) => ({
  type: USE_CHANNELS,
  payload: channels,
});
