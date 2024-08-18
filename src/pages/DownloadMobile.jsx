import React from "react"
import "../media/App-media.css"

function DownloadMobile() {
    return (
        <>     
            <section className="moble-download">
                <div className="block">
                    <img src="/icons/spotifyBlack.svg" alt="icon" />
                    <h3>Скачай приложение Spotify</h3>
                    <p>Ты можешь слушать музыку в мобильном веб-плеере. Он доступен бесплатно, и в нем есть все функции Spotify.</p>
                    <button>
                        <a href="https://www.spotify.com/download">
                            Скачать приложение
                        </a>
                    </button>
                </div>
            </section>
        </>
    )
}

export default DownloadMobile