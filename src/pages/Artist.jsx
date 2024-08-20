import React, { useEffect, useState } from 'react';
import ArtistsTitle from '../components/Artists-title';
import Songs from '../components/Playlist-songs';
import axios from 'axios';



function Artist() {
    let [tracks, setTracks] = useState([])
    let [artistTitle, setArtistTitle] = useState([]);

    useEffect(() => {
        let hash = location.pathname;
        let token = localStorage.getItem("token");
        let id = hash.split("/").at(-1);

        axios.get(`https://api.spotify.com/v1/artists/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        })
        .then((res) => setArtistTitle(res.data))

        axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((res) => setTracks(res.data.tracks))
    }, [])

    return ( <>

    <div className="artist-img-data-place">
        <ArtistsTitle item={artistTitle} />
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

      <div className="popular-songs-artist">
        <div className="song-top-artist">
            <h3>Популярные треки</h3>
        </div>
        <div className="popular-songs-container">
          {tracks.map((item, index) => (
            <Songs key={item.id} item={item} number={index + 1} />
          ))}
        </div>
        <button className="see-more">See more</button>
      </div>

    </> );
}

export default Artist;