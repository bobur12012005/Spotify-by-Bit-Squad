import React, { useEffect, useState } from 'react';
import ArtistsTitle from '../components/Artists-title';
import Songs from '../components/Playlist-songs';
import axios from 'axios';
import AlbumContent from '../components/Album-content';
import ArtistContent from '../components/Artist-content';
import { useLocation } from 'react-router-dom';



function Artist() {
    let [tracks, setTracks] = useState([])
    let [artistTitle, setArtistTitle] = useState([]);
    let [album, setAlbum] = useState([])
    let [similar, setSimilar] = useState([])
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
        axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((res) => setAlbum(res.data.items))

        axios.get(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((res) => setSimilar(res.data?.artists))
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
        <div className="popular-songs-container xs:p-[20px]">
          {tracks.map((item, index) => (
            <Songs key={item.id} item={item} number={index + 1} />
          ))}
        </div>
      </div>

      <div className="album">
          <h3>Music</h3>
          <div className="album-container">
            {album.map((item, index) => (
              <AlbumContent key={item.id} item={item} />
            ))}
          </div>
      </div>

      <div className="similar">
          <h3>Also try</h3>
          <div className="similar-container">
            {similar.map((item, index) => (
              <ArtistContent key={item.id} item={item} />
            ))}
          </div>
      </div>

    </> );
}

export default Artist;