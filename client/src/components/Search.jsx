import React from "react";
import "../styles/search.css";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      titleSearch: "",
    };
  }

  handleSearch = (ev) => {
    this.setState({ titleSearch: ev.target.value });
    const movies = this.props.movies;
    const titleSearch = ev.target.value;

    const filteredMovies = movies.filter((movies) => {
      return movies.m_title.toLowerCase().includes(titleSearch.toLowerCase()) || movies.director.toLowerCase().includes(titleSearch.toLowerCase());
    });

    this.props.onSearchCompleted(filteredMovies);
  };

  render() {
    return (
      <div>
        <div id="search">
          <input type="search" placeholder="search by Movie Title or Director" onChange={this.handleSearch}></input>
        </div>
      </div>
    );
  }
}

export default Search;
