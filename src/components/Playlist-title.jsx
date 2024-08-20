import React from 'react'

function PlaylistTitle({ item }) {
  const isPlaylist = item?.images && item?.description;
  const isTrack = item?.album
  const imageUrl = isPlaylist
    ? item.images?.[0]?.url
    : isTrack
    ? item.album.images?.[0]?.url
    : 'default-image-url.jpg';
    return (
        <div className="playlist-data">
        <img src={imageUrl || 'default-image-url.jpg'} alt={item?.name || 'Playlist Image'} />
        <div className="right-side-data">
          <span>{item.type}</span>
          <span>{item.name}</span>
          <span>{item.description}</span>
        </div>
      </div>
    )
}

export default PlaylistTitle