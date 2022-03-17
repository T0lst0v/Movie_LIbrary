import React from "react";
import Header from "../components/Header";
import "../styles/dashboard.css";

import Search from "../components/Search";
// import Cards from "./components/Cards";

function Dashboard() {
  return (
    <>
      <Header />
      <Search />
      <div>Dashboard</div>
    </>
  );
}

export default Dashboard;
