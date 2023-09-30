import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand me-5 ms-5" to="/home">
          <img src={logo} />
        </Link>
        <div className="collapse navbar-collapse ms-5" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active ms-5 me-5">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item ms-5 me-5">
              <Link className="nav-link" to="/getSellers">
                Shop
              </Link>
            </li>
            <li className="nav-item ms-5 me-5">
              <Link className="nav-link" to="/blogs">
                Blog
              </Link>
            </li>
            <li className="nav-item ms-5 me-5">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item ms-5 me-5">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <button
              style={{ borderRadius: 3, width: 150}}
              className="btn btn-info ms-5"
              type="submit"
            >
              <Link
                to="/getSellers"
                style={{ textDecoration: "none", color: "white" }}
              >
                Buyer
              </Link>
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}