import React, {useState} from "react";
import { Icon } from '@iconify/react';
import "./miniPlayer.scss";
import {Wave, PlayList, CoverMusic} from "../";
import {tracks} from "../../bd";

function MiniPlayer() {
    const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
    const [drop, setDrop] = useState(false);
    const [list, setList] = useState(true)

    const handleDrop = () => {
        setDrop(!drop);
    }

    return (
        <div className='mini-player-wrapper'>
        <div className={drop ? 'mini-player':'mini-player-hidden'}>

            <CoverMusic
                tracks={tracks}
                selectedTrack={selectedTrack}
                setSelectedTrack={setSelectedTrack}
            />
            <Wave url={selectedTrack.url}/>
            <div className="music-list">
                <div className={list ? 'music-list__inner-hide' : 'music-list__inner'}>
                    <PlayList
                        tracks={tracks}
                        selectedTrack={selectedTrack}
                        setSelectedTrack={setSelectedTrack}
                    />
                </div>
                <button className='music-list__btn' onClick={()=>{setList(!list)}}>music list</button>
            </div>

            {/*<br/>*/}

        </div>
            <button onClick={() => {
                setDrop(!drop)
            }} className={drop ? 'mini-player__open' : 'mini-player__hidden'}>{drop ? <Icon icon="akar-icons:chevron-down" height="40" /> : <Icon icon="akar-icons:chevron-up" height="40" />}
            </button>
        </div>
    );
}

export default MiniPlayer;
