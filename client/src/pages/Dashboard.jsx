import React from "react";
import Header from "../components/Header";
import "../styles/dashboard.css";

import Search from "../components/Search";
import InfoCards from "../components/InfoCards";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwt");

    fetch("/db/movie/all/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((movies) => {
        this.setState({ movies: movies.allMoviesOfUser });
      });
  }

  handleSearchCompleted = (filteredMovies) => {
    this.setState({ filteredMovies: filteredMovies });
  };

  render() {
    return (
      <>
        <Header />
        <Search movies={this.state.movies} onSearchCompleted={this.handleSearchCompleted} />
        <InfoCards filteredMovies={this.state.filteredMovies} allMovies={this.state.movies} />
      </>
    );
  }
}

export default Dashboard;
