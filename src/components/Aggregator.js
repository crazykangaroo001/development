import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    width: "85%",
    marginTop: "8vh",
    marginBottom: "2vh",
  },
  border: {
    borderBottom: "3px solid lightgray",
    width: "100%",
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    fontWeight: 700,
    fontSize: 30,
    color: "black",
    margin: 0,
    display: "flex",
    width: "40%",
    justifyContent: "center",
  },
}));

const Aggregator = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.border}></div>
      <span className={classes.content}>{children}</span>
      <div className={classes.border}></div>
    </div>
  );
};
export default Aggregator;
