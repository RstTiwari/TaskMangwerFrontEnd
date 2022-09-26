import { Container ,Grid ,TextField,Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useStyle  from "../../style";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const classes = useStyle()
    const navigate = useNavigate()

    const [login , setLogin]  = useState({
        email:"",
        passwrod:""
    })

    const handleLogin = (e) =>{
         e.preventDefault()
         setLogin(login)
         navigate("/")
        

    }
  return (
    <div>
      <Container>
        <form
          autoComplete="off"
          novalidateclassname={`${classes.root} ${classes.form}`}
          onSubmit={handleLogin}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <TextField
              type="text"
              name="email"
              label="Email"
              variant="outlined"
              className={classes.text}
              fullWidth
              defaultValue={login.email}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
            />
            <TextField
              type="text"
              name="passwrod"
              label="Password"
              variant="outlined"
              className={classes.text}
              fullWidth
              defaultValue={login.passwrod}
              onChange={(e) => setLogin({ ...login, passwrod: e.target.value })}
            />
            <Button
              type="submit"
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              Login
            </Button>
            <Typography>
              new User{" "}
              <Link to="/signup">
                <b>Register Here</b>
              </Link>
            </Typography>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

export default Login



