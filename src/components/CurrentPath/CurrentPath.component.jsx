import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import "./CurrentPath.styles.css";
import { LinkPath, Paths } from "./StyledItems.components";

const CurrentPath = () => {
  const location = useLocation();
  const history = useHistory();
  const paths = location.pathname.split("/");

  const handleClick = (path) => {
    let newPath = "";
    let i;
    console.log(path);
    console.log(paths);
    for (i = 0; i < paths.length; i += 1) {
      console.log(paths[i]);
      if (paths[i] === path) break;
      if (paths[i]) newPath += `/${paths[i]}`;
    }
    newPath += `/${paths[i]}`;
    console.log(newPath);
    history.push(newPath);
  };
  return (
    <div className="current-path">
      <Paths aria-label="breadcrumb">
        {paths.map((path, i) => {
          return i < paths.length - 1 ? (
            <LinkPath key={i} onClick={() => handleClick(path)}>
              {path}
            </LinkPath>
          ) : (
            <Typography key={i}>{path}</Typography>
          );
        })}
      </Paths>
    </div>
  );
};

export default CurrentPath;
