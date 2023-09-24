import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand me-5 ms-5" to="/blogs">
          <img src={logo} />
        </Link>
        <div className="collapse navbar-collapse ms-5" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active ms-5 me-3">
              <Link className="nav-link" to="/">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item ms-5 me-3">
              <Link className="nav-link" to="/getSellers">
                Shop
              </Link>
            </li>
            <li className="nav-item ms-5 me-3">
              <Link className="nav-link" to="/blogs">
                Blog
              </Link>
            </li>
            <li className="nav-item ms-5 me-3">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item ms-5 me-3">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <Dropdown className="ms-5">
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                Are you Link Seller/Buyer?
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-dark ms-4 mt-2">
                <Dropdown.Item className="nav-item bg-dark">
                  <Link className="nav-link" to="/createbuyer">
                    Buyer
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="nav-link" to="/createseller">
                    Seller
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
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
