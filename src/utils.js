export const convertHexToRgba = (hex, opacity = 1, amount = 0) => {
  let decChannels;
  if (hex.includes("r")) decChannels = getChannelsFromRgb(hex, amount);
  else decChannels = getDecChannels(hex, amount);
  return `rgba(${decChannels[0]}, ${decChannels[1]}, ${decChannels[2]}, ${opacity})`;
};

export const getContrastText = (hex, opacity = 0.75) => {
  let decChannels;
  if (hex.includes("r")) decChannels = getChannelsFromRgb(hex);
  else decChannels = getDecChannels(hex);
  const avg =
    decChannels.reduce((accumulator, current) => accumulator + current) /
    decChannels.length;
  return `rgba(${255 - avg}, ${255 - avg}, ${255 - avg}, ${opacity})`;
};

const getChannelsFromRgb = (rgb, amount = 0) => {
  const channels = [...rgb.matchAll(/\d{1,3}/g)];
  return channels.map((channel) => (parseInt(channel[0]) * (1 - amount)) % 255);
};

const getDecChannels = (hex, amount = 0) => {
  const hexArr = getHexArray(hex);
  if (!hexArr) return [0, 0, 0];
  const hexChannels = getColorChannels(hexArr);
  return hexChannels.map((channel) => (hexToRgb(channel) * (1 - amount)) % 255);
};

const getHexArray = (hex) => {
  let hexArr;
  hexArr = hex.replace("#", "").split("").slice(0, 6);
  if (hexArr.length !== 3 && hexArr.length !== 6) return false;
  if (hexArr.length === 3)
    hexArr = hexArr.reduce((accumulator, current) => {
      for (let i = 0; i < 2; i++) accumulator.push(current);
      return accumulator;
    }, []);
  return hexArr;
};

const getColorChannels = (arr) => {
  let colors = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      colors[i - colors.length] = [arr[i]];
    } else {
      colors[i - colors.length].push(arr[i]);
    }
  }
  return colors;
};

const hexToRgb = (hex) => parseInt(hex.join(""), 16);
