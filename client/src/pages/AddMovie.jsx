import React from "react";
import Header from "../components/Header";
import CardSmall from "../components/CardSmall";
import CardBig from "../components/CardBig";
import InputToFetch from "../components/InputToFetch";
import "../styles/dashboard.css";
import Carousel from "../utils/Carousel";
import { HiArrowNarrowUp } from "react-icons/hi";

function Dashboard() {
  const [movieArr, setMovieArr] = React.useState("");
  const [movie, setMovie] = React.useState("");

  function handleMovieFetch(newValue) {
    setMovieArr(newValue);
    setMovie(newValue[0]);
  }

  return (
    <>
      <Header />
      <InputToFetch movieArr={movieArr} onChange={handleMovieFetch} movieSelect={setMovie} />

      {movieArr ? (
        <>
          <CardBig movie={movie} />
          <Carousel movieArr={movieArr} movie={movie} movieSelect={setMovie} />
        </>
      ) : (
        <div className="arrow-helpers">
          <HiArrowNarrowUp />
          <div className="arrow-spacer">find movie</div>
          <HiArrowNarrowUp />
        </div>
      )}

      {/* <CardSmall movieArr={movieArr} movie={movie} movieSelect={setMovie} /> */}
    </>
  );
}

export default Dashboard;
