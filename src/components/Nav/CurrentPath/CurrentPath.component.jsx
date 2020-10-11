import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import useStyles from "./CurrentPath.styles";

const CurrentPath = () => {
  const location = useLocation();
  const history = useHistory();
  const paths = location.pathname.split("/");

  const handleClick = (path) => {
    let newPath = "";
    let i;
    for (i = 0; i < paths.length; i += 1) {
      console.log(paths[i]);
      if (paths[i] === path) break;
      if (paths[i]) newPath += `/${paths[i]}`;
    }
    newPath += `/${paths[i]}`;
    history.push(newPath);
  };

  const classes = useStyles();

  return (
    <div className={classes.currentPath}>
      <Breadcrumbs className={classes.paths} aria-label="breadcrumb">
        {paths.map((path, i) => {
          return i < paths.length - 1 ? (
            <Link
              className={classes.link}
              key={i}
              onClick={() => handleClick(path)}
            >
              {path}
            </Link>
          ) : (
            <Typography key={i}>{path}</Typography>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default CurrentPath;
