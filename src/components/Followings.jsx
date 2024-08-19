import React from 'react'

function Followings({ item }) {
     const imageUrl = item.track.album.images[0]?.url
    return (
        <a href="#" className="link">
            <div className="following-singer">
                <div className="img-side">
                    <img src={imageUrl} />
                </div>
                <div className="name-side">
                    <span>{item.track.name}</span>
                    <button>
                        <img src="/icons/play.svg" alt="Play" />
                    </button>
                </div>
            </div>
        </a>
    )
}

export default Followings