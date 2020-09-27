import React from "react";
import { Redirect } from "react-router-dom";

const WithUsername = ({ WrappedComponent, ...otherProps }) => {
  const { username } = otherProps;
  if (!username) return <Redirect to="/" />;
  return <WrappedComponent {...otherProps} />;
};

export default WithUsername;
