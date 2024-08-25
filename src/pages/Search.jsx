import React, { useEffect, useState } from "react";
import BrowseContents from "../components/BrowseContents";
import { useParams } from "react-router-dom";
import Songs from "../components/Playlist-songs";
import SearchMusics from "../components/Search-Musics";
import SearchArtist from "../components/Search-artists";
import { useDebounce } from "@uidotdev/usehooks";
import axios from "axios";
import SearchPlaylist from "../components/Search-Playlist";
import SearchShow from "../components/SearchShows";

let allBrowse = [
  {
    id: 1,
    topic: "Music",
    image: "/images/note.jpg",
  },
  {
    id: 2,
    topic: "Podcasts",
    image: "/images/note.jpg",
  },
  {
    id: 3,
    topic: "Life Events",
    image: "/images/note.jpg",
  },
  {
    id: 4,
    topic: "Made For You",
    image: "/images/note.jpg",
  },
  {
    id: 5,
    topic: "New Releases",
    image: "/images/note.jpg",
  },
  {
    id: 6,
    topic: "Pop",
    image: "/images/note.jpg",
  },
  {
    id: 7,
    topic: "Hip-Hop",
    image: "/images/note.jpg",
  },
  {
    id: 8,
    topic: "Mood",
    image: "/images/note.jpg",
  },
  {
    id: 9,
    topic: "Dance",
    image: "/images/note.jpg",
  },
  {
    id: 10,
    topic: "Educational",
    image: "/images/note.jpg",
  },
  {
    id: 11,
    topic: "Documentary",
    image: "/images/note.jpg",
  },
  {
    id: 12,
    topic: "Comedy",
    image: "/images/note.jpg",
  },
];

function Search({ query }) {
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [songs, setSongs] = useState([]);
  const [Playlists, setPlaylists] = useState([]);
  const [shows, setShows] = useState([]);

  const [debouncedQuery] = useDebounce(query, 500);
  
  useEffect(() => {
    if (debouncedQuery) {
      fetchResults(debouncedQuery);
    }
  }, [debouncedQuery]);

  const fetchResults = async (searchQuery) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found in localStorage");
      }

      const response = await axios.get(`https://api.spotify.com/v1/search`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: searchQuery,
          type: "artist,track,playlist,show",
          limit: 10,
        },
      });

      const { artists, tracks, playlists,shows  } = response.data
      const artistItems = artists.items;
      const trackItems = tracks.items;
      const playlistItems = playlists.items;
      const showItems = shows.items;
      setSongs(trackItems);
      setArtists(artistItems);
      setPlaylists(playlistItems);
      setShows(showItems)
      if (artistItems.length > 0) {
        setSelectedArtist(artistItems[0]);
      }
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };
  return (
    <>
      {query && (
        <section className="search-results">
          {selectedArtist && (
            <a className="results-link" href="#">
              <div className="main-result-place-all">
                <div className="top">
                  <span>Top Result</span>
                </div>
                <SearchArtist item={selectedArtist} />
              </div>
            </a>
          )}
          {songs.length > 0 && (
            <div className="other-results-place-all">
              <div className="top">
                <span>Songs</span>
              </div>
              <div className="other-results-container">
                <SearchMusics items={songs} />
              </div>
            </div>
          )}
        </section>
      )}

      {query && (
        <div className="made-for-user boxes">
          <div className="boxes-top">
            <span>Playlists</span>
            <button className="show-all-1">Show All</button>
          </div>
          <div className="made-for-user-container boxes-content-container">
            {Playlists.length > 0 &&
              Playlists.slice(0, 8).map((playlist) => (
                <SearchPlaylist key={playlist.id} item={playlist} />
              ))}
          </div>
        </div>
      )}

      {query && (
        <div className="made-for-user boxes">
          <div className="boxes-top">
            <span>Shows</span>
            <button className="show-all-1">Show All</button>
          </div>
          <div className="made-for-user-container boxes-content-container">
            {shows.length > 0 &&
              shows.slice(0, 8).map((show) => (
                <SearchShow key={show.id} item={show} />
              ))}
          </div>
        </div>
      )}
      <section className="browse">
        <div className="top">
          <button className="profile-btn">
            <img src="/images/user.jpg" className="profile-image" />
          </button>
          {/* <h1>Search Results for: {query}</h1> */}
          <span>Browse All</span>
        </div>
        <div className="search-input">
          <input
            type="text"
            placeholder="What you want to hear?"
            className="search-mobile"
          />
        </div>
        <div className="browse-container">
          {allBrowse.map((brw) => (
            <BrowseContents key={brw.id} item={brw} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Search;
