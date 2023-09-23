import React from "react";
import Navbar from "../components/Navbar";
import homeImg from "../images/home.png";
import location from "../images/location.png";
import "../styles/bargain.css";

export default function Home() {
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
            Search
          </button>
        </form>
        <img
          className="img-dustbin"
          src={homeImg}
          alt="Home"
          style={imgStyle}
        />
        <br />
        <br />
        <div style={{ fontFamily: "Plus Jakarta Sans", marginRight: 500 }}>
          <h1>Make Every</h1>
          <h1>Gadget Count!</h1>
        </div>
        <br />
        <input
          className="form-control mr-2"
          type="search"
          placeholder="Location"
          aria-label="Search"
          style={{ width: 200, marginLeft: 240 }}
        />
        <br />
        <div className="d-flex" style={{ marginLeft: 260 }}>
          <button type="button" class="btn btn-info">
            Explore E-Wise
          </button>
          <div>
            <img src={location} style={{ height: 30 }} className="ms-2"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
