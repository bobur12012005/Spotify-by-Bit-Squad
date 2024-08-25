import React, { useEffect, useState } from "react"
import BrowseContents from "../components/BrowseContents"
import { useParams } from "react-router-dom"
import Songs from "../components/Playlist-songs"
import SearchMusics from "../components/Search-Musics"
import SearchArtist from "../components/Search-artists"
import { useDebounce } from "@uidotdev/usehooks"
import axios from "axios"

let allBrowse = [
    {
        id: 1,
        topic: "Music",
        image: "/images/note.jpg"
    },
    {
        id: 2,
        topic: "Podcasts",
        image: "/images/note.jpg"
    },
    {
        id: 3,
        topic: "Life Events",
        image: "/images/note.jpg"
    },
    {
        id: 4,
        topic: "Made For You",
        image: "/images/note.jpg"
    },
    {
        id: 5,
        topic: "New Releases",
        image: "/images/note.jpg"
    },
    {
        id: 6,
        topic: "Pop",
        image: "/images/note.jpg"
    },
    {
        id: 7,
        topic: "Hip-Hop",
        image: "/images/note.jpg"
    },
    {
        id: 8,
        topic: "Mood",
        image: "/images/note.jpg"
    },
    {
        id: 9,
        topic: "Dance",
        image: "/images/note.jpg"
    },
    {
        id: 10,
        topic: "Educational",
        image: "/images/note.jpg"
    },
    {
        id: 11,
        topic: "Documentary",
        image: "/images/note.jpg"
    },
    {
        id: 12,
        topic: "Comedy",
        image: "/images/note.jpg"
    }
]

function Search({ query }) {
    const [artists, setArtists] = useState([]);
    const [selectedArtist, setSelectedArtist] = useState(null);
    const [songs, setSongs] = useState([]);
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
              type: "artist,track",
            },
          });
      
          const { artists, tracks } = response.data;
          const artistItems = artists.items;
          const trackItems = tracks.items;
      
          setSongs(trackItems);
          setArtists(artistItems);
      
          if (artistItems.length > 0) {
            setSelectedArtist(artistItems[0]);
          }
        } catch (error) {
        
          console.error("Error fetching results:", error);
        
        }
      };
    return (
        <>
            <section className="search-results">
                <a className="results-link" href="#">
                    <div className="main-result-place-all">
                        <div className="top">
                            <span>Top Result</span>
                        </div>
                        {selectedArtist && <SearchArtist item={selectedArtist} />}
                    </div>
                </a>
                <div className="other-results-place-all">
                    <div className="top">
                        <span>Songs</span>
                    </div>
                    <div className="other-results-container">
                    {songs.length > 0 ? <SearchMusics items={songs} /> : null}
                    </div>
                </div>
            </section>

            <section className="browse">
                <div className="top">
                    <button className="profile-btn">
                        <img
                            src="/images/user.jpg"
                            className="profile-image"
                        />
                    </button>
                    {/* <h1>Search Results for: {query}</h1> */}
                    <span>Browse All</span>
                </div>
                <div className="search-input">
                    <input type="text" placeholder="What you want to hear?" className="search-mobile" />
                </div>
                <div className="browse-container">
                    {allBrowse.map((brw) => (
                        <BrowseContents key={brw.id} item={brw} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Search