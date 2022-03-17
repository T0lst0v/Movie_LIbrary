import React from "react";
import "../styles/cardBig.css";

function CardBig(props) {
  //error prevent - if movies was fetch and passed successful
  const movie = props.movie;
  console.log("from Big card:");
  console.log(movie);
  // console.log(movie.Ratings[0].Value);

  //sending to DB
  const onSubmit = async (e) => {
    const token = localStorage.getItem("jwt");
    const res = await (
      await fetch("https://dc-movie-library.herokuapp.com/db/movie/add", {
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
    console.log(res);
  };

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
          <p className="card-big-genre">
            <h5>{movie.Genre}</h5>
          </p>
          <p className="card-big-rating">
            IMD:
            {props.movie && <h5>{movie.Ratings.length >= 1 ? movie.Ratings[0].Value : "-"}</h5>}
          </p>
          <p className="card-big-plot">{movie.Plot}</p>
          <div className="space-filler"></div>
          <div className="card-big-btn-container">
            {/* <button className="btn-edit">Edit</button> */}
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
