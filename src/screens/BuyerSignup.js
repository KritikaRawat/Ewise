import React, { useState } from "react";
import { Link } from "react-router-dom";
import homeImg from "../images/about.png";

export default function BuyerSignup() {
  const [sellerCredential, setSellerCredential] = useState({
    name: "",
    email: "",
    password: "",
    phoneNum: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createbuyer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: sellerCredential.name,
        email: sellerCredential.email,
        password: sellerCredential.password,
        phoneNum: sellerCredential.phoneNum,
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
      background-color: #f8f9fa; /* Changed background color of the page */
      font-family: 'Arial', sans-serif;
    }

    .container {
      max-width: 600px; /* Adjusted container size */
      margin: 17px auto;
      padding: 20px;
      background-color: #ffffff; /* Changed container background color */
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
      background-color: #ffffff; /* Changed input background color */
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

    .btn-secondary {
      background-color: #6c757d;
      border-color: #6c757d;
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
              <h2>Create an Account</h2>
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
                <label htmlFor="phoneNum">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Phone Number"
                  name="phoneNum"
                  value={sellerCredential.phoneNum}
                  onChange={onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <div style={{ marginTop: "10px" }}>
                <Link to="/loginbuyer" className="btn btn-secondary">
                  Already a user? Login
                </Link>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="image-container">
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
