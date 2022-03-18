import React from "react";
import "../styles/cardBig.css";
import { AiOutlinePicture } from "react-icons/ai";

function CardBig(props) {
  //error prevent - if movies was fetch and passed successful
  const movie = props.movie;
  console.log("from Big card:");
  console.log(movie);
  // console.log(movie.Ratings[0].Value);

  //sending to DB
  const onSubmit = async (e) => {
    const token = localStorage.getItem("jwt");
    //https://dc-movie-library.herokuapp.com/db/movie/add
    // http://localhost:8000/db/movie/add
    const res = await (
      await fetch("/db/movie/add/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          imdbID: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          // type: movie.Type,
          genres: movie.Genre,
          imdbRating: movie.imdbRating,
          director: movie.Director,
          actors: movie.Actors,
          plot: movie.Plot,
          img_url: movie.Poster,
        }),
      })
    ).json();

    alert(res.message);
  };

  return (
    <div className="card-big-container">
      <div className="card-big">
        <div className="card-big-img">{props.movie && <img src={movie.Poster} alt="movie poster" />}</div>
        <div className="movie-info">
          <h3>{movie.Title}</h3>
          <span className="card-big-year">
            <h5>{movie.Year}</h5>
          </span>
          <span className="card-big-director">
            Director:<h4> {movie.Director}</h4>
          </span>
          <h5>{movie.Genre}</h5>
          <span className="card-big-rating">
            IMD &nbsp;
            {/* {props.movie && <h5>{movie.Ratings.length >= 1 ? movie.Ratings[0].Value : "-"}</h5>} */}
          </span>
          <p className="card-big-plot">{movie.Plot}</p>

          <div className="card-big-btn-container">
            <button className="btn-edit">add Note</button>
            <button className="btn-save" onClick={onSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBig;
