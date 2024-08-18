import React from 'react'
import { Link } from "react-router-dom"

function Contents({ item }) {
    const imageUrl = (item.images && item.images.length > 0) ? item.images[0].url : 'default-image-url.jpg';
    return (
        <Link to={`/Playlist/${item.id}`}>
            <div className="content">
                <div className="content-img">
                    <img src={imageUrl} />
                </div>
                <div className="content-data">
                    <span className="title">{item.title || item.name}</span>
                    <span className="name">{item.type || item.name}</span>
                </div>
                <button className="play-pause">
                    <img src="/icons/play.svg" alt="Play" />
                </button>
            </div>
        </Link>
    )
}

export default Contents