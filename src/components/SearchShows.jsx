import { Link } from "react-router-dom";

function SearchShow({ item }) {
    const imageUrl = (item.images && item.images.length > 0) ? item.images[0].url : 'default-image-url.jpg';
    return (
        <Link to={`/Show/${item.id}`}>
            <div className="content">
                <div className="content-img">
                    <img src={imageUrl} alt={item.name} />
                </div>
                <div className="content-data">
                    <span className="title">{item.name}</span>
                    <span className="name">Show</span>
                </div>
                <button className="play-pause">
                    <img src="/icons/play.svg" alt="Play" />
                </button>
            </div>
        </Link>
    );
}

export default SearchShow;