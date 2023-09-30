// src/components/SellerList.js

// import React, { useEffect, useState } from 'react';

// function SellerList() {
//   const [sellers, setSellers] = useState([]);

//   useEffect(() => {
//     // Fetch sellers data from the backend when the component mounts
//     fetch('http://localhost:5000/api/getsellers') // Assuming your React app is running on the same server as the backend
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           setSellers(data.sellers);
//         } else {
//           console.error('Failed to fetch sellers');
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>List of Registered Sellers</h1>
//       <ul>
//         {sellers.map((seller) => (
//           <li key={seller._id}>
//             Name: {seller.name}, Email: {seller.email}, imglink: {seller.imglink}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SellerList;

import React from "react";
import Navbar from "../components/Navigation"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
// import Card from "../components/Card";
import Image1 from "../images/shop1.png";
import Image2 from "../images/Shop2.jpg";
import Image3 from "../images/Shop3.jpg";
import Image4 from "../images/Shop4.jpg";
import Image5 from "../images/Shop5.jpg";
import Image6 from "../images/Shop6.jpg";

function SellerList() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="d-flex">
        <div className="container mt-5">
          <div className="row">
            <div classList="card">
              <img classList="card-img-top"  style ={{width: 300}} src={Image1} alt="Card image cap" />
              <div classList="card-body">
                <br/>
                <h5 classList="card-title" style = {{color: 'skyblue'}}>E Waste Recyclers, India</h5>
                <p classList="card-text">
                E-Waste Recycling in India is a certified e-waste recycling company that offers a wide range of services, including e-waste collection, transportation, and recycling. They also offer buyback programs for select electronic items.
                </p>
                <Link to="/shop1" classList="btn btn-primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div classList="card">
              <img classList="card-img-top"  style ={{width: 300}} src={Image6} alt="Card image cap" />
              <div classList="card-body">
                <h5 classList="card-title">Shop 2</h5>
                <p classList="card-text">
                  Some quick example text to build on the Shop 1 and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" classList="btn btn-primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div classList="card">
              <img classList="card-img-top"  style ={{width: 300}} src={Image2} alt="Card image cap" />
              <div classList="card-body">
                <h5 classList="card-title">Shop 3</h5>
                <p classList="card-text">
                  Some quick example text to build on the Shop 1 and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" classList="btn btn-primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="container mt-5">
          <div className="row">
            <div classList="card">
              <img classList="card-img-top"  style ={{width: 300}} src={Image3} alt="Card image cap" />
              <div classList="card-body">
                <h5 classList="card-title">Shop 4</h5>
                <p classList="card-text">
                  Some quick example text to build on the Shop 1 and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" classList="btn btn-primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div classList="card">
              <img classList="card-img-top"  style ={{width: 300}} src={Image4} alt="Card image cap" />
              <div classList="card-body">
                <h5 classList="card-title">Shop 5</h5>
                <p classList="card-text">
                  Some quick example text to build on the Shop 1 and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" classList="btn btn-primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div classList="card">
              <img classList="card-img-top"  style ={{width: 300}} src={Image5} alt="Card image cap" />
              <div classList="card-body">
                <h5 classList="card-title">Shop 6</h5>
                <p classList="card-text">
                  Some quick example text to build on the Shop 1 and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" classList="btn btn-primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default SellerList;
