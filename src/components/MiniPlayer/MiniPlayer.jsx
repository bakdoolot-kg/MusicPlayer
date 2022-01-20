import React, { useState, useReducer } from "react";
import "./miniPlayer.scss";
import { Wave, PlayList } from "../";
import { tracks } from "../../bd";
import { connect } from "react-redux";
import {
  playMusic,
  pauseMusic,
  nextMusic,
  prevMusic,
} from "../../redux/actions";
import { musicReducer, initialState } from "../../redux/musicReducer";

function MiniPlayer() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
  const [state, dispatch] = useReducer(musicReducer, initialState);
  // const [list, setList] = useState(tracks);

  // const handleList = () => {
  //   setList(!list);
  // };

  return (
    <div className="mini-player">
      <Wave url={selectedTrack.url} playing={state.play} />
      <div
        className="music-list"
        // onClick={() => handleList}
      >
        <button>music list</button>
        <div className="music-list__inner">
          <PlayList
            tracks={initialState.currentMusic}
            selectedTrack={state}
            setSelectedTrack={dispatch}
          />
        </div>
      </div>

      <br />
    </div>
  );
}

function mapStateToProps(state) {
  const { musicReducer } = state;
  return {
    play: musicReducer.play,
    currentMusic: musicReducer.currentMusic,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPlayMusic: () => {
      return dispatch(playMusic());
    },
    onPauseMusic: () => {
      return dispatch(pauseMusic());
    },
    onNextMusic: () => {
      return dispatch(nextMusic());
    },
    onPrevMusic: () => {
      return dispatch(prevMusic());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayer);
