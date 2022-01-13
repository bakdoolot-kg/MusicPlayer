import { tracks } from "../../bd";

export default function CoverMusic() {
  return (
    <div className="cover-music">
      {tracks.map((item, idx) => {
        return (
          <div className="cover-music__inner" key={item.id + idx}>
            <div className="cover-music__img">
              <img src={item.image} alt="cover music" />
            </div>
            <a href={item.url} className="cover-music__title">
              {item.title}
            </a>
            <div className="cover-music__artist">{item.artist}</div>
          </div>
        );
      })}
    </div>
  );
}
