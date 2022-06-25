import React from "react";
import { AppBar, Typography } from "@material-ui/core";
// import { Link } from "react-router-dom";

import memories from "../../images/memories.png";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary" className={classes.appBar}>
      <div className={classes.brandContainer}>
        <Typography
          variant="h2"
          align="center"
          className={classes.heading}
        //   component={Link}
          to="/"
        >
          Memories
        </Typography>
        <img
          src={memories ? memories : "https://i.imgur.com/XqQXQ.png"}
          alt="memories"
          height={60}
          className={classes.image}
        />
      </div>
    </AppBar>
  );
};

export default Navbar;
