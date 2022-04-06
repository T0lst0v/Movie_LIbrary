import React from "react";
import "../styles/infoCard.css";

class Card extends React.Component {
  render() {
    let movies = this.props.filteredMovies.length === 0 ? this.props.allMovies : this.props.filteredMovies;

    return (
      <div className="info-card-container">
        <div className="info-card-list">
          {movies.map((movie, index) => {
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
