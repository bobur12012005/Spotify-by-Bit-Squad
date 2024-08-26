import axios from "axios";
import { useEffect, useState } from "react";
import AlbumTiTle from "../components/AlbumTitle";

function Album() {
    const [album, setAlbum] = useState(null);

    useEffect(() => {
      const fetchAlbum = async () => {
        try {
          let hash = location.pathname;
          let token = localStorage.getItem("token");
          if (!token) {
            console.error("No token found in localStorage.");
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
          console.error("Error fetching album data:", error);
        }
      };
  
      fetchAlbum();
    }, []);
  return (
    <>
      <div className="playlist-img-data-place">
     {<AlbumTiTle item={album}/>}
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
         
        </div>
        <button className="see-more">See more</button>
      </div>
    </>
  );
}

export default Album;
