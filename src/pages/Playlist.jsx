import React from "react"
import { artists } from "../App"
import Songs from "../components/Playlist-songs"

function Playlist() {
    return (
        <>
            <div className="playlist-img-data-place">
                <div className="playlist-data">
                    <img src="/images/picture.jpg" />
                    <div className="right-side-data">
                        <span>Playlist</span>
                        <span>Playlist Title</span>
                        <span>Playlist Owner</span>
                    </div>
                </div>
            </div>

            <div className="total-play-button-place">
                <button className="play-pause">
                    <img src="/icons/play.svg" alt="Play" />
                </button>
                <button className="follow">Following</button>
                <button className="options">
                    <img src="/icons/dots.svg" alt="Options" />
                </button>
            </div>

            <div className="popular-songs">
                <div className="song-top">
                    <div className="left-song">
                        <span className="number">#</span>
                        <span className="title">Title</span>
                    </div>
                    <div className="popularity">
                        <span>Popularity</span>
                    </div>
                    <div className="duration">
                        <img src="/icons/duration.svg" alt="" />
                    </div>
                </div>
                <div className="popular-songs-container">
                    {artists.map((item) => (
                        <Songs key={item.id} item={item} />
                    ))}
                </div>
                <button className="see-more">See more</button>
            </div>
        </>
    )
}

export default Playlist