import React, {createContext} from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import App from "./App";

import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

import "./index.scss";


const store = createStore(rootReducer);

const firebaseConfig = {
  apiKey: "AIzaSyB6Man9pG51k-gtV4_u6w8g3i1mykDh2cs",
  authDomain: "music-lib-337816.firebaseapp.com",
  databaseURL: 'https://music-lib-337816-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: "music-lib-337816",
  storageBucket: "music-lib-337816.appspot.com",
  messagingSenderId: "503740376954",
  appId: "1:503740376954:web:9d8163698e129b266c18c3",
  measurementId: "G-JTT9NP98X4"
}

firebase.initializeApp({
  apiKey: "AIzaSyB6Man9pG51k-gtV4_u6w8g3i1mykDh2cs",
  authDomain: "music-lib-337816.firebaseapp.com",
  databaseURL: 'https://music-lib-337816-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: "music-lib-337816",
  storageBucket: "music-lib-337816.appspot.com",
  messagingSenderId: "503740376954",
  appId: "1:503740376954:web:9d8163698e129b266c18c3",
  measurementId: "G-JTT9NP98X4"
})

const auth = firebase.auth()
const firestore = firebase.firestore()
const app = initializeApp(firebaseConfig)
const authWithPass = getAuth()
export const storage_bucket = getStorage(app)

export const MusicContext = createContext()

ReactDOM.render(
  <Provider store={store}>
    <MusicContext.Provider value={{
      firebase,
      auth,
      authWithPass,
      firestore,
      storage_bucket
    }}>
      <App />
    </MusicContext.Provider>
  </Provider>,
  document.getElementById("root")
);
