import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavbarFacility';

function PriceList() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/getprices')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setPrices(data.prices);
        } else {
          console.error('Failed to fetch prices:', data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
        <div>
            <Navbar/>
        </div>
    <div className="container">
      <h1 style={{ textAlign: 'center', color: 'white' }}>Products to Purchase</h1>
      <br/>
      <div className="price-list">
        {prices.map((price) => (
          <div key={price._id} className="card" style={{ backgroundColor: '#f5f5f5', marginBottom: '10px', padding: '1px', borderRadius: '5px'}}>
            <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3 style={{ color: '#555', margin: '0' }}>{price.name}</h3>
              <p style={{ color: '#777', margin: '0', marginLeft: '10px' }}>Price: ${price.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default PriceList;
