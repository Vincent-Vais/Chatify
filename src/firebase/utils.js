import { db } from "./index";

// USER
export const changeOnline = (id, status) => {
  console.log(status);
  return new Promise((resolve, reject) => {
    db.doc(`users/${id}`)
      .update({ online: status })
      .then(() => resolve(true))
      .catch(() => reject("Unaible to update online status"));
  });
};

export const addUser = (name) => {
  return new Promise((resolve, reject) => {
    db.collection("users")
      .get()
      .then((snap) => {
        for (let doc of snap.docs) {
          if (doc.data().name === name)
            throw new Error("Name is already in use");
        }
        return db.collection("users").add({ name, online: true });
      })
      .then((ref) => resolve(ref.id))
      .catch((err) => reject(err));
  });
};

export const clearUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return;
  changeOnline(user.id, false);
};
// CHANNELS
