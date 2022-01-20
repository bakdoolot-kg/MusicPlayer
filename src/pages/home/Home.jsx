import React, { useState, useReducer } from "react";
import { MiniPlayer, Wave, PlayList } from "../../components";
import { tracks } from "../../bd";
import { musicReducer } from "../../redux/musicReducer";
import { initialState } from "../../redux/musicReducer";

const Home = () => {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
  const [state, dispatch] = useReducer(musicReducer, initialState);

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__wrapper-first">player</div>
        <div className="home__wrapper-second">
          text, background, video, image
          <Wave url={initialState.currentMusic} playing={state.play} />
          <div
            className="music-list"
            // onClick={() => handleList}
          >
            <button>music list</button>
            <div className="music-list__inner">
              <PlayList
                tracks={tracks}
                selectedTrack={selectedTrack}
                setSelectedTrack={setSelectedTrack}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
