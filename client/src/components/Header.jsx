import React from "react";
import { FaUserAltSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import { connect } from "react-redux";

function Header(props) {
  return (
    <header>
      <div className="header">
        <div className="brand">
          <NavLink to="/dashboard">
            <h1>Movie Library</h1>
          </NavLink>
        </div>
        <div className="nav-container">
          <ul className="navigation">
            <li>
              <NavLink to="/dashboard" className={(navData) => (navData.isActive ? "active" : "none")}>
                All Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/add">Add Movie</NavLink>
            </li>
          </ul>
          <ul className="profile">
            <li>{props.user}</li>
            <li className="icon">
              <NavLink to="/logout">
                <FaUserAltSlash />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  user: "Anonymous",
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Header);
