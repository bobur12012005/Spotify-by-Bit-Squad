import React, { useState } from 'react'

function Songs() {
    const [number, setNumber] = useState(1)

    return (
        <div className="song">
            <div className="left-song">
                <span className="number">{number}</span>
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