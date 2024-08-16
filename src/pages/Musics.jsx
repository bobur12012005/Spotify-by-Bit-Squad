import React from "react";
import { artists } from "../App";
import Songs from "../components/Playlist-songs";

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

      <div class="popular-songs">
        <div class="song-top">
          <div class="left-song">
            <span class="number">#</span>
            <span class="title">Title</span>
          </div>
          <div class="popularity">
            <span>Popularity</span>
          </div>
          <div class="duration">
            <img src="/icons/duration.svg" alt="" />
          </div>
        </div>
        <div class="popular-songs-container">
          {artists.map((item) => (
            <Songs item={item} />
          ))}
        </div>
        <button class="see-more">See more</button>
      </div>
    </>
  );
}

export default Musics;