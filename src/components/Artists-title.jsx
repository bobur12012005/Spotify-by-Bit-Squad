import React from 'react'

function ArtistsTitle({ item }) {
    
    const imageUrl = item?.images?.[0]?.url;
    const total = item.followers?.total.toLocaleString()

    return (
        <div className="main-title-area" style={{
            backgroundImage: `url(${imageUrl || 'default-image-url.jpg'})`
        }}>
            <div className="playlist-data">
              <div className="right-side-data">
                <span className='check'><img src="/icons/check.svg" alt="check" /> Подтвержденный исполнитель</span> <br />
                <span className='artist-name'>{item.name}</span> <br />
                <span className='artist-listeners'>{total} слушателей за месяц</span>
              </div>
            </div>
        </div>
    )
}

export default ArtistsTitle