import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import homeImg from "../images/home.png";
import location from "../images/location.png";
import "../styles/bargain.css";

export default function home1() {
  const imgStyle = {
    position: "fixed",
    top: 100,
    right: 50,
  };
  return (
    <div className="scrollable-container">
      <div>
        <Navbar />
      </div>
      <div className="h-400" style={{ marginTop: 108, marginLeft: 100 }}>
        <form className="d-flex mt-5 ms-5" style={{ width: 600 }}>
          <input
            style={{ borderRadius: 20 }}
            className="form-control mr-2"
            type="search"
            placeholder="What Are You Looking For?"
            aria-label="Search"
          />
          <button
            style={{ borderRadius: 20 }}
            className="btn btn-info ms-3"
            type="submit"
          >
            <Link
              to="/getSellers"
              style={{ textDecoration: "none", color: "white" }}
            >
              Search
            </Link>
          </button>
        </form>
        <div>
          <img
            className="img-dustbin"
            src={homeImg}
            alt="Home"
            style={imgStyle}
          />
        </div>
        <br />
        <br />
        <div style={{ fontFamily: "Plus Jakarta Sans", marginRight: 500 }}>
          <h1>Make Every</h1>
          <h1>Gadget Count!</h1>
        </div>
        <br />
        <div className="d-flex">
          <input
            className="form-control mr-2"
            type="search"
            placeholder="Location"
            aria-label="Search"
            style={{ width: 200, marginLeft: 240 }}
          />
          <div>
            <img src={location} style={{ height: 30 }} className="ms-2"></img>
          </div>
        </div>
        <br />
        <div style={{ marginRight: 480 }}>
          <button type="button" class="btn btn-info">
            <Link
              to="/getSellers"
              style={{ textDecoration: "none", color: "white" }}
            >
              Explore E-Wise
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}