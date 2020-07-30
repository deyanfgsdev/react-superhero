import "../sass/header.scss";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          SuperHero
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Marvel Comics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                DC Comics
              </a>
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
