import React from 'react';

function Musics() {
    return (
        <>
            <div className="album-img-data-place">
                <div className="album-data">
                    <img src="/images/picture.jpg" alt="Album" />
                    <span>Album Title</span>
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
                        <span className="title">TITLE</span>
                    </div>
                    <div className="duration">
                        <span>DURATION</span>
                    </div>
                </div>
                <div className="popular-songs-container"></div>
            </div>
        </>
    );
}

export default Musics;