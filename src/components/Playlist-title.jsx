import React from 'react'

function PlaylistTitle({ item }) {
  console.log(item);
  const imageUrl = item?.images?.[0]?.url;
    return (
        <div className="playlist-data xs:relative ">
        <img className='xs:!w-[100%] xs:!h-auto' src={imageUrl || 'default-image-url.jpg'} alt={item?.name || 'Playlist Image'} />
        <div className="right-side-data xs:absolute xs:bottom-0">
          <span className='xs:!hidden'>Playlist</span>
          <span className='xs:!text-5xl'>{item.name}</span>
          <span className='xs:!hidden'>{item.description}</span>
        </div>
      </div>
    )
}

export default PlaylistTitle