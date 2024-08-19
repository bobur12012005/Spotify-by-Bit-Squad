import React from "react";

function ModedPlayer(){

    return(
        <>
            <div className="moded-player">
                <div className="moded-player-main">
                    <div className="moded-player-main-header">
                        <img src="/icons/logoforMobile.svg" alt="logo" />
                        <div className="info">
                            <h3>playing from playlist</h3>
                            <span>playlist title</span>
                        </div>
                    </div>
                    <div className="moded-player-main-information-about">
                        <div className="main-img">
                            <img src="/public/images/picture.jpg" alt="music image" />
                        </div>
                        <div className="main-information">
                            <h1 className="title">title</h1>
                            <h4 className="autor">autor</h4>
                        </div>
                    </div>
                    <div className="moded-player-progress">
                        <span className="progress-now">minut</span>
                        <input type="range" />
                        <span className="progress-total">minut</span>
                    </div>
                    <div className="moded-player-tool-bar">
                        gti 
                    </div>
                </div>
            </div>
        </>
    )
}