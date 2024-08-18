import React, { useEffect, useState } from "react";
import Contents from "../components/Contents";
import Followings from "../components/Followings";
import axios from "axios";

export let artists = [
  {
    id: 1,
    name: "Alice Johnson",
    image: "/images/user.jpg",
    type: "artist",
  },
  {
    id: 2,
    name: "Bob Smith",
    image: "/images/user.jpg",
    type: "artist",
  },
  {
    id: 3,
    name: "Charlie Brown",
    image: "/images/user.jpg",
    type: "artist",
  },
  {
    id: 4,
    name: "Diana Prince",
    image: "/images/user.jpg",
    type: "artist",
  },
  {
    id: 5,
    name: "Eve Adams",
    image: "/images/user.jpg",
    type: "artist",
  },
  {
    id: 6,
    name: "Frank Castle",
    image: "/images/user.jpg",
    type: "artist",
  },
  {
    id: 7,
    name: "Grace Lee",
    image: "/images/user.jpg",
    type: "artist",
  },
  {
    id: 8,
    name: "Hank Pym",
    image: "/images/user.jpg",
    type: "artist",
  },
];

export let content_albums = [
  {
    id: 1,
    image: "/images/picture.jpg",
    title: "Grace's Album",
    name: "Grace Lee",
  },
  {
    id: 2,
    image: "/images/picture.jpg",
    title: "Diana's Album",
    name: "Diana Prince",
  },
  {
    id: 3,
    image: "/images/picture.jpg",
    title: "Bob's Album",
    name: "Bob Smith",
  },
  {
    id: 4,
    image: "/images/picture.jpg",
    title: "Hank's Album",
    name: "Hank Pym",
  },
];

function Home() {
  useEffect(() => {
    let token = localStorage.getItem("token");
    let hash = location.hash;

    if (!token) {
      if (hash) {
        token = hash.split("=")[1].split("&")[0];
        localStorage.setItem("token", token);
        location.assign("/");
      }
    }
  }, []);
  const [Playlist, SetPlaylist] = useState([]);
  useEffect(() => {
    let token = localStorage.getItem("token");
    axios
      .get("https://api.spotify.com/v1/browse/featured-playlists", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        SetPlaylist(res.data.playlists.items)
        console.log(res.data.playlists)
        
      })
    
  }, []);
  return (
    <>
      <div className="sections">
        <button className="section active-section">All</button>
        <button className="section">Music</button>
        <button className="section">Podcasts</button>
      </div>

      <div className="following-singers-container">
        {artists.map((artist) => (
          <Followings key={artist.id} item={artist} />
        ))}
      </div>

      <div className="made-for-user boxes">
        <div className="boxes-top">
          <span>Made For User</span>
          <button className="show-all-1">Show All</button>
        </div>
        <div className="made-for-user-container boxes-content-container">
          {Playlist.map((content) => (
            <Contents key={content.id} item={content} />
          ))}
        </div>
      </div>

      <div className="your-favorite-artists boxes">
        <div className="boxes-top">
          <span>Your Favorite Artists</span>
          <button className="show-all-2">Show All</button>
        </div>
        <div className="your-favorite-artists-container boxes-content-container">
          {artists.slice(0, 4).map((content) => (
            <Contents key={content.id} item={content} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
