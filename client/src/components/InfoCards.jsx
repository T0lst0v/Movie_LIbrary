import React from "react";
import "../styles/infoCard.css";

class Card extends React.Component {
  render() {
    console.log(this.props.filteredMovies);
    console.log(this.props.allMovies);
    console.log("------------");
    let movies = this.props.filteredMovies.length === 0 ? this.props.allMovies : this.props.filteredMovies;

    return (
      <div className="info-card-container">
        <div className="info-card-list">
          {movies.map((movie, index) => {
            console.log(movie);
            return (
              <div className="info-card" key={index}>
                <div className="info-movie-cover">
                  <img src={movie.img_url} alt="" />
                </div>
                <div className="info-card-info">
                  <p className="info-movie-title">{movie.m_title}</p>
                  <p className="info-movie-year">{movie.m_year}</p>
                  <p className="info-movie-director">{movie.director}</p>
                  <p className="info-movie-genres">{movie.genres}</p>
                  <p className="info-movie-score">IMDB - {movie.imdb_rating}</p>
                  <p className="info-movie-plot">{movie.plot}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Card;

// class Card extends React.Component {
//   render() {
//     //error prevent - if movies was fetch and passed successful
//     const movies = this.props.movie ? this.props.movie : [];
//     console.log("from cards");
//     console.log(movies);

//     return (
//       <div className="card-small-list">
//         {movies.map((movie, index) => {
//           return (
//             <div className="card-small" key={index}>
//               <img className="movie-cover" src={movie.Poster} alt="" />
//               <p className="movie-title">{movie.Title}</p>
//               <p className="movie-year">{movie.Year} year</p>
//               <div className="space-filler"></div>
//               <button className="btn-movie-select">Select</button>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
