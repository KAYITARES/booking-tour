import React from "react";
import logo from "../assets/images/logo.jpeg";
import "./navbar.css";

const Nav = () => {
  return (
    <div className="nav">
      <img src={logo} alt="Rwanda booking tour logo" className="logo-img" />
      <div className="navigation-links">
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/about-Us" className="nav-link">
              About-Us
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Contact-Us
            </a>
          </li>

          <li>
            <a href="" className="nav-link">
              Gallery
            </a>
          </li>
          <li>
            <a href="" className="nav-link link-green">
              Sign-In
            </a>
          </li>

          <li>
            <a href="" className="nav-link btn-link">
              Tours
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
