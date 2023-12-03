// Card2.js
import React from "react";
import { Link } from "react-router-dom";

function Card2({ title, description, image, buttonText, link }) {
  return (
    <div className="card border-0 shadow-lg" style={{ backgroundColor: "white" }}>
      <img className="card-img-top" style={{ width: "100%" }} src={image} alt="Card cap" />
      <div className="card-body d-flex flex-column" style={{ color: "black" }}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link to={link} className="btn btn-primary" style={{ backgroundColor: "blue", color: "white" }}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default Card2;