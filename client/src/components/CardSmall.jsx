import React from "react";

import "../styles/cardSmall.css";
const apiKey = process.env.REACT_APP_OMDP_KEY;
const urlOmdb = `https://www.omdbapi.com/?apikey=${apiKey}`;

function Card(props) {
  // TODO: error prevent - if movies was fetch and passed successful
  const movies = props.movieArr ? props.movieArr : [];

  const onSubmit = async (e) => {
    const res = await fetch(`${urlOmdb}&i=${e}`);
    const movie = await res.json();
    props.movieSelect(movie);
  };

  return (
    <div className="card-small-list">
      {movies.map((movie, index) => {
        return (
          <div className="card-small" key={index}>
            <img className="movie-cover" src={movie.Poster} alt="" />
            <p className="movie-title">{movie.Title}</p>
            <p className="movie-year">{movie.Year} year</p>
            <div className="space-filler"></div>
            <button className="btn-movie-select" onClick={() => onSubmit(movie.imdbID)}>
              Select
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
