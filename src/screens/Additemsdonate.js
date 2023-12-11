import React from "react";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Additemsdonate = () => {
  return (
    <div className="text-center">
      <div>
        <Navigation />
      </div>
      <h1>Add items to donate</h1>
      
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Additemsdonate;

