import React, { useReducer } from "react";
import { tracks } from "../../bd";
import { musicReducer, initialState } from "../../redux/musicReducer";

const PlayList = (props) => {
  return (
    <div className="playlist">
      {tracks.map((track) => (
        <div
          key={track.id}
          className={
            track.id === props.selectedTrack
              ? "playlist-item selected"
              : "playlist-item"
          }
          onClick={() => props.setSelectedTrack(track)}
        >
          {track.artist}
          <span> - </span>
          {track.title}
        </div>
      ))}
      {/* {props.testState} */}
    </div>
  );
};

//TODO: Запасной вариант навсякий случай
// const PlayList = ({ tracks, selectedTrack, setSelectedTrack }) => {
//   return (
//     <div className="playlist">
//       {tracks.map((track) => (
//         <div
//           key={track.id}
//           className={
//             track.id === selectedTrack.id
//               ? "playlist-item selected"
//               : "playlist-item"
//           }
//           onClick={() => setSelectedTrack(track)}
//         >
//           {track.artist} <span> - </span>
//           {track.title}
//         </div>
//       ))}
//       {/* {props.testState} */}
//     </div>
//   );
// };

export default PlayList;
