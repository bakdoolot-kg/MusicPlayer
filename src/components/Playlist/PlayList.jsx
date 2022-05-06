import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat";
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getDatabase, ref } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import { MusicContext } from "../../index";

import { Loader } from "../index";
import {
  Button,
  Container,
  styled,
  Box,
  TextField,
  IconButton,
} from "@mui/material";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";

const InputUpload = styled("input")({
  display: "none",
});

const PlayList = ({ tracks, selectedTrack, setSelectedTrack }) => {
  const { auth, firestore, storage_bucket } = useContext(MusicContext);
  const [user] = useAuthState(auth);
  const [artist, setArtist] = useState("");
  const [nameMusic, setNameMusic] = useState("");
  const [urlMusic, setUrlMusic] = useState();
  const [progress, setProgress] = useState(0);
  const [textInputErrorMessage, setTextInputErrorMessage] = useState();
  const [musics, loading] = useCollectionData(
    firestore.collection("musics").orderBy("createdAt")
  );

  const fileUploadHandler = (e) => {
    const db = getDatabase();
    e.preventDefault();
    let file = e.target.files[0];

    let musicRef = firebase.storage().ref("musics/" + file.name);

    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage_bucket, `/musics/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          // setUrlMusic(url);
        });
      }
    );
  };

  const addMusic = () => {
    if (nameMusic.length > 3) {
      firestore.collection("musics").add({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        nameMusic: nameMusic,
        artist: artist,
        urlMusic: urlMusic || "",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setNameMusic("");
      setArtist("");
    } else {
      console.log("Название пусто");
    }
  };

  // READ DOCS FROM FIRESTORE

  const nameMusicHandler = (e) => {
    setNameMusic(e.target.value);

    if (e.target.value) {
      setTextInputErrorMessage("");
      setNameMusic(e.target.value);
    } else {
      setTextInputErrorMessage("Название обязателен");
    }
  };
  const artistHandler = (e) => {
    setArtist(e.target.value);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container className="playlist">
      {tracks.map((track) => (
        <div
          key={track.id}
          className={
            track.id === selectedTrack.id
              ? "playlist-item selected"
              : "playlist-item"
          }
          onClick={() => setSelectedTrack(track)}
        >
          {track.artist}
          <span> - </span>
          {track.title}
        </div>
      ))}

      {/* {musics.map((music, idx) => (
        <div
          key={music.idx + 1}
          className={
            music.idx === selectedTrack.id
              ? "playlist-item selected"
              : "playlist-item"
          }
          // onClick={() => setSelectedTrack(music)}
        >
          {music.nameMusic}
          <span> - </span>
          {music.artist || "Неизвестно"}
        </div>
      ))} */}

      {/* <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Название"
          size="small"
          required
          onChange={nameMusicHandler}
          // helperText={textInputErrorMessage}
          // error={textInputErrorMessage}
          value={nameMusic}
        />
        <TextField
          id="outlined-name"
          label="Автор"
          size="small"
          value={artist}
          onChange={artistHandler}
        />
      </Box> */}

      {/* <label htmlFor="contained-button-file">
        <InputUpload
          accept="audio/*"
          id="contained-button-file"
          type="file"
          onChange={(e) => fileUploadHandler(e)}
        />

        <Button variant="contained" component="span">
          Добавить
        </Button>
      </label> */}

      {/* <p>Загружено {progress}</p> */}
    </Container>
  );
};

//TODO: Запасной вариант навсякий случай
// const PlayList = ({ tracks, selectedTrack, setSelectedTrack }) => {
//   return (
//     <div className="playlist">
//       {tracks.map((track) => (
//         <div
//           key={track.id}
//           className={
//             track.id === selectedTrack.id
//               ? "playlist-item selected"
//               : "playlist-item"
//           }
//           onClick={() => setSelectedTrack(track)}
//         >
//           {track.artist} <span> - </span>
//           {track.title}
//         </div>
//       ))}
//       {/* {props.testState} */}
//     </div>
//   );
// };

export default PlayList;
