import React from "react";
import "../styles/cardSmall.css";
const apiKey = process.env.REACT_APP_OMDP_KEY;
const urlOmdb = `https://www.omdbapi.com/?apikey=${apiKey}`;

function Card(props) {
  //error prevent - if movies was fetch and passed successful
  const movies = props.movieArr ? props.movieArr : [];
  console.log("from cards");
  console.log(movies);

  //selecting movie
  // const [movie, setMovie] = React.useState("");

  const onSubmit = async (e) => {
    const res = await fetch(`${urlOmdb}&i=${e}`);
    const movie = await res.json();
    props.movieSelect(movie);
    console.log(movie);
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
