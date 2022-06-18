import React from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import memories from "./images/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="primary">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img
          src={memories ? memories : "https://i.imgur.com/XqQXQ.png"}
          alt="memories"
          height={60}
        />
      </AppBar>
      <Grow in>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default App;
