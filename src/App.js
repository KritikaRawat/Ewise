import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SellerLogin from "./screens/SellerLogin";
import SellerSignup from "./screens/SellerSignup";
import BuyerLogin from "./screens/BuyerLogin";
import BuyerSignup from "./screens/BuyerSignup";
import Home from "./screens/Home";
import BargainPrice from "./screens/BargainPrice";
import Blogs from "./screens/Blogs";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/createseller" element={<SellerSignup />} />
          <Route exact path="/createbuyer" element={<BuyerSignup />} />
          <Route exact path="/loginbuyer" element={<BuyerLogin />} />
          <Route exact path="/loginseller" element={<SellerLogin />} />
          <Route exact path="/auction" element={<BargainPrice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
