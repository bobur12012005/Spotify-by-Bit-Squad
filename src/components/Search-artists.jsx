import { Link } from "react-router-dom";

function SearchArtist({ item }) {
  return (
    <div className="results-link-container">
      <Link to={`/artist/${item.id}`} className="results-link">
        <div className="main-result-place">
          <div className="result-img">
            <img
              src={item.images[0]?.url || "/images/picture.jpg"}
              alt={item.name}
            />
          </div>
          <span className="result-name">{item.name}</span>
          <span className="result-type">Artist</span>
        </div>
      </Link>
    </div>
  );
}

export default SearchArtist;
