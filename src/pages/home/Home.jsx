import React, {useState} from 'react';
import {PlayList, MiniPlayer} from "../../components";
import {tracks} from "../../bd";

const Home = () => {
    const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

    return (
        <div className='home'>
            <div className="home__wrapper">
                <div className="home__wrapper-first">
                    player
                </div>
                <div className="home__wrapper-second">text, background, video, image
                <MiniPlayer/>
                </div>
            </div>
        </div>
    );
};

export default Home;
