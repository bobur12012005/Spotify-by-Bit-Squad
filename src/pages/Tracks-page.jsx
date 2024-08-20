import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PlaylistTitle from '../components/Playlist-title';
import Songs from '../components/Playlist-songs';

function Tracks() {
    const location = useLocation();
    const hash = location.pathname;
    const id = hash.split("/").at(-1); 
  
    let [Music, setMusic] = useState(null)
  let [TopTrack,setTopTrack]=useState(null)
    useEffect(() => {
        const token = localStorage.getItem("token");
  
        axios
        .get(`https://api.spotify.com/v1/tracks/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setMusic(res.data);
          const artistId = res.data.artists[0].id
          return axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              country: 'US',  
            },
          });
        })
        .then((res) => {
         setTopTrack(res.data.tracks)
        })
            
          
    }, [id])
  
    return (
        <>
        <div className="playlist-img-data-place">
            {Music ? (
                <PlaylistTitle key={Music.id} item={Music} />
            ) : (
                <p>Loading...</p>
            )}
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
      <h3 style={{color:"white"}}>Рекомендуемые треки</h3>
         <div className="popular-songs-container">
         {TopTrack ? TopTrack.map((item, index) => (
          <Songs key={item.id} item={item} number={index + 1} />
        )) : <p>Loading...</p>}

         </div>
         <button className="see-more">See more</button>
       </div>
       </>
    )
}
  
export default Tracks;