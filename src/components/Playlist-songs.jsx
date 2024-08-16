function Songs() {
    return (
        <div className="song">
            <div className="left-song">
                <span className="number">1</span>
                <div className="song-animation">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="img">
                    <img src="https://via.placeholder.com/50" alt="Album Art" />
                </div>
                <a href="#" className="title">Song Title</a>
            </div>
            <div className="popularity">
                <span>75 / 100</span>
            </div>
            <div className="duration">
                <span>3:45</span>
            </div>
        </div>
    );
}

export default Songs;