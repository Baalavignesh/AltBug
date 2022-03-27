import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.css";

function NavBar() {
  return (
    <div className="navbar">
      <h1 className="nav-logo">Alt Bug</h1>
      <ul className="nav-list">
        <Link
          to={"/login"}
          style={{ textDecoration: "none" }}
          className="nav-item"
        >
          Features
        </Link>
        <Link
          to={"/login"}
          style={{ textDecoration: "none" }}
          className="nav-item"
        >
          Login
        </Link>

        <Link
          to={"/register"}
          style={{ textDecoration: "none" }}
          className="nav-item signup-button"
        >
          Signup
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
