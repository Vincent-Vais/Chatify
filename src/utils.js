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

// const NUM_USERS = 10;
// let channels = [
//   "USA",
//   "China",
//   "Australia",
//   "Russia",
//   "France",
//   "Italy",
//   "Japan",
//   "New Zeland",
//   "Spain",
//   "Germany",
// ];

// export const seedDB = async (db, firebase) => {
//   let users = [];
//   for (let i = 0; i < NUM_USERS; i++) {
//     try {
//       const name = await getRandomName();
//       const user = { name, online: false };
//       const snap = await db.collection("users").add(user);
//       users.push({ [snap.id]: { ...user, id: snap.id } });
//     } catch (e) {
//       throw new Error(e);
//     }
//   }
//   for (let channel of channels) {
//     const channelUsers = getRandomUsers(users);
//     const channelDoc = {
//       name: channel,
//       users: channelUsers.map((user) => {
//         const [userObj] = Object.values(user);
//         return userObj.id;
//       }),
//     };
//     const snap = await db.collection("channels").add(channelDoc);
//     const NUM_MESSAGES = Math.floor(Math.random() * 10);
//     for (let i = 0; i < NUM_MESSAGES; i++) {
//       const mesResp = await fetch(
//         `https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1`
//       );
//       const arr = await mesResp.json();
//       const messages = [];
//       for (let item of arr) {
//         const splittedItem = item.split(" ");
//         let i = 0;
//         while (i < splittedItem.length) {
//           const j = Math.floor(Math.random() * 3) + 1;
//           messages.push(
//             splittedItem
//               .slice(i, i + j)
//               .join(" ")
//               .replace(/\.|,/g, "")
//           );
//           i += j;
//         }
//       }
//       const userObj = channelUsers[random(channelUsers)];
//       const [user] = Object.values(userObj);
//       const username = user.name;
//       for (let message of messages) {
//         console.log(snap.id);
//         await db.collection(`channels/${snap.id}/messages`).add({
//           text: message,
//           username,
//           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//         });
//       }
//     }
//   }
//   return users;
// };

// const getRandomName = async () => {
//   try {
//     const res = await fetch("https://randomuser.me/api/");
//     const data = await res.json();
//     return data.results[0].login.username;
//   } catch (e) {
//     throw new Error(e);
//   }
// };

// const getRandomUsers = (arr) => {
//   const users = [];
//   const len = random(arr);
//   for (let i = 0; i <= len; i++) {
//     users.push(arr[random(arr)]);
//   }
//   return users;
// };

// const random = (arr) => Math.floor(Math.random() * arr.length);
