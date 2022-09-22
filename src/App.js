import './App.css';
import React, { useState } from "react";
import {BrowserRouter as Router, Route ,Routes ,Link} from "react-router-dom"
import { Container, AppBar, Typography, Grow, Grid,Icon } from "@material-ui/core";

import Posts from "./COMPONENTS/POSTS/Posts";
import Form  from  './COMPONENTS/Form/Form.js';
import useStyle from "./style";


function App() {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyle()


  return (
    <div className="App">
      <Router>
        <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Link to ="/newTask">
              <Typography
                className={classes.newTask}
                variant="h6"
                align="center"
              >
                NewTask
              </Typography>
            </Link>

            <Typography className={classes.heading} variant="h2" align="center">
              TASK MANAGER
            </Typography>
          </AppBar>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Posts setCurrentId={setCurrentId} />
                </>
              }
            />
            <Route
              path="/newTask"
              element={
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              }
            />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
