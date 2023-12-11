import React from "react";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Option = () => {
  return (
    <div className="text-center">
      <div>
        <Navigation />
      </div>
      <h1>Explore E-Wise Options</h1>
      <div className="my-4">
        <Link to="/Additemstodonate">
          <button type="button" className="btn btn-primary mx-2">
            Donate
          </button>
        </Link>

        <Link to="/button2">
          <button type="button" className="btn btn-secondary mx-2">
            Recycle/Reuse
          </button>
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Option;

