// src/components/SellerList.js

import React, { useEffect, useState } from 'react';

function SellerList() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    // Fetch sellers data from the backend when the component mounts
    fetch('http://localhost:5000/api/getsellers') // Assuming your React app is running on the same server as the backend
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSellers(data.sellers);
        } else {
          console.error('Failed to fetch sellers');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>List of Registered Sellers</h1>
      <ul>
        {sellers.map((seller) => (
          <li key={seller._id}>
            Name: {seller.name}, Email: {seller.email}, imglink: {seller.imglink}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SellerList;


// import React from 'react';
// import Card from '../components/Card';
// import Image1 from '../components/Images/shop1.png'

// function SellerList() {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-4">
//           <Card
            
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//           />
//         </div>
//         <div className="col-md-4">
//           <Card
//             imageUrl="https://example.com/another-image.jpg"
//             description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SellerList;
