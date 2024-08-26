import axios from "axios";
import { useEffect, useState } from "react";
import AlbumTiTle from "../components/AlbumTitle";
import Album_Track from "../components/Album-track";


function Album() {
  const [album, setAlbum] = useState(null);
  const [AlbumTrack, SetAlbumTrack] = useState([])
  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        let hash = location.pathname;
        let token = localStorage.getItem("token");
        if (!token) {
          // console.error("No token found in localStorage.");
          return;
        }
        
        let id = hash.split("/").at(-1);
        const response = await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAlbum(response.data);
      } catch (error) {
        // console.error("Error fetching album data:", error);
      }
    };

    fetchAlbum();
    let token = localStorage.getItem("token");
    let hash = location.pathname;
    let id = hash.split("/").at(-1);
    axios
      .get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        
        SetAlbumTrack(res.data.items)
      })
  }, []);
  return (
    <>
      <div className="playlist-img-data-place">
        {<AlbumTiTle item={album} />}
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
          <div className="popularity" style={{display:"none"}}>
            <span>Popularity</span>
          </div>
          <div className="duration">
            <img src="/icons/duration.svg" alt="" />
          </div>
        </div>
        <div className="popular-songs-container">
          {AlbumTrack.map((item, index) => <Album_Track key={item.id} item={item} number={index + 1} />)}
        </div>
        <button className="see-more">See more</button>
      </div>
    </>
  );
}

export default Album;
