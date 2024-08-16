function Songs() {
    return (
        <div className="song">
            <div className="left-song">
                <span className="number">0</span>
                <div className="img">
                    <img src="/images/picture.jpg" alt="Song" />
                </div>
                <a href="#" className="title">Song Title</a>
            </div>
            <div className="popularity">
                <span>0 / 100</span>
            </div>
            <div className="duration">
                <span>0:00</span>
            </div>
        </div>
    )
}

export default Songs