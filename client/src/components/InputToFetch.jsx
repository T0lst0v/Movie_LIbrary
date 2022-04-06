import "../styles/inputToFetch.css";
import React from "react";

const apiKey = process.env.REACT_APP_OMDP_KEY;
const urlOmdb = `https://www.omdbapi.com/?apikey=${apiKey}`;

function InputToFetch(props) {
  const [movie, setMovie] = React.useState({
    title: "",
    year: "",
  });

  const { title, year } = movie;

  const onChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    function removeSpaces(val) {
      let noSpaces = val.trim(); //extra step if space needed to be replaced (not just removed)
      return noSpaces.split(" ").join("+");
    }

    const titleNoSpaces = removeSpaces(movie.title);

    // const titleNoSpaces = (movie.title)=> ((movie.title).trim).split(" ").join("+");

    const response = await fetch(`${urlOmdb}&y=${movie.year}&s=${titleNoSpaces}`);
    const moviesArr = await response.json();
    props.onChange(moviesArr.Search);

    // props.movieSelect(moviesArr.Search[0]); //display 1st movie founded with full info
  };

  return (
    <div className="fetch-container">
      <form onSubmit={onSubmit} className="fetch">
        <input type="search" placeholder="Movie Title" name="title" value={title} onChange={onChange}></input>
        <input type="search" placeholder="Year" name="year" value={year} onChange={onChange}></input>
        <button className="btn-fetch" onSubmit={onSubmit}>
          Find
        </button>
      </form>
    </div>
  );
}

export default InputToFetch;
