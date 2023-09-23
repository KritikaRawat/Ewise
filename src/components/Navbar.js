import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Are you a Seller/Buyer?
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="../screens/home.js">Buyer</Dropdown.Item>
              <Dropdown.Item href="#/seller">Seller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </div>
  );
}
