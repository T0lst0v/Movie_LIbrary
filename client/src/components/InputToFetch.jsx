import "../styles/inputToFetch.css";
import React from "react";

const apiKey = process.env.REACT_APP_OMDP_KEY;
const urlOmdb = `http://www.omdbapi.com/?apikey=${apiKey}`;

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
    const response = await fetch(`${urlOmdb}&y=${movie.year}&s=${movie.title}`);
    const moviesArr = await response.json();
    props.onChange(moviesArr.Search);
    // console.log(moviesArr.Search);
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
