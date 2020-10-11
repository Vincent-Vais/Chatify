import { USE_USER, USE_USERS } from "./types";
import { changeOnline, addUser, clearUser } from "../../firebase/utils";

export const getUser = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return dispatch(useUser(null));
    changeOnline(user.id, true)
      .then(() => dispatch(useUser(user)))
      .catch((err) => console.log(err));
  };
};

export const getUsersFromSnap = (snap) => {
  return (dispatch) => {
    const users = snap.docs.map((user) => ({ ...user.data(), id: user.id }));
    dispatch(useUsers(users));
  };
};

export const setUser = (name, redirect) => {
  return (dispatch) => {
    addUser(name)
      .then((id) => {
        const user = { name, id, online: true };
        clearUser();
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(useUser(user));
        if (redirect) redirect();
      })
      .catch((err) => console.log(err));
  };
};

const useUser = (user) => ({
  type: USE_USER,
  payload: user,
});

const useUsers = (users) => ({
  type: USE_USERS,
  payload: users,
});
