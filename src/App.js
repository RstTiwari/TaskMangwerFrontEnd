import './App.css';
import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./COMPONENTS/POSTS/Posts";
import Form  from  './COMPONENTS/Form/Form.js';
import useStyle from "./style";


function App() {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyle()
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          NOTEPAD
        </Typography>
      </AppBar>
      <Form currentId={currentId} setCurrentId={setCurrentId} />

      {/* <Grow>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Post setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow> */}
    </Container>
  );
}

export default App;
