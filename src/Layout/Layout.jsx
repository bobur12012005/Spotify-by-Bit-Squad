import React, { useEffect, useRef } from "react";
import Followings from '../components/Followings'
import Singers from '../components/Singers'
import Contents from '../components/Contents'
import { artists } from "../App";
import { Link, Outlet } from "react-router-dom";


const Layout = () => {
	const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.error('Autoplay was prevented:', error);
            });
        }
    }, []); 
	return (
		<>
			<div className="over-total">
				<div className="total-container">
					<aside className="left-sidebar">
						<div className="left-sidebar-top">
							<Link to="/" id="home-btn">
								<button className="active-button">
									<img
										src="/icons/home-active.svg"
										alt="Home"
									/>
									<span>Home</span>
								</button>
							</Link>
							<Link to="/Search"  id="search-btn">
								<button>
									<img src="/icons/search.svg" alt="Search" />
									<span>Search</span>
								</button>
							</Link>
						</div>
						<div className="left-sidebar-bottom">
							<div className="library-controller">
								<div className="library-controller-top">
									<div className="library-controller-top-left">
										<button className="library">
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
									<div className="search-side">
										<input
											className="search-input"
											type="text"
											placeholder="Library Search"
										/>
										<button className="library-search">
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
									{artists.map((artist) => (
										<Singers
											key={artist.id}
											item={artist}
										/>
									))}
								</div>
							</div>
						</div>
					</aside>

					<main className="container">
						<header>
							<div className="inner-header">
								<div className="left-header">
									<button>
										<img src="/icons/previous-page.svg" />
									</button>
									<button>
										<img src="/icons/next-page.svg" />
									</button>
								</div>
								<div className="right-header">
									<button className="explore-btn">
										<span>Explore Premium</span>
									</button>
									<button className="install-btn">
										<img src="/icons/download.svg" />
										<span>Install App</span>
									</button>
									<button className="notification-btn">
										<img
											src="/icons/notification.svg"
											className="profile-image"
										/>
									</button>
									<button className="profile-btn">
										<img
											src="/images/user.jpg"
											className="profile-image"
										/>
									</button>
								</div>
							</div>
						</header>

                        {/* {children} */}
{<Outlet/>}
						<footer>
							<div className="footer-top">
								<div className="company links-column">
									<span>Company</span>
									<a href="https://www.spotify.com/uz/about-us/contact/">
										About
									</a>
									<a href="https://www.lifeatspotify.com/">
										Jobs
									</a>
									<a href="https://newsroom.spotify.com/">
										For the Record
									</a>
								</div>
								<div className="communities links-column">
									<span>Communities</span>
									<a href="https://artists.spotify.com/home">
										For Artists
									</a>
									<a href="https://developer.spotify.com/">
										Developers
									</a>
									<a href="https://ads.spotify.com/en-US/">
										Advertising
									</a>
									<a href="https://investors.spotify.com/home/default.aspx">
										Investors
									</a>
									<a href="https://spotifyforvendors.com/">
										Vendors
									</a>
								</div>
								<div className="useful-links links-column">
									<span>Useful Links</span>
									<a href="https://support.spotify.com/uz/">
										Support
									</a>
									<a href="https://www.spotify.com/uz/download/windows/">
										Free Mobile App
									</a>
								</div>
								<div className="spotify-plans links-column">
									<span>Spotify Plans</span>
									<a href="https://www.spotify.com/uz/premium/?ref=spotifycom_footer_premium_individual">
										Premium Individual
									</a>
									<a href="https://www.spotify.com/uz/duo/?ref=spotifycom_footer_premium_duo">
										Premium Duo
									</a>
									<a href="https://www.spotify.com/uz/family/?ref=spotifycom_footer_premium_family">
										Premium Family
									</a>
									<a href="https://www.spotify.com/uz/student/?ref=spotifycom_footer_premium_student">
										Premium Student
									</a>
									<a href="https://www.spotify.com/uz/free/?ref=spotifycom_footer_free">
										Spotify Free
									</a>
								</div>
								<div className="btns">
									<a
										href="https://www.instagram.com/spotify"
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="instagram">
											<img
												src="/icons/instagram.svg"
												alt="Instagram"
											/>
										</button>
									</a>
									<a
										href="https://x.com/spotify"
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="twitter">
											<img
												src="/icons/twitter.svg"
												alt="Twitter"
											/>
										</button>
									</a>
									<a
										href="https://www.facebook.com/Spotify"
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="facebook">
											<img
												src="/icons/facebook.svg"
												alt="Facebook"
											/>
										</button>
									</a>
								</div>
							</div>
							<div className="line"></div>
							<div className="footer-bottom">
								<span>© 2024 Spotify AB</span>
							</div>
						</footer>
					</main>

					<aside className="right-sidebar active-right-sidebar">
						<div className="right-container-top">
							<a href="#" className="sidebar-artist-names">
								Singer Name
							</a>
							<button>
								<img src="/icons/close.svg" alt="Close" />
							</button>
						</div>
						<div className="song-data">
							<div className="song-img">
								<img src="/images/note.jpg" alt="Song" />
							</div>
							<div className="song-title-name-add">
								<div className="title-name">
									<a href="#" className="song-title">
										Song Title
									</a>
									<a
										href="#"
										className="singer-name sidebar-artist-names"
									>
										Singer Name
									</a>
								</div>
								<button>
									<img
										src="/icons/plus-circle.svg"
										alt="Add"
									/>
								</button>
							</div>
						</div>
						<div className="about-the-artist">
							<div className="singer-img">
								<div className="singer-img-over">
									<a
										href="#"
										className="sidebar-artist-names"
									>
										About the artist
									</a>
								</div>
							</div>
							<div className="singer-personal-data">
								<a href="#" className="sidebar-artist-names">
									Singer Name
								</a>
								<div className="listeners">
									<span>
										0 <br /> followers
									</span>
									<button>Unfollow</button>
								</div>
								<p>
									<a
										href="#"
										className="sidebar-artist-names"
									>
										Singer Name
									</a>
									<span> description</span>
								</p>
							</div>
						</div>
					</aside>
				</div>

				<div className="player">
					<audio ref={audioRef}  id="audio" src={'/public/images/Ирина Кайратовна – Айдахар.mp'} />
					<div className="left-side-player">
						<div className="song-img">
							<img src="/images/note.jpg" alt="Song" />
						</div>
						<div className="name-title">
							<a href="#" className="title">
								Song Title
							</a>
							<a href="#" className="name">
								Singer Name
							</a>
						</div>
					</div>
					<div className="song-controll">
						<div className="controll-btns">
							<button className="other-btns" id="shuffle">
								<img src="/icons/shuffle.svg" alt="Shuffle" />
							</button>
							<button className="other-btns" id="previous">
								<img src="/icons/previous.svg" alt="Previous" />
							</button>
							<button id="play-pause">
								<img src="/icons/play.svg" alt="Play/Pause" />
							</button>
							<button className="other-btns" id="next">
								<img src="/icons/next.svg" alt="Next" />
							</button>
							<button className="other-btns" id="repeat">
								<img src="/icons/repeat.svg" alt="Repeat" />
							</button>
						</div>
						<div className="progress-bar">
							<span id="current-time" className="time">
								0:00
							</span>
							<input
								type="range"
								id="progress-stage"
								defaultValue="0"
								max="100"
							/>
							<span id="duration-time" className="time">
								0:00
							</span>
						</div>
					</div>
					<div className="sound-controll">
						<button id="song-info">
							<img src="/icons/play-green.svg" alt="Song Info" />
						</button>
						<button id="maximize-minimize">
							<img
								src="/icons/maximize.svg"
								alt="Maximize/Minimize"
							/>
						</button>
						<div className="sound">
							<img src="/icons/volume.svg" alt="Volume" />
							<input
								type="range"
								id="volume"
								defaultValue="100"
								min="0"
								max="100"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* {children} */}
		</>
	);
};

export default Layout;
