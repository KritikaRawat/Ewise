// import React, { useState } from 'react';


// export default function Emailchalo() {
//   const [email, setEmail] = useState('');
//   const [data, setData] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       console.log('Sending request to the server...');
      
//       const response = await fetch('http://localhost:5001/name', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name: email }),
//       });
  
//       console.log('Response received:', response);
  
//       const result = await response.json();
      
//       console.log('Data from API:', result);
  
//       setData(result);
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };
  

//   return (
//     <div>
//       <h1>Send Email:</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email Address:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button type="submit">Send Email</button>
//       </form>

//       <h2>Data from API:</h2>
//       {data ? (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       ) : (
//         <p>No data available yet.</p>
//       )}
//     </div>
//   );
// }
const url = 'http://localhost:5001/name';
const data = {name: 'sachinp9839@gmail.com' };

fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
})
.then((response) => response.json())
.then((data) => {
  // Update your state with the response data
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
