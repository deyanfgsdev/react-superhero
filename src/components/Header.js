import "../sass/header.scss";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          SuperHero
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/marvel">
                Marvel Comics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dc">
                DC Comics
              </Link>
            </li>
          </ul>
          <form className="search-form">
            <input
              className="form-control"
              type="search"
              placeholder="Search SuperHero..."
              aria-label="Search"
            />
            <button className="btn button-search" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
