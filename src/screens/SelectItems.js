import React, { useState } from 'react';
import '../styles/YourComponent.css';
import Navbar from '../components/Navbar';
import SellerList from './SellerList';

export default function SelectItems() {
  const [itemDetails, setItemDetails] = useState({ itemName: "", price: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic for handling item submission, e.g., sending a request to the server.
    const resp = await fetch("http://localhost:5000/api/createprice", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: itemDetails.itemName, price: itemDetails.price }),
    });
    const json = await resp.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Item Details");
    }
  };

  const onChange = (event) => {
    setItemDetails({ ...itemDetails, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div>
        < Navbar/>
      </div>
    <div className="container">
      <form onSubmit={handleSubmit} className="row g-3 align-items-center">
        <div className="col-md-4">
          <label htmlFor="itemName" className="form-label" style={{ fontWeight: 'bold', color: 'black' }}>
            Item Name
          </label>
          <input
            type="text"
            className="form-control form-control-light"
            placeholder="Enter the item name"
            name="itemName"
            value={itemDetails.itemName}
            onChange={onChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="price" className="form-label" style={{ fontWeight: 'bold', color: 'black' }}>
            Price
          </label>
          <input
            type="number"
            className="form-control form-control-light"
            placeholder="Enter Price"
            name="price"
            value={itemDetails.price}
            onChange={onChange}
          />
        </div>
        <div className="col-md-4">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    <div>
      <SellerList/>
    </div>
    </div>
  );
}