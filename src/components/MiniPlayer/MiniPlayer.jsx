import React, { useState } from "react";
import "./miniPlayer.scss";
import { Wave, PlayList } from "../";
import { tracks } from "../../bd";

function MiniPlayer() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
  // const [state, dispatch] = useReducer(musicReducer, initialState);
  // const [list, setList] = useState(tracks);

  // const handleList = () => {
  //   setList(!list);
  // };

  return (
    <div className="mini-player">
      <Wave url={selectedTrack.url} />
      <div
        className="music-list"
        // onClick={() => handleList}
      >
        <button>music list</button>
        <div className="music-list__inner">
          <PlayList
            tracks={selectedTrack}
            selectedTrack={selectedTrack}
            setSelectedTrack={setSelectedTrack}
          />
        </div>
      </div>

      <br />
    </div>
  );
}

export default MiniPlayer;
