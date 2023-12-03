import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import { Link } from "react-router-dom";
export default function Blogs() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="d-flex" style = {{marginLeft: 90, marginTop: 80}}>
        <div className="card m-2 ms-5 me-5" style={{ width: 450, height: 400, backgroundColor: "white", boxShadow: "10px 14px 10px rgba(0, 0, 0, 0.2)" }}>
          <img className="card-img-top" src={blog1} alt="Card image cap" />
          <div className="card-body" style = {{color: "black"}}>
            <h5 className="card-title">E-Waste</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/blog1" className="btn btn-info">
              Read More
            </Link>
          </div>
        </div>
        <div className="card m-2 ms-5" style={{ width: 450, height: 400 , backgroundColor: "white", boxShadow: "10px 14px 10px rgba(0, 0, 0, 0.2)"}}>
          <img className="card-img-top" src={blog2} alt="Card image cap" />
          <div className="card-body" style = {{color: "black"}}>
            <h5 className="card-title">Effects of Wrong Disposal</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/blog2" className="btn btn-info">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
