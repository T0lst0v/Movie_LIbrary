import React from "react";
import Header from "../components/Header";
import CardSmall from "../components/CardSmall";
import CardBig from "../components/CardBig";
import InputToFetch from "../components/InputToFetch";
import "../styles/dashboard.css";

function Dashboard() {
  const [movieArr, setMovieArr] = React.useState("");
  const [movie, setMovie] = React.useState("");

  function handleMovieFetch(newValue) {
    setMovieArr(newValue);
  }

  console.log(".....FROM PARENT......");
  console.log(movieArr);
  console.log(movie);
  console.log("...........");

  return (
    <>
      <Header />
      <InputToFetch movieArr={movieArr} onChange={handleMovieFetch} />
      <CardBig movie={movie} />
      <CardSmall movieArr={movieArr} movie={movie} movieSelect={setMovie} />
    </>
  );
}

export default Dashboard;
