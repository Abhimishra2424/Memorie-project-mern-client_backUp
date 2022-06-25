import React, { useEffect, useState } from "react";

import { Container, Grow, Grid } from "@material-ui/core";

import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

import { useDispatch } from "react-redux";

import useStyles from "./styles";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Grow in>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          className={classes.mainContainer}
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default App;
