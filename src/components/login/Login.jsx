import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Container, Grid, Box, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { MusicContext } from "../../index";
import { ModalRegister } from "./ModalRegister";

const Login = () => {
  let { auth } = useContext(MusicContext);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);

  const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    // const { user } = await auth.signInWithPopup(provider);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
      });
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justifyContent="center"
      >
        <Grid
          style={{ width: 400, background: "#F6FBF4", borderRadius: "10px" }}
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Box
            p={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              onClick={handleOpenModal}
              variant="contained"
              style={{ marginBottom: "10px" }}
            >
              <span style={{ marginRight: "5px" }}>Войти с помощью</span>{" "}
              <MailOutlineIcon />
            </Button>
            <Button onClick={loginWithGoogle} variant="contained">
              <span style={{ marginRight: "5px" }}>Войти с помощью</span>
              <GoogleIcon />
            </Button>
          </Box>
          <Link to="/">
            <Button variant="text" color="warning">
              Назад
            </Button>
          </Link>
        </Grid>
      </Grid>

      <ModalRegister openModal={openModal} setOpenModal={setOpenModal} />
    </Container>
  );
};

export default Login;
