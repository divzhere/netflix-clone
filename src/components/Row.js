import React, { useState, useEffect } from "react";
import axios from "../axios";

const base_url_img = "https://image.tmdb.org/t/p/original";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="poster_row">
        {movies.map((movie, key) => (
          <img
            key={key}
            src={base_url_img + movie.poster_path}
            alt={movie.name}
            className="poster"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
