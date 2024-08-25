import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";
import LeftSideBar from "../components/LeftSideBar";
import LeftSideBarMini from "../components/LeftSideBarMini";
// import { useDebounce } from "@uidotdev/usehooks";

const Layout = ({ onSearch }) => {
  let token = localStorage.getItem("token");
  const location = useLocation();
  const showInput = location.pathname === "/Search";
  const showExploreButton = location.pathname !== "/Search";
  const [isActive, setIsActive] = useState(false);

  const [profImage, setProfImage] = useState({})
  useEffect(()=>{
  axios.get('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      setProfImage(res.data)
    })
  },[])
  const profileImage = profImage.images && profImage.images.length > 1 ? profImage.images[1].url : '/images/user.jpg'

  const handleBack = () => {
    window.history.back();
  };

  const handleForward = () => {
    window.history.forward();
  };

  const [isMini, setIsMini] = useState(true);
  const openContextMenu = (event) => {
    event.preventDefault();
  };

  const toggleSidebar = () => {
    setIsMini(!isMini);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const isArtistsPage = location.pathname.startsWith('/artist')
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery)
    if (onSearch) {
      onSearch(newQuery)
    }
  }

  return (
    <>
      <div className="over-total" onContextMenu={openContextMenu}>
        <div className="total-container">
          {isMini ? (
            <LeftSideBar toggleSidebar={toggleSidebar} />
          ) : (
            <LeftSideBarMini toggleSidebar={toggleSidebar} />
          )}
          <main
            className="container"
            style={{
              width: isMini ? "calc(100% - 680px)" : "calc(100% - 340px)",
            }}
          >
            <header className={isArtistsPage ? 'nobackground' : ''}>
              <div className="inner-header">
                <div className="left-header">
                  <button onClick={handleBack}>
                    <img src="/icons/previous-page.svg" />
                  </button>
                  <button onClick={handleForward}>
                    <img src="/icons/next-page.svg" />
                  </button>
                  {showInput && (
                    <input
                    value={query}
                    onChange={handleInputChange}
                      type="text"
                      placeholder="Search..."
                    />
                  )}
                </div>
                <div className="right-header">
                  {showExploreButton && (
                    <button className="explore-btn">
                      <span>Explore Premium</span>
                    </button>
                  )}
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
                  <button className="profile-btn" onClick={handleModal}>
                    <img src={profileImage} className="profile-image" />
                  </button>
                  {openModal && (
                    <div className="header-profile-modal" onClick={handleModal}>
                      <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Link className="profile-link" to="/profile">
                          <button>Profile</button>
                        </Link>
                        <Link className="logout-link" to="/login">
                          <button>Log-out</button>
                        </Link>

                      </div>
                    </div>
                  )}
                </div>
              </div>
            </header>
            {<Outlet />}
            <footer>
              <div className="footer-top">
                <div className="company links-column">
                  <span>Company</span>
                  <a href="https://www.spotify.com/uz/about-us/contact/">
                    About
                  </a>
                  <a href="https://www.lifeatspotify.com/">Jobs</a>
                  <a href="https://newsroom.spotify.com/">For the Record</a>
                </div>
                <div className="communities links-column">
                  <span>Communities</span>
                  <a href="https://artists.spotify.com/home">For Artists</a>
                  <a href="https://developer.spotify.com/">Developers</a>
                  <a href="https://ads.spotify.com/en-US/">Advertising</a>
                  <a href="https://investors.spotify.com/home/default.aspx">
                    Investors
                  </a>
                  <a href="https://spotifyforvendors.com/">Vendors</a>
                </div>
                <div className="useful-links links-column">
                  <span>Useful Links</span>
                  <a href="https://support.spotify.com/uz/">Support</a>
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
                      <img src="/icons/instagram.svg" alt="Instagram" />
                    </button>
                  </a>
                  <a
                    href="https://x.com/spotify"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="twitter">
                      <img src="/icons/twitter.svg" alt="Twitter" />
                    </button>
                  </a>
                  <a
                    href="https://www.facebook.com/Spotify"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="facebook">
                      <img src="/icons/facebook.svg" alt="Facebook" />
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
                  <a href="#" className="singer-name sidebar-artist-names">
                    Singer Name
                  </a>
                </div>
                <button>
                  <img src="/icons/plus-circle.svg" alt="Add" />
                </button>
              </div>
            </div>
            <div className="about-the-artist">
              <div className="singer-img">
                <div className="singer-img-over">
                  <a href="#" className="sidebar-artist-names">
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
                  <a href="#" className="sidebar-artist-names">
                    Singer Name
                  </a>
                  <span> description</span>
                </p>
              </div>
            </div>
          </aside>
        </div>

        <div className="player">
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
              <img src="/icons/maximize.svg" alt="Maximize/Minimize" />
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

        <div className="tools">
          <Link to="/" id="home-btn">
            <button
              className={location.pathname === "/" ? "active-button" : ""}
            >
              <img
                src={
                  location.pathname === "/"
                    ? "/icons/home-active.svg"
                    : "/icons/home.svg"
                }
              />
              <span>Home</span>
            </button>
          </Link>
          <Link to="/Search" id="search-btn">
            <button
              className={location.pathname === "/Search" ? "active-button" : ""}
            >
              <img
                src={
                  location.pathname === "/Search"
                    ? "/icons/search-active.svg"
                    : "/icons/search.svg"
                }
              />
              <span>Search</span>
            </button>
          </Link>
          <button className="lib">
            <img src="/icons/library.svg" alt="library" />
            <span>Library</span>
          </button>
          <Link to="/DownloadMobile" className="download">
            <button
              style={{
                display:
                  location.pathname === "/DownloadMobile" ? "none" : "block",
              }}
            >
              <img src="/icons/logoforMobile.svg" alt="logo" />
              <span>Download</span>
            </button>
          </Link>
        </div>
      </div>
      {/* <div className="modal-container"></div> */}
    </>
  );
};

export default Layout;
