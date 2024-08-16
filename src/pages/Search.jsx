import React from "react"
import BrowseContents from "../components/BrowseContents"

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
    return (
        <>
            <section className="browse">
                <div className="top">
                    <span>Browse All</span>
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