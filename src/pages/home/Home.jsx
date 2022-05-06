import React, { useState } from "react";
import axios from "axios";
import { Wave, PlayList, CoverMusic } from "../../components";
import { tracks } from "../../bd";
import "./home.scss";

const Home = () => {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__wrapper-first">
          <CoverMusic
            tracks={tracks}
            selectedTrack={selectedTrack}
            setSelectedTrack={setSelectedTrack}
          />
          <Wave url={selectedTrack.url} />
        </div>
        <div className="home__wrapper-second">
          <div className="music-list">
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
