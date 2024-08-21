import { Link } from "react-router-dom"

function SearchMusics() {
  return (
    <Link className="song">
      <div className="left-song">
        <div className="img">
          <img src='default-image-url.jpg' />
        </div>
        <span href="#" className="title">
          'Unknown Album'
        </span>
      </div>
      <div className="duration">
        <span>ssss</span>
      </div>
    </Link>
  )
}


export default SearchMusics