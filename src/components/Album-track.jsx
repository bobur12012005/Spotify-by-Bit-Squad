function Album_Track({item,number}) {
    console.log(item);
    
    function formatDuration(durationMs) {
        const totalSeconds = Math.floor(durationMs / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
    
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    
        return `${minutes}:${formattedSeconds}`
      }
      const track = item.track || item
      const formattedDuration = formatDuration(track.duration_ms || 0);
      return (
        <div className="song">
          <div className="left-song">
            <span className="number xs:!hidden">{number}</span>
            <div className="img" style={{display:"none"}}>
              <img src={track.album?.images[0]?.url || '/images/note.jpg'} alt="Song" />
            </div>
            <a  href="#" className="title xxs:text-xs">
              {track.name || 'Unknown Album'}
            </a>
          </div>
          <div className="popularity xs:!hidden" style={{display:"none"}}>
            <span>{track.popularity ? `${track.popularity} / 100` : 'No popularity data'}</span>
          </div>
          <div className="duration">
            <span>{formattedDuration}</span>
          </div>
        </div>
      )
}

export default Album_Track;