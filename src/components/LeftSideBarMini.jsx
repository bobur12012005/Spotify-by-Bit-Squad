import React from 'react'
import Singers from './Singers'
import { artists } from '../App'
import { Link } from 'react-router-dom'
import SingersMini from './SingersMini'

function LeftSideBarMini({toggleSidebar}){
    return(
    <>
    <aside className="left-sidebar-mini">
		<div className="left-sidebar-top-mini">
			<Link to="/" id="home-btn">
				<button className={location.pathname === '/' ? 'active-button' : ''}>
					<img src={location.pathname === '/' ? '/icons/home-active.svg' : '/icons/home.svg'} />
					{/* <span>Home</span> */}
				</button>
			</Link>
			<Link to="/Search" id="search-btn">
				<button className={location.pathname === '/Search' ? 'active-button' : ''}>
					<img src={location.pathname === '/Search' ? '/icons/search-active.svg' : '/icons/search.svg'} />
					{/* <span>Search</span> */}
				</button>
			</Link>
		</div>
		<div className="left-sidebar-bottom-mini">
			<div className="library-controller">
				<div className="library-controller-top">
					<div className="library-controller-top-left">
						<button className="library" onClick={toggleSidebar}>
							<img
								src="/icons/library-active.svg"
								alt="Library"
							/>
							{/* <span>Your Library</span> */}
						</button>
					</div>
					{/* <div className="library-controller-top-right">
						<button>
							<span>+</span>
						</button>
						<button>
							<img src="/icons/right.svg" />
						</button>
					</div> */}
				</div>
				{/* <div className="library-controller-bottom">
					<button>Playlists</button>
					<button>Artists</button>
				</div> */}
			</div>
			<div className="singers-over-container-mini">
				{/* <div className="over-cont-top">
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
				</div> */}
				<div className="singers-container">
					{artists.map((artist) => (
						<SingersMini
							key={artist.id}
							item={artist}
						/>
					))}
				</div>
			</div>
		</div>
	</aside>
    </>
    )
}

export default LeftSideBarMini