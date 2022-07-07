import React, {useContext} from "react";
import firebase from "firebase/compat";
import { MusicContext } from "../..";
import { Link } from "react-router-dom";

const Guest = () => {
  const {auth} = useContext(MusicContext)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)
    console.log(user)
  }

  return (
    <div className="guest-page">
      <h2>Guest page</h2>

      <Link to='login'>
        <button>Войти</button>
      </Link>
    </div>
  );
};

export default Guest;
