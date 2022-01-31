import React, { useState } from "react";
import { Wave, PlayList } from "../../components";
import { tracks } from "../../bd";

const Home = () => {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__wrapper-first">player</div>
        <div className="home__wrapper-second">
          text, background, video, image
          <Wave url={selectedTrack.url} />
          <div className="music-list">
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
