import React, { useEffect, useState } from 'react'
import Singers from './Singers'
import { Link } from 'react-router-dom'
import axios from 'axios'

function LeftSideBar({ toggleSidebar }) {
	let token = localStorage.getItem('token')
	const [FollowingsArtists, setFollowingsArtists] = useState([]);
	const [isActive, setIsActive] = useState(false)
	const handleClick = () => {
		setIsActive((prevState) => !prevState);
	}
	const containerClassName = isActive
		? "search-side show-input"
		: "search-side"

	useEffect(() => {
		const fetchData = async () => {
			try {
				const responsePlaylists = await axios.get("https://api.spotify.com/v1/me/playlists", {
					headers: { Authorization: `Bearer ${token}` },
				});

				const playlistId = responsePlaylists.data.items[0].id;

				const responseTracks = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
					headers: { Authorization: `Bearer ${token}` },
				});

				const artistIds = responseTracks.data.items.map(track => track.track.artists[0].id).join(',');

				const responseArtists = await axios.get(`https://api.spotify.com/v1/artists?ids=${artistIds}`, {
					headers: { Authorization: `Bearer ${token}` },
				});

				setFollowingsArtists(responseArtists.data.artists);
			} catch (error) {
				console.error("Error fetching data from Spotify API:", error);
			}
		};

		if (token) {
			fetchData();
		}
	}, [token]);

	return (
		<>
			<aside className="left-sidebar">
				<div className="left-sidebar-top">
					<Link to="/" id="home-btn">
						<button className={location.pathname === '/' ? 'active-button' : ''}>
							<img src={location.pathname === '/' ? '/icons/home-active.svg' : '/icons/home.svg'} />
							<span>Home</span>
						</button>
					</Link>
					<Link to="/Search" id="search-btn">
						<button className={location.pathname === '/Search' ? 'active-button' : ''}>
							<img src={location.pathname === '/Search' ? '/icons/search-active.svg' : '/icons/search.svg'} />
							<span>Search</span>
						</button>
					</Link>
				</div>
				<div className="left-sidebar-bottom">
					<div className="library-controller">
						<div className="library-controller-top">
							<div className="library-controller-top-left">
								<button className="library" onClick={toggleSidebar}>
									<img
										src="/icons/library-active.svg"
										alt="Library"
									/>
									<span>Your Library</span>
								</button>
							</div>
							<div className="library-controller-top-right">
								<button>
									<span>+</span>
								</button>
								<button>
									<img src="/icons/right.svg" />
								</button>
							</div>
						</div>
						<div className="library-controller-bottom">
							<button>Playlists</button>
							<button>Artists</button>
						</div>
					</div>
					<div className="singers-over-container">
						<div className="over-cont-top">
							<div className={containerClassName}>
								<input
									className="search-input"
									type="text"
									placeholder="Library Search"
								/>
								<button className={containerClassName} onClick={handleClick}>
									<img
										src="/icons/srch.svg"
										alt="Search"
									/>
								</button>
							</div>
							<button className="recents">
								<span>Recents</span>
								<img src="/icons/list.svg" />
							</button>
						</div>
						<div className="singers-container">
							{FollowingsArtists.map((flw) => (
								<Singers
									key={flw.id}
									item={flw}
								/>
							))}
						</div>
					</div>
				</div>
			</aside>
		</>
	)
}

export default LeftSideBar