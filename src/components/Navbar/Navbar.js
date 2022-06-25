import React from "react";
import { AppBar, Toolbar, Typography, Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import memories from "../../images/memories.png";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  const user = null;

  return (
    <AppBar position="static" color="primary" className={classes.appBar}>
      <div className={classes.brandContainer}>
        <Typography
          variant="h2"
          align="center"
          className={classes.heading}
          component={Link}
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
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            />
            <Typography className={classes.username}>
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            variant="contained"
            className={classes.logout}
            component={Link}
            to="/auth"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
