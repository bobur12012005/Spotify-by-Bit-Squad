import React from 'react'

function PlaylistTitle({ item }) {
  console.log(item);
  const imageUrl = item?.images?.[0]?.url;
    return (
        <div className="playlist-data">
        <img src={imageUrl || 'default-image-url.jpg'} alt={item?.name || 'Playlist Image'} />
        <div className="right-side-data">
          <span>Playlist</span>
          <span>{item.name}</span>
          <span>{item.description}</span>
        </div>
      </div>
    )
}

export default PlaylistTitle