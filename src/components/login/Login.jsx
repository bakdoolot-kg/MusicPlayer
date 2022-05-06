import React, {useContext} from "react";
import {Container, Grid, Box, Button} from "@mui/material";
import {MusicContext} from "../../index";
import firebase from "firebase/compat";

const Login = () => {
  const {auth} = useContext(MusicContext.Consumer)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)
    console.log(user)
  }

  return (
    <Container>
      <Grid
        container
        style={{height: window.innerHeight - 50}}
        alignItems={'center'}
        justifyContent='center'
      >
        <Grid
          style={{width: 400, background: '#3d93cc'}}
          container
          alignItems='center'
          justifyContent='center'
          direction='column'
        >
          <Box p={5}>
            <Button onClick={login} variant='contained'>Войти с помошью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
};

export default Login;
