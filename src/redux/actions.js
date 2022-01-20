import { PLAY, PAUSE, NEXT, PREV } from "./types";

export function playMusic() {
  return {
    type: PLAY,
  };
}

export function pauseMusic() {
  return {
    type: PAUSE,
  };
}

export function nextMusic() {
  return {
    type: NEXT,
  };
}

export function prevMusic() {
  return {
    type: PREV,
  };
}
