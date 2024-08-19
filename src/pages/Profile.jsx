import React from "react"
import { artists } from "./Home"
import Contents from "../components/Contents"

function Profile() {
    return (
        <>
            <div className="user-img-data-place">
                <div className="user-data">
                    <img src="/images/user.jpg" />
                    <div className="right-side-data">
                        <span>Profile</span>
                        <span>User Name</span>
                    </div>
                </div>
            </div>

            <button className="options">
                <img src="/icons/dots.svg" />
            </button>

            <div className="artist-content-container">
                <div className="boxes-top">
                    <span>Top Artists This Month</span>
                </div>
                <div className="made-for-user-container">
                    {artists.slice(0,4).map((artist) => (
                        <Contents
                            key={artist.id}
                            item={artist}
                        />
                    ))}
                </div>
            </div>

            <div className="popular-songs">
                <div className="song-top">
                    <div className="left-song">
                        <span className="number">#</span>
                        <span className="title">TITLE</span>
                    </div>
                    <div className="popularity">
                        <span>POPULARITY</span>
                    </div>
                    <div className="duration">
                        <span>DURATION</span>
                    </div>
                </div>
                <div className="popular-songs-container">

                </div>
            </div>
        </>
    )
}

export default Profile