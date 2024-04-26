import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBarLayout() {
  return (
    <>
      <header className="header_section long_section px-0">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <NavLink className="navbar-brand" to="/client/home">
            <span>Astarion</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    Home <span className="sr-only"></span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/client/about">
                    {" "}
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/client/sells">
                    Sell Posts
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="quote_btn-container">
              <NavLink to="/client/login">
                <span>Login</span>
                <i className="fa fa-user" aria-hidden="true"></i>
              </NavLink>
              {/* <form className="form-inline">
                <button
                  className="btn my-2 my-sm-0 nav_search-btn"
                  type="submit"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
