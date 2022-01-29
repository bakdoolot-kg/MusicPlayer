import React, {useState} from "react";
import "./home.scss";
import {Wave, PlayList, CoverMusic} from "../../components";
import {tracks} from "../../bd";

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
                    <Wave url={selectedTrack.url}/>
                </div>
                <div className="home__wrapper-second">
                    <div className="music-list">
                        <button >music list</button>
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
