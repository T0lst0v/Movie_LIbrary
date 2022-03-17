import React from "react";
import "../styles/cardBig.css";

function Card(props) {
  //error prevent - if movies was fetch and passed successful
  const movie = props.movie;
  console.log("from Big card:");
  console.log(movie);

  //sending to DB
  const onSubmit = (e) => {};

  return (
    <div className="card-big-container">
      <div className="card-big">
        <div className="card-big-img">
          <img src={movie.Poster} alt="movie poster" />
        </div>
        <div className="movie-info">
          <h3>{movie.Title}</h3>
          <p className="card-big-year">
            <h5>{movie.Year}</h5>
          </p>
          <p className="card-big-director">
            Director:<h4> {movie.Director}</h4>
          </p>

          <div className="card-big-btn-container">
            <button className="btn-edit">Edit</button>
            <button className="btn-save">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
