import React from "react";
import { useSelector } from "react-redux";
import Post from "./post/Post";

import useStyles from "./styles";

const Posts = () => {
  // eslint-disable-next-line
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <React.Fragment>
      <Post />
      <Post />
    </React.Fragment>
  );
};

export default Posts;
