import React from "react";
import "../styles/cardSmall.css";
const apiKey = process.env.REACT_APP_OMDP_KEY;
const urlOmdb = `https://www.omdbapi.com/?apikey=${apiKey}`;

export default function Card(props) {
  console.log("from carusel Card");
  console.log(props);

  const onSubmit = async (e) => {
    const res = await fetch(`${urlOmdb}&i=${e}`);
    const movie = await res.json();
    props.movieSelect(movie);
    console.log(movie);
  };

  return (
    <div role="button" tabIndex={0} className="card-small">
      <img className="movie-cover" src={props.movie.Poster} alt="" />
      <p className="movie-title">{props.movie.Title}</p>
      <p className="movie-year">{props.movie.Year} year</p>
      <div className="space-filler"></div>

      <button className="btn-movie-select" onClick={() => onSubmit(props.movie.imdbID)}>
        Select
      </button>
    </div>
  );
}

//  style={{
//         border: "1px solid",
//         display: "inline-block",
//         margin: "0 10px",
//         width: "160px",
//         userSelect: "none",
//       }}
