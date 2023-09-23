import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import SellerLogin from "./screens/SellerLogin";
import SellerSignup from "./screens/SellerSignup";
import BuyerLogin from "./screens/BuyerLogin";
import BuyerSignup from "./screens/BuyerSignup";
import Home from "./screens/Home";

function App() {
  const [userType, setUserType] = useState("");

  const handleUserTypeSelect = (selectedType) => {
    setUserType(selectedType);
  };

  return (
<Router>
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
                <li className="nav-item">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={userType || "Select User Type"}
                    onSelect={handleUserTypeSelect}
                    variant="primary"
                  >
                    <Dropdown.Item eventKey="buyer">Buyer</Dropdown.Item>
                    <Dropdown.Item eventKey="seller">Seller</Dropdown.Item>
                  </DropdownButton>
                </li>
                {userType === "buyer" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/createbuyer">
                      Buyer Signup
                    </Link>
                  </li>
                )}
                {userType === "seller" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/createseller">
                      Seller Signup
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/createseller" element={<SellerSignup />} />
          <Route exact path="/createbuyer" element={<BuyerSignup />} />
          <Route exact path="/loginbuyer" element={<BuyerLogin />} />
          <Route exact path="/loginseller" element={<SellerLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;