import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { selectUser } from "../store/user/selectors";

const WithUsername = ({ children }) => {
  const user = useSelector(selectUser, shallowEqual);
  if (!user) return <Redirect to="/" />;
  return children;
};

export default WithUsername;
