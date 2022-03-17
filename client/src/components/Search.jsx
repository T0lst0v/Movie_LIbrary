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
    const books = this.props.books;
    const titleSearch = ev.target.value;

    const filteredBooks = books.filter((books) => {
      return books.title.toLowerCase().includes(titleSearch.toLowerCase()) || books.author.toLowerCase().includes(titleSearch.toLowerCase());
    });

    this.props.onSearchCompleted(filteredBooks);
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
