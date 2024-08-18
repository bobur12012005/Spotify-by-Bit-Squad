import React from "react"

function SingersMini({ item }) {
    return (
        <a href='#' className="left-sidebar-singer">
            <div className="singer">
                <div className="data-side">
                    <div className="singer-img">
                        <img src={item.image} />
                    </div>
                    {/* <div className="singer-data">
                        <div className="name">{item.name}</div>
                        <div className="proficiency">{item.type}</div>
                    </div> */}
                </div>
                <div className="song-playing-info">
                    <img src="/icons/sound.svg" alt="Sound Icon" />
                </div>
            </div>
        </a>
    )
}

export default SingersMini