import React, { useEffect } from "react";

import { Grid, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../action/action";

import Post from "../POSTS/POST/Post";
import useStyles from "./style";

const Posts = ({ setCurrentId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  });

  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
