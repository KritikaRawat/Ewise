import React, { useState } from "react";
import { Link } from "react-router-dom";
import homeImg from "../images/about.png";
import "../styles/signup.css"; // Import the shared styles

export default function SellerSignup() {
  const [sellerCredential, setSellerCredential] = useState({
    name: "",
    email: "",
    password: "",
    sellerType: "",
    Address: "",
    geolocation: "",
    imglink: "",
    PhoneNum: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createseller", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: sellerCredential.name,
        email: sellerCredential.email,
        password: sellerCredential.password,
        sellerType: sellerCredential.sellerType,
        Address: sellerCredential.Address,
        mapLink: sellerCredential.geolocation,
        imglink: sellerCredential.imglink,
        PhoneNum: sellerCredential.PhoneNum,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
  };

  const onChange = (event) => {
    setSellerCredential({
      ...sellerCredential,
      [event.target.name]: event.target.value,
    });
  };

  const formStyles = `
    body {
      background-color: #f8f9fa;
      font-family: 'Arial', sans-serif;
    }

    .container {
      max-width: 600px;
      margin: 15px auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    .signup-form h2 {
      color: #333;
      margin-bottom: 30px;
      font-family: 'Arial', sans-serif;
    }

    label {
      font-family: 'Arial', sans-serif;
      font-weight: bold;
      color: #555;
    }

    .form-control {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-family: 'Arial', sans-serif;
      background-color: #ffffff;
    }

    .btn {
      padding: 10px 20px;
      margin-top: 15px;
      border-radius: 4px;
      text-decoration: none;
      cursor: pointer;
      font-family: 'Arial', sans-serif;
    }

    .btn-primary {
      background-color: #007bff;
      border-color: #007bff;
      color: #fff;
    }

    .btn-danger {
      background-color: #dc3545;
      border-color: #dc3545;
      color: #fff;
    }

    .image-style {
      width: 100%;
      max-width: 400px;
      height: auto;
      display: block;
      margin: 0 auto;
    }
  `;

  return (
    <>
      <style>{formStyles}</style>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="signup-form">
              <h2>Create a Seller Account</h2>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  name="name"
                  value={sellerCredential.name}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  value={sellerCredential.email}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  name="password"
                  value={sellerCredential.password}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sellerType">Seller Type</label>
                <select
                  className="form-control"
                  id="sellerType"
                  name="sellerType"
                  value={sellerCredential.sellerType}
                  onChange={onChange}
                >
                  <option value="repairers">Repairers</option>
                  <option value="vendors">Vendors</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  name="Address"
                  value={sellerCredential.Address}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="geolocation">Map Link of the Shop</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Google map link of the shop"
                  name="geolocation"
                  value={sellerCredential.geolocation}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="imglink">Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  placeholder="Image link in png/jpg format"
                  id="image"
                  accept="image/*"
                  name="imglink"
                  value={sellerCredential.imglink}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="PhoneNum">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Phone Number"
                  name="PhoneNum"
                  value={sellerCredential.PhoneNum}
                  onChange={onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link to="/loginseller" className="btn btn-danger">
                Already a user
              </Link>
            </form>
          </div>
          <div className="col-md-6">
            <div className="image-container col-md-10">
              <img
                src={homeImg}
                alt="Image Description"
                className="image-style"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
