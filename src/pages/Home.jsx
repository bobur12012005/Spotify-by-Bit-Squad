import React, { useEffect, useState } from "react";
import Contents from "../components/Contents";
import Followings from "../components/Followings";
import axios from "axios";
import ArtistContent from "../components/Artist-content";
import AlbumContent from "../components/Album-content";

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
                location.assign("/")
            }
        }
    }, []);
    const [albums, setAlbums] = useState([]);
    const [Playlist, SetPlaylist] = useState([]);
    const [Tracks, setTracks] = useState([]);
    const [favArtists, setFavArtist] = useState([]);

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
                setTracks(res.data.playlists.items)
            })
            axios.get("https://api.spotify.com/v1/browse/new-releases",{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response=>{
                setAlbums(response.data.albums.items);
            })
    }, [])

    let token = localStorage.getItem('token')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responsePlaylists = await axios.get("https://api.spotify.com/v1/me/playlists", {
                    headers: { Authorization: `Bearer ${token}` },
                })

                const playlistId = responsePlaylists.data.items[0].id

                const responseTracks = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                    headers: { Authorization: `Bearer ${token}` },
                })

                const artistIds = responseTracks.data.items.map(track => track.track.artists[0].id).join(',')

                const responseArtists = await axios.get(`https://api.spotify.com/v1/artists?ids=${artistIds}`, {
                    headers: { Authorization: `Bearer ${token}` },
                })

                setFavArtist(responseArtists.data.artists)
            } catch (error) {
                console.error("Error fetching data from Spotify API:", error)
            }
        }

        if (token) {
            fetchData()
        }
    }, [token])

    return (
        <>
            <div className="sections">
                <button className="profile-btn">
                    <img
                        src="/images/user.jpg"
                        className="profile-image"
                    />
                </button>
                <button className="section active-section">All</button>
                <button className="section">Music</button>
                <button className="section">Podcasts</button>
            </div>

            <div className="following-singers-container">
                {Tracks.slice(10, 18).map((artist) => (
                    <Followings key={artist.id} item={artist} />
                ))}
            </div>

            <div className="made-for-user boxes">
                <div className="boxes-top">
                    <span>Made For User</span>
                    <button className="show-all-1">Show All</button>
                </div>
                <div className="made-for-user-container boxes-content-container">
                    {Playlist.slice(0, 8).map((content) => (
                        <Contents key={content.id} item={content} />
                    ))}
                </div>
            </div>
            <div className="made-for-user boxes">
                <div className="boxes-top">
                    <span>Albums</span>
                    <button className="show-all-1">Show All</button>
                </div>
                <div className="made-for-user-container boxes-content-container">
                   {albums.slice(0,8).map(item=><AlbumContent key={item.id} item={item}/>)}
                </div>
            </div>
            <div className="your-favorite-artists boxes">
                <div className="boxes-top">
                    <span>Your Favorite Artists</span>
                    <button className="show-all-2">Show All</button>
                </div>
                <div className="your-favorite-artists-container boxes-content-container">
                    {favArtists.slice(0, 4).map((content) => (
                        <ArtistContent key={content.id} item={content} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home