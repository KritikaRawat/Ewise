import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../images/logo.png";

export default function NavbarFacility() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <Link className="navbar-brand me-5 ms-5" to="/">
          <img src={logo} />
        </Link>
        <div className="collapse navbar-collapse ms-5" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active ms-5 me-3">
              <Link className="nav-link active" to="/HomeFacility">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            {!localStorage.getItem("authToken") ? (
              <li className="nav-item ms-5 me-3">
                <Link className="nav-link active" to="/">
                  Shop
                </Link>
              </li>
            ) : (
              <li className="nav-item ms-5 me-3">
                <Link className="nav-link active" to="/myOrder">
                  My Marketplace
                </Link>
              </li>
            )}
            <li className="nav-item ms-5 me-3">
              <Link className="nav-link active" to="/blogs">
                Blog
              </Link>
            </li>
            <li className="nav-item ms-5 me-3">
              <Link className="nav-link active" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item ms-5 me-3">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="mr-3" style = {{ marginRight: "20px"}}>
            <div
              className="btn bg-info mx-1"
              style={{ textDecoration: "none", color: "white" }}
            >
              Facility
            </div>
            {!localStorage.getItem("authToken") ? (
              <li className="nav-item ms-5 me-3">
                <Link className="nav-link active" to="/home">
                  Login/Signup
                </Link>
              </li>
            ) : (
              <div
                className="btn bg-danger mx-1"
                style={{ textDecoration: "none", color: "white"}}
                onClick={handleLogout}
              >
                Logout
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
