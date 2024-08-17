function Songs({ item, number }) {
  console.log(item.track.duration_ms);
  function formatDuration(durationMs) {
    const totalSeconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${formattedSeconds}`
  }
  const formattedDuration = formatDuration(item.track.duration_ms)
  return (
    <div className="song">
      <div className="left-song">
        <span className="number">{number}</span>
        <div className="img">
          <img src={item.track.album.images[0].url} alt="Song" />
        </div>
        <a href="#" className="title">
          {item.track.album.name}
        </a>
      </div>
      <div className="popularity">
        <span>{item.track.popularity} / 100</span>
      </div>
      <div className="duration">
        <span>{formattedDuration}</span>
      </div>
    </div>
  );
}

export default Songs;
