import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import homeImg from '../images/about.png'; // Import the image

export default function SellerLogin() {
  const [sellerCredential, setSellerCredential] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginseller", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: sellerCredential.email, password: sellerCredential.password }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }

    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/HomeFacility");
    }
  };

  const onChange = (event) => {
    setSellerCredential({ ...sellerCredential, [event.target.name]: event.target.value });
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

    .form-group {
      margin: 15px 0;
    }

    label {
      font-weight: bold;
      color: #555;
    }

    .form-control {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #ffffff;
    }

    .btn {
      padding: 10px 20px;
      margin-top: 15px;
      border-radius: 4px;
      text-decoration: none;
      cursor: pointer;
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

    .image-container {
      text-align: center;
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
        <div className="image-container">
          <img src={homeImg} alt="Image Description" className="image-style" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" style={{ fontWeight: 'bold', color: 'skyblue' }}>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter the email"
              name="email"
              value={sellerCredential.email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ fontWeight: 'bold', color: 'skyblue' }}>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              name="password"
              value={sellerCredential.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/createseller" className='btn btn-danger m-3'>I'm a new user</Link>
        </form>
      </div>
    </>
  );
}