import React from "react";
import Header from "../components/Header";
import "../styles/dashboard.css";

import Search from "../components/Search";
import InfoCards from "../components/InfoCards";
// import Cards from "./components/Cards";

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
    // http://localhost:8000/db/movie/all
    //https://dc-movie-library.herokuapp.com/db/movie/all
    fetch("/db/movie/all/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((movies) => {
        this.setState({ movies: movies.allMoviesOfUser });
        console.log("from Dashboard this.state.movies:");
        console.log(this.state.movies);
      });
  }

  handleSearchCompleted = (filteredMovies) => {
    console.log("from Dashboard  filteredMovies:");
    console.log(filteredMovies);
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
