import './coverMusic.scss'

export default function CoverMusic({tracks, selectedTrack, setSelectedTrack}) {
    return (
        <div className="cover-music">
            {tracks.map((track, idx) => {
                return (
                    <div className={track.id === selectedTrack.id
                        ? "cover-music__inner selected"
                        : "cover-music__inner"}
                         key={track.id}
                    >
                        <div className="cover-music__img">
                            <img src={track.image} alt="cover music"/>
                        </div>
                        <a href={track.url} className="cover-music__title">
                            {track.title}
                        </a>
                        <div className="cover-music__artist">{track.artist}</div>
                    </div>
                );
            })}
        </div>
    );
}
