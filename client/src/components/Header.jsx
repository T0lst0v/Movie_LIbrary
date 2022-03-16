import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({ text }) {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <Link to="/">{text}</Link>
        </div>
        <ul>
          <li>
            <Link to="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              <FaUser />
              Register
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Default",
};

export default Header;
