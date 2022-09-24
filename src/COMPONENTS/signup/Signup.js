import { Container, TextField,Grid ,Button } from '@material-ui/core'
import React from 'react'
//import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import useStyles from "../../style";
import axios  from 'axios';

const Signup = () => {
    const classes = useStyles()
    const [signUp, setSignUp] = useState({
      name: "",
      number: "",
      email: "",
      password:""
    });
 //const navigate = useNavigate();

    const handleSignup = async (e)=>{
         e.preventDefault();
         setSignUp(signUp)
         axios.post("http://localhost:5000/posts/signUp" ,signUp);

    }


  return (
    <div>
      <Container>
        <form
          autoComplete="off"
          novalidateclassname={`${classes.root} ${classes.form}`}
          onSubmit={handleSignup}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <TextField
              name="name"
              variant="outlined"
              label="Name"
              fullWidth
              defaultValue={signUp.name}
              onChange={(e) => setSignUp({ ...signUp, name: e.target.value })}
            />
            <TextField
              name="number"
              variant="outlined"
              label="Number"
              fullWidth
              defaultValue={signUp.number}
              onChange={(e) => setSignUp({ ...signUp, number: e.target.value })}
            />
            <TextField
              name="email"
              variant="outlined"
              label="Email"
              fullWidth
              defaultValue={signUp.email}
              onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
            />
            <TextField
              name="password"
              variant="outlined"
              label="Password"
              fullWidth
              defaultValue={signUp.password}
              onChange={(e) =>
                setSignUp({ ...signUp, password: e.target.value })
              }
            />
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

export default Signup
