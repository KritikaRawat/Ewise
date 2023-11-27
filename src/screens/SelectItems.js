import React, { useState } from 'react';

export default function SelectItems() {
  const [itemDetails, setItemDetails] = useState({ itemName: "", price: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic for handling item submission, e.g., sending a request to the server.
    const resp = await fetch("http://localhost:5000/api/createprice",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:itemDetails.itemName, price:itemDetails.price })
    })
    const json = await resp.json()
    console.log(json);

    if(!json.success){
      alert("Enter Valid Item Details")
     }
  }

  const onChange = (event) => {
    setItemDetails({ ...itemDetails, [event.target.name]: event.target.value });
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="m-3">
          <label htmlFor="itemName" className="form-label" style={{ fontWeight: 'bold', color: 'skyblue' }}>Item Name</label>
          <input type="text" className="form-control" placeholder="Enter the item name" name='itemName' value={itemDetails.itemName} onChange={onChange} />
        </div>
        <div className="m-3">
          <label htmlFor="price" lassName="form-label" style={{ fontWeight: 'bold', color: 'skyblue' }}>Price</label>
          <input type="number" className="form-control" placeholder="Enter Price" name='price' value={itemDetails.price} onChange={onChange} />
        </div>

        <button type="submit" className="m-3 btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

