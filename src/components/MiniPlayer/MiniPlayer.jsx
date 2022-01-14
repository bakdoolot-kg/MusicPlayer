import React, { useState } from "react";
import "./miniPlayer.scss";
import { Wave, PlayList, CoverMusic } from "../";
import { tracks } from "../../bd";

export default function MiniPlayer() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
  const [list, setList] = useState(tracks);

  const handleList = () => {
    setList(!list);
  };

  return (
    <div className="mini-player">
      <Wave url={selectedTrack.url} />
      <button
        className={list ? "playlist active" : "playlist"}
        onClick={() => handleList}
      >
        music list
      </button>
      <PlayList
        tracks={tracks}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
        testState="asdasd"
      />
      <br />
    </div>
  );
}
