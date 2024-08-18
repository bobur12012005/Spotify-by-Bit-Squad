import React from "react"
import "../media/App-media.css"

function Download() {

    return (
        <>
            <section className="image">
                <img src="https://open.spotifycdn.com/cdn/images/devices/mac.3fbeb8c6.png" alt="main image" />
                <h1>Установи приложение Spotify и слушай любимую музыку на компьютере.</h1>
                <button>
                    <a href="https://www.spotify.com/download">
                        Скачать Spotify бесплатно
                    </a>
                </button>
            </section>
        </>
    )
}

export default Download