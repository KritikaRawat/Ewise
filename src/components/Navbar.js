import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../images/logo.png";

export default function Navbar() {
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
              <Link className="nav-link active" to="/">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item active ms-5 me-3">
              <Link className="nav-link active" to="/marketplace">
                Shop
              </Link>
            </li>
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
          <div className="mr-3">
            {!localStorage.getItem("authToken") ? (
              <div>
                <Dropdown className="ms-5" style = {{marginRight: "20px"}}>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Are You A User/Facility?
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-info mt-2" style = {{width: "210px"}}>
                    <Dropdown.Item className="nav-item">
                      <Link className="nav-link" to="/createbuyer" style = {{color: "white"}}>
                        User
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link className="nav-link" to="/createseller"  style = {{color: "white"}}>
                        Facility
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <div style = {{ marginRight: "20px"}}>
                <div
                  className="btn bg-info mx-1"
                  style={{ textDecoration: "none", color: "white", marginRight: "20px" }}
                >
                  User
                </div>
                <div
                  className="btn bg-danger mx-1"
                  style={{ textDecoration: "none", color: "white" }}
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      {/* <nav classNameNameName="navbar navbar-expand-lg bg-body-tertiary">
        <div classNameNameName="container-fluid">
          <Link classNameNameName="navbar-brand" to="../screens/home.js">
            <img src = {logo} alt = "logo"/>
          </Link>
          <div classNameNameName="collapse navbar-collapse" id="navbarNav">
            <ul classNameNameName="navbar-nav">
              <li classNameNameName="nav-item">
                <Link classNameNameName="nav-Link" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/getsellers">
                  List
                </Link>
              </li>
            </ul>
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Are you Link Seller/Buyer?
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item to="../screens/home.js">Buyer</Dropdown.Item>
              <Dropdown.Item to="#/seller">Seller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav> */}
    </div>
  );
}
