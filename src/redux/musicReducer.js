import { PLAY, PAUSE, NEXT, PREV } from "./types";
import { tracks } from "../bd";

const currentMusicURL = tracks.map((track) => {
  return track.url;
});

export const initialState = {
  play: false,
  currentMusic: tracks,
  url: currentMusicURL,
};

export const musicReducer = (state = initialState, action) => {
  console.log("musicReducer > ", action);

  switch (action.type) {
    case PLAY:
      return {
        ...state.play,
        play: true,
      };
    case PAUSE:
      return {
        ...state.play,
        play: false,
      };
    case NEXT:
      return {
        ...state.currentMusic,
        currentMusic: state.currentMusic + 1,
      };
    case PREV:
      return {
        ...state.currentMusic,
        currentMusic: state.currentMusic - 1,
      };

    default:
      return state;
  }
};
