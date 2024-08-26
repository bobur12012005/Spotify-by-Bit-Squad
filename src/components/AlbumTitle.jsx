import React from 'react';
function AlbumTitle({ item }) {
    if (!item) {
      return <div>No data available</div>;
    }
    console.log(item);
    
    const isPlaylist = item.images && Array.isArray(item.images) && item.images.length > 0
    const imageUrl = isPlaylist
      ? item.images[0].url
      : isTrack
      ? item.album.images[0].url
      : 'default-image-url.jpg'; 
  
  
    return (
      <div className="playlist-data">
        <img src={imageUrl} alt={item?.name || 'Item Image'} />
        <div className="right-side-data">
          <span>{item.type || 'Unknown Type'}</span>
          <span>{item.name || 'Unknown Name'}</span>
          <span>{item.album_type || 'No description available.'}</span>
        </div>
      </div>
    );
  }
  
  export default AlbumTitle;