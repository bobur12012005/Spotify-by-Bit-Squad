import React from 'react'
import { Link } from 'react-router-dom';

function Followings({ item }) {
  const imageUrl =
    item.images && item.images.length > 0
      ? item.images[0].url
      : "default-image-url.jpg";
  return (
    <Link to={`/Playlist/${item.id}`} className="link">
      <div className="following-singer">
        <div className="img-side">
          <img src={imageUrl} />
        </div>
        <div className="name-side">
          <span>{item.name}</span>
          <button>
            <img src="/icons/play.svg" alt="Play" />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Followings