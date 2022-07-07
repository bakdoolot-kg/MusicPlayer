import React, { useContext, useEffect, useState } from 'react'
import firebase from "firebase/compat";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button, TextField, InputAdornment, IconButton, Typography, Snackbar, Alert } from '@mui/material';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CustomModal from '../CustomModal/CustomModal'
import { MusicContext } from '../..';

const styleForm = {
  marginBottom: "14px",
};

export const ModalRegister = ({ openModal, setOpenModal }) => {
  const { authWithPass } = useContext(MusicContext);
  const [registered, setRegistered] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [openSnack, setOpenSnack] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth()
  const user = auth.currentUser

  // Change datas
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  // Open modal
  const handleCloseModal = () => setOpenModal(false);
  const handleRegistered = async () => setRegistered(!registered)

  // Show pass
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  // Other handles
  const handleCloseSnackbar = (event, reason) => {
    handleRegistered()
    if (reason === 'clickaway') return
    setOpenSnack(false);
  };


  // SignIn and Register
  const registerWithEmail = async () => {
    // Check email
    firebase.auth().fetchProvidersForEmail(email)
      .then(providers => {
        if (providers.length === 0) return
        else {
          console.log("Такая учетная запись уже существует!")
          setOpenSnack(true)
        }
      })

    createUserWithEmailAndPassword(authWithPass, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signInWithEmail = async () => {

    // Check email
    firebase.auth().fetchProvidersForEmail(email)
      .then(providers => {
        if (providers.length === 0) {
          setOpenSnack(true)
        }
      })

    signInWithEmailAndPassword(authWithPass, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!registered) registerWithEmail()
    else signInWithEmail()
  }

  // useEffect(() => {
  //   if (user) {
  //     setRegistered(true)
  //   } else {
  //     setRegistered(false)
  //   }
  // })

  return (
    <div>
      <CustomModal openModal={openModal} closeModal={setOpenModal}>
        <Typography variant="h6" gutterBottom component="h4">
          {!registered ? "Пройдите регистрацию" : "Войдите в учетную запись"}
        </Typography>

        <div style={styleForm} className="wrapper__form">
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              required
              value={email}
              error={email === ""}
              helperText={email === "" ? "Почта обязательна!" : " "}
              onChange={handleChangeEmail}
              id="outlined-required"
              label="Почта или логин"
              sx={{ mb: 1, mt: 1 }}
            />
            <TextField
              fullWidth
              required
              value={password}
              error={!password}
              helperText={password === "" ? "Пароль обязателен!" : " "}
              onChange={handleChangePassword}
              id="outlined-password-input"
              label="Пароль"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 1 }}
            />

            <Snackbar open={openSnack} autoHideDuration={6000} >
              <Alert severity="error">
                {!registered ? "Такая учетная запись уже существует!" : "Такой учетной записи не существует!"}
                <Button size="small" onClick={handleCloseSnackbar}>
                  {!registered ? "Войти?" : "Зарегистрироваться?"}
                </Button>
              </Alert>
            </Snackbar>

            <Button variant="contained" type="submit" onClick={!registered ? registerWithEmail : signInWithEmail}>
              {!registered ? "Регистрация" : "Войти"}
            </Button>
          </form>
        </div>

        <span>
          {!registered ? "Уже есть учетная запись?" : "Нет учетной записи?"} <Button onClick={handleRegistered}>{!registered ? "Войти" : "Регистрация"}</Button>
        </span>
        <Button onClick={handleCloseModal}>Закрыть</Button>
      </CustomModal>
    </div>
  )
}
