import React from "react"
import BrowseContents from "../components/BrowseContents"
import { useParams } from "react-router-dom"
import Songs from "../components/Playlist-songs"

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

function Search() {
    const { query } = useParams();
    return (
        <>
            <section className="search-results">
                <a className="results-link" href="#">
                    <div className="main-result-place-all">
                        <div className="top">
                            <span>Top Result</span>
                        </div>
                        <div className="main-result-place">
                            <div className="result-img">
                                <img src="/images/picture.jpg" />
                            </div>
                            <span className="result-name">Name</span>
                            <span className="result-type">Type</span>
                        </div>
                    </div>
                </a>
                <div className="other-results-place-all">
                    <div className="top">
                        <span>Songs</span>
                    </div>
                    <div className="other-results-container"></div>
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