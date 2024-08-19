import React, { useEffect, useState } from "react";
import Songs from "../components/Playlist-songs";
import axios from "axios";
import PlaylistTitle from "../components/Playlist-title";

function Playlist() {
  let [tracks, setTracks] = useState([]);
  let [playlistTitle, setPlaylistTitle] = useState([]);
  useEffect(() => {
    let hash = location.pathname;
    let token = localStorage.getItem("token");
    let id = hash.split("/").at(-1);
    axios
      .get(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTracks(res.data.items)
      })
    axios
      .get(`https://api.spotify.com/v1/playlists/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPlaylistTitle(res.data);
      })
  }, [])
  return (
    <>
      <div className="playlist-img-data-place">
        <PlaylistTitle item={playlistTitle} />
      </div>

      <div className="total-play-button-place">
        <button className="play-pause">
          <img src="/icons/play.svg" alt="Play" />
        </button>
        <button className="add">
          <img src="/icons/plus-circle.svg" />
        </button>
        <button className="options">
          <img src="/icons/dots.svg" />
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
          {tracks.map((item, index) => (
            <Songs key={item.track.id} item={item} number={index + 1} />
          ))}
        </div>
        <button className="see-more">See more</button>
      </div>
    </>
  )
}

export default Playlist