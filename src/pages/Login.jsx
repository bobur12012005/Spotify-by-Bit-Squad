import React, { useEffect } from "react"

const CLIENT_ID = "8d64161f25644fd398c09345cd07e788"
const REDIRECT_URI = "http://localhost:5173"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

const Login = () => {
  useEffect(() => {
    let token = localStorage.getItem("token");
    let hash = location.hash

    if (!token) {
      if (hash) {
        token = hash.split("=")[1].split("&")[0];
        localStorage.setItem("token", token);
        location.assign("/")
      }
    }
  }, [])

  return (
    <>
      <div className="bd">
        <div className="cont">
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-public`}
            className="anim"
          >
            <span>LOG-IN</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default Login