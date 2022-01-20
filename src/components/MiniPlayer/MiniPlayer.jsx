import React, { useState } from "react";
import "./miniPlayer.scss";
import { Wave, PlayList, CoverMusic } from "../";
import { tracks } from "../../bd";

export default function MiniPlayer() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  return (
    <div className="mini-player">
      <Wave url={selectedTrack.url} />

      <div className="mini-player__playlist">
        <button>music list</button>

        <PlayList
          tracks={tracks}
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
        />
      </div>

      <br />
    </div>
  );
}
