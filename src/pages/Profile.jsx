import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Songs from '../components/Playlist-songs'
import ArtistContent from '../components/Artist-content'

function Profile() {
    const [profileData, setProfileData] = useState({})
    const [profileFollowings, setProfileFollowings] = useState([])
    const [profileSongs, setProfileSongs] = useState([])
    const token = localStorage.getItem('token')

    useEffect(() => {
        axios.get('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((me) => {
            setProfileData(me.data)
        })
    }, [token])

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

                setProfileFollowings(responseArtists.data.artists)
            } catch (error) {
                console.error("Error fetching data from Spotify API:", error)
            }
        }

        if (token) {
            fetchData()
        }
    }, [token])

    useEffect(() => {
        axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(playlist => {
            let playlistId = playlist.data.items[0].id

            axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setProfileSongs(response.data.items)
            })
        })
    }, [token])

    const profileImage = profileData.images && profileData.images.length > 1 ? profileData.images[1].url : '/images/user.jpg'
    const displayName = profileData.display_name || 'User Name'

    return (
        <>
            <div className="user-img-data-place">
                <div className="user-data">
                    <img src={profileImage} alt="Profile" />
                    <div className="right-side-data">
                        <span>Profile</span>
                        <span>{displayName}</span>
                    </div>
                </div>
            </div>

            <button className="options">
                <img src="/icons/dots.svg" alt="Options" />
            </button>

            <div className="artist-content-container">
                <div className="boxes-top">
                    <span>Top artists this month</span>
                </div>
                <div className="made-for-user-container">
                    {profileFollowings.slice(0, 4).map((artist) => (
                        <ArtistContent
                            key={artist.id}
                            item={artist}
                        />
                    ))}
                </div>
            </div>

            <div className="popular-songs-user">
                <div className="song-top-user">
                    <span>Top tracks this month</span>
                </div>
                <div className="popular-songs-container">
                    {profileSongs.slice(0, 4).map((song, index) => (
                        <Songs
                            key={song.id}
                            item={song}
                            number={index + 1}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Profile