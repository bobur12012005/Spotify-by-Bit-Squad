import React from 'react'

function Songs({ item, number }) {
  function formatDuration(durationMs) {
    const totalSeconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${formattedSeconds}`
  }
  const track = item.track || item;
  const formattedDuration = formatDuration(track.duration_ms || 0);
  return (
    <div className="song">
      <div className="left-song">
        <span className="number xs:!hidden">{number}</span>
        <div className="img">
          <img src={track.album?.images[0]?.url || 'default-image-url.jpg'} alt="Song" />
        </div>
        <a  href="#" className="title xxs:text-xs">
          {track.album?.name || 'Unknown Album'}
        </a>
      </div>
      <div className="popularity xs:!hidden">
        <span>{track.popularity ? `${track.popularity} / 100` : 'No popularity data'}</span>
      </div>
      <div className="duration">
        <span>{formattedDuration}</span>
      </div>
    </div>
  );
}

export default Songs