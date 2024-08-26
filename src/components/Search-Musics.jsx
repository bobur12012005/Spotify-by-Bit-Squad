import { Link } from "react-router-dom";

function SearchMusics({ items }) {

  return (
    <div className="song-list">
      {items.slice(0, 4).map((item) => (
        <Link key={item.id} className="song" to={`/tracks-page/${item.id}`}>
          <div className="left-song">
            <div className="img">
              <img 
                src={item.album.images[0]?.url || 'default-image-url.jpg'} 
                alt={item.name} 
              />
            </div>
            <span className="title">
              {item.name} - {item.album.name}
            </span>
          </div>
          <div className="duration">
            <span>{Math.floor(item.duration_ms / 60000)}:{Math.floor((item.duration_ms % 60000) / 1000).toString().padStart(2, '0')}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SearchMusics;