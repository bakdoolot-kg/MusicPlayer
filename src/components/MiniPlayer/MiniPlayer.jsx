import React, { useState } from "react";
import "./miniPlayer.scss";
import { Wave, PlayList, CoverMusic } from "../";
// import Wave from "../Wave/Wave";
// import PlayList from "../Playlist/PlayList";
import { tracks } from "../../bd";
// import CoverMusic from "../CoverMusic/CoverMusic";

// const url = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3";

// const tracks = [
//     {
//         id: 0,
//         title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
//         url:
//             "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
//     },
//     {
//         id: 1,
//         title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
//         url:
//             "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3"
//     }
// ];

export default function MiniPlayer() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  return (
    <div className="mini-player">
      <CoverMusic />
      <Wave url={selectedTrack.url} />
      <PlayList
        tracks={tracks}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
      <br />
    </div>
  );
}
