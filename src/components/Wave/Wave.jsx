import React, { useState, useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#c4c4c4",
  progressColor: "#4055C0",
  cursorColor: "green",
  cursorWidth: 0,
  hideCursor: true,
  barWidth: 0,
  barRadius: 2,
  responsive: true,
  height: 75, // If true, normalize by the maximum peak instead of 1.0.
  normalize: true, // Use the PeakCache to improve rendering speed of large waveforms.
  partialRender: true,
  hideScrollbar: true,
});

function Wave({ url }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    setPlay(!playing);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    wavesurfer.current.on("ready", function () {
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });

    return () => wavesurfer.current.destroy();
  }, [url]);

  const handlePlayPause = () => {
    if (wavesurfer.current)
      // playing ? wavesurfer.current.playPause() : wavesurfer.current.playPause();
      wavesurfer.current.playPause();
    return playing;
  };

  const onVolumeChange = (e) => {
    const { target } = e;
    const newVolume = +target.value;

    if (newVolume) {
      setVolume(newVolume);
      wavesurfer.current.setVolume(newVolume || 1);
    }
  };

  return (
    <div className="wave">
      <div id={"waveform"} ref={waveformRef}>
        <div className="controls">
          <button onClick={handlePlayPause}>
            {playing ? "Play" : "Pause"}
          </button>

          <label htmlFor="{'volume'}">Volume</label>
          <input
            className="volume-range"
            type="range"
            id="volume"
            name="volume"
            min="0.01"
            max="1"
            step=".025"
            onChange={onVolumeChange}
            defaultValue={volume}
          />
        </div>
      </div>
    </div>
  );
}

export default Wave;
