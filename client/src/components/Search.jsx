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
    console.log("from Serach movies:");
    // console.log(this.props.movies);
    this.setState({ titleSearch: ev.target.value });
    const movies = this.props.movies;
    const titleSearch = ev.target.value;

    const filteredMovies = movies.filter((movies) => {
      return movies.m_title.toLowerCase().includes(titleSearch.toLowerCase()) || movies.director.toLowerCase().includes(titleSearch.toLowerCase());
    });

    this.props.onSearchCompleted(filteredMovies);
  };

  render() {
    // const books = this.props.books;
    // const titleSearch = this.state.titleSearch;

    // const filteredBooks = books.filter((books) => {
    //   return books.title.toLowerCase().includes(titleSearch.toLowerCase()) || books.author.toLowerCase().includes(titleSearch.toLowerCase());
    // });

    return (
      <div>
        <div id="search">
          <input type="search" placeholder="Movie Title" onChange={this.handleSearch}></input>
        </div>
      </div>
    );
  }
}

export default Search;
