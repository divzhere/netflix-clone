import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../util";

const base_url_img = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchMovie();
  }, []);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
      }}
    >
      <div className="banner_content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{movie?.overview}</h1>
      </div>
      <div className="banner_fade"></div>
    </header>
  );
}

export default Banner;
