// import React, { useEffect, useRef, useState } from "react";
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import '../styles/PricesonMarketplace.css'; 
// import { useParams } from 'react-router-dom';
// import emailjs from '@emailjs/browser'
// import axios from 'axios'

// export default function PricesonMarketplace() {
//   const form = useRef();

//   //Done by the other method
//   const sendEmail = async(email) => {
//     try{
//       const res = await axios.post('http://localhost:5001/name', {name: email})
//       console.log(res)
//       console.log("hogaya")
//     } catch(error) {
//       console.log(error,"snvjnfsovneijfnjenbirneobrjbvenbfvj")
//     }
    
//     console.log("Sending email...");
//   };
//   console.log(form.current);


//   const [prices, setPrices] = useState([]);
//   const { email } = useParams();

//   const fetchPrices = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/getprices`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch prices');
//       }

//       const data = await response.json();
//       setPrices(data.prices);
//     } catch (error) {
//       console.error('Error fetching prices:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPrices();
//   }, [email]);

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>

//       <h1>Orders Received</h1>

//     <form ref={form} >
//       <div className='container'>
//         {prices.map((price) => (
//           <div key={price._id} className='card'>
//             <label name="from_name">Name: {price.name}</label>
//             <label name="from_email">Price: {price.price}</label>
//             <p>Email: {price.email}</p>
//             <button type="submit" onClick={(e) => { e.preventDefault(); sendEmail(price.email); }}>Approve</button>
//           </div>
//         ))}
//       </div>
//     </form>


//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }


//========================================================== Points added to all cards
// import React, { useEffect, useRef, useState, useCallback } from "react";
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import '../styles/PricesonMarketplace.css'; 
// import { useParams } from 'react-router-dom';
// import { useRewardPoints } from './RewardContext';
// import axios from 'axios';

// export default function PricesonMarketplace() {
//   const form = useRef();
//   const { state, dispatch } = useRewardPoints();

//   const sendEmail = useCallback(async (email) => {
//     try {
//       const res = await axios.post('http://localhost:5001/name', { name: email });
//       console.log(res);
//       console.log('hogaya');
//       dispatch({ type: 'INCREMENT_POINTS' });
//     } catch (error) {
//       console.log(error, 'snvjnfsovneijfnjenbirneobrjbvenbfvj');
//     }

//     console.log('Sending email...');
//   }, [dispatch]);

//   console.log(form.current);

//   const [prices, setPrices] = useState([]);
//   const { email } = useParams();

//   const fetchPrices = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/getprices`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch prices');
//       }

//       const data = await response.json();
//       setPrices(data.prices);
//     } catch (error) {
//       console.error('Error fetching prices:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPrices();
//   }, [email]);

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>

//       <h1>Orders Received</h1>

//       <form ref={form}>
//         <div className='container'>
//           {prices.map((price) => (
//             <div key={price._id} className='card'>
//               <label name="from_name">Name: {price.name}</label>
//               <label name="from_email">Price: {price.price}</label>
//               <p>Email: {price.email}</p>
//               <button type="submit" onClick={(e) => {e.preventDefault(); sendEmail(price.email);}}>
//                 Approve (Reward Points: {state.rewardPoints})
//               </button>
//             </div>
//           ))}
//         </div>
//       </form>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useRef, useState, useCallback } from "react";
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import '../styles/PricesonMarketplace.css'; 
// import { useParams } from 'react-router-dom';
// import { useRewardPoints } from './RewardContext';
// import axios from 'axios';

// export default function PricesonMarketplace() {
//   const form = useRef();
//   const { state, dispatch } = useRewardPoints();

//   const sendEmail = useCallback(async (email, cardId) => {
//     try {
//       const res = await axios.post('http://localhost:5001/name', { name: email });
//       console.log(res);
//       console.log('hogaya');
//       dispatch({ type: 'INCREMENT_POINTS', cardId });
//     } catch (error) {
//       console.log(error, 'snvjnfsovneijfnjenbirneobrjbvenbfvj');
//     }
  
//     console.log('Sending email...');
//   }, [dispatch]);
  
//   console.log(form.current);

//   const [prices, setPrices] = useState([]);
//   const [rewardPointsMap, setRewardPointsMap] = useState({}); // Store reward points for each card
//   const { email } = useParams();

//   const fetchPrices = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/getprices`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch prices');
//       }

//       const data = await response.json();
//       setPrices(data.prices);
//       // Initialize reward points map with default values
//       const initialRewardPointsMap = {};
//       data.prices.forEach((price) => {
//         initialRewardPointsMap[price._id] = 0;
//       });
//       setRewardPointsMap(initialRewardPointsMap);
//     } catch (error) {
//       console.error('Error fetching prices:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPrices();
//   }, [email]);

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>

//       <h1>Orders Received</h1>

//       <form ref={form}>
//         <div className='container'>
//           {prices.map((price) => (
//             <div key={price._id} className='card'>
//               <label name="from_name">Name: {price.name}</label>
//               <label name="from_email">Price: {price.price}</label>
//               <p>Email: {price.email}</p>
              
//             </div>
//           ))}
//         </div>
//       </form>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }


//---------------------------------------------------------------------------------
// import React, { useEffect, useRef, useState } from "react";
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import '../styles/PricesonMarketplace.css'; 
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function PricesonMarketplace() {
//   const form = useRef();

//   const [prices, setPrices] = useState([]);
//   const [counter, setCounter] = useState(0); // Total counter for all users
//   const { email } = useParams();

//   const fetchPrices = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/getprices`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to fetch prices');
//       }
  
//       const data = await response.json();
//       setPrices(data.prices);
//     } catch (error) {
//       console.error('Error fetching prices:', error);
//     }
//   };
  
//   const sendEmail = async (email) => {
//     try {
//       const res = await axios.post('http://localhost:5001/name', { name: email });
//       console.log(res);
//       console.log("hogaya");
  
//       // Find the user by email in the prices array
//       const updatedPrices = prices.map((price) => {
//         if (price.email === email) {
//           // Update the reward points for the specific user using immutability
//           return { ...price, rewardPoints: (price.rewardPoints || 0) + 2 };
//         }
//         return price;
//       });
  
//       setPrices(updatedPrices);
//       setCounter(counter + 2); // Update the total counter
  
//       // Update rewardPoints in the database
//       await axios.post('http://localhost:5000/api/updatepoints', {
//         email,
//         points: 2,
//       });
  
//     } catch (error) {
//       console.error(error, "Error updating reward points");
//     }
//     console.log("Sending email...");
//   };
  

//   useEffect(() => {
//     fetchPrices();
//   }, [email]);

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>

//       <h1>Orders Received</h1>

//       <form ref={form} >
//         <div className='container'>
//           {prices.map((price) => (
//             <div key={price._id} className='card'>
//               <label name="from_name">Name: {price.name}</label>
//               <label name="from_email">Price: {price.price}</label>
//               <p>Email: {price.email}</p>
//               <p>Reward Points: {price.rewardPoints || 0}</p>
//               <button type="submit" onClick={(e) => { e.preventDefault(); sendEmail(price.email); }}>Approve</button>
//             </div>
//           ))}
//         </div>
//       </form>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

//-----------------------------Actual working
// import React, { useEffect, useRef, useState } from "react";
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import '../styles/PricesonMarketplace.css'; 
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function PricesonMarketplace() {
//   const form = useRef();

//   const [prices, setPrices] = useState([]);
//   const { email } = useParams();

//   const fetchPrices = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/getprices`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to fetch prices');
//       }
  
//       const data = await response.json();
//       setPrices(data.prices);
//     } catch (error) {
//       console.error('Error fetching prices:', error);
//     }
//   };
  
//   const sendEmail = async (email) => {
//     try {
//       const res = await axios.post('http://localhost:5001/name', { name: email });
//       console.log(res);
//       console.log("hogaya");
  
//       // Find the user by email in the prices array
//       const updatedPrices = prices.map((price) => {
//         if (price.email === email) {
//           // Update the reward points for the specific user using immutability
//           return { ...price, rewardPoints: (price.rewardPoints || 0) + 2 };
//         }
//         return price;
//       });
  
//       setPrices(updatedPrices);
//       // No need to update the total counter here

//       // Update rewardPoints in the database
//       await axios.post('http://localhost:5000/api/updatepoints', {
//         email,
//         points: 2,
//       });
  
//     } catch (error) {
//       console.error(error, "Error updating reward points");
//     }
//     console.log("Sending email...");
//   };
  

//   useEffect(() => {
//     fetchPrices();
//   }, [email]);

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>

//       <h1>Orders Received</h1>

//       <form ref={form} >
//         <div className='container'>
//           {prices.map((price) => (
//             <div key={price._id} className='card'>
//               <label name="from_name">Name: {price.name}</label>
//               <label name="from_email">Price: {price.price}</label>
//               <p>Email: {price.email}</p>
//               {/* Fetch and display reward points from the database */}
//               <p>Reward Points: {price.rewardPoints !== undefined ? price.rewardPoints : 0}</p>
//               <button type="submit" onClick={(e) => { e.preventDefault(); sendEmail(price.email); }}>Approve</button>
//             </div>
//           ))}
//         </div>
//       </form>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

//---Actual with sold
// import React, { useEffect, useRef, useState } from "react";
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import '../styles/PricesonMarketplace.css'; 
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function PricesonMarketplace() {
//   const form = useRef();

//   const [prices, setPrices] = useState([]);
//   const { email } = useParams();

//   const fetchPrices = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/getprices`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to fetch prices');
//       }
  
//       const data = await response.json();
//       setPrices(data.prices);
//     } catch (error) {
//       console.error('Error fetching prices:', error);
//     }
//   };
  
//   const sendEmail = async (email) => {
//     try {
//       const res = await axios.post('http://localhost:5001/name', { name: email });
//       console.log(res);
//       console.log("hogaya");
  
//       // Find the user by email in the prices array
//       const updatedPrices = prices.map((price) => {
//         if (price.email === email) {
//           // Update the reward points for the specific user using immutability
//           const updatedPrice = { ...price, rewardPoints: (price.rewardPoints || 0) + 2, sold: true };
//           return updatedPrice;
//         }
//         return price;
//       });
  
//       setPrices(updatedPrices);

//       // Update rewardPoints in the database
//       await axios.post('http://localhost:5000/api/updatepoints', {
//         email,
//         points: 2,
//       });
  
//     } catch (error) {
//       console.error(error, "Error updating reward points");
//     }
//     console.log("Sending email...");
//   };
  

//   useEffect(() => {
//     fetchPrices();
//   }, [email]);

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>

//       <h1>Orders Received</h1>

//       <form ref={form} >
//         <div className='container'>
//           {prices.map((price) => (
//             <div key={price._id} className='card'>
//               <label name="from_name">Name: {price.name}</label>
//               <label name="from_email">Price: {price.price}</label>
//               <p>Email: {price.email}</p>
//               {/* Fetch and display reward points from the database */}
//               <p>Reward Points: {price.rewardPoints !== undefined ? price.rewardPoints : 0}</p>
//               {price.sold && <p style={{ color: 'green' }}>Sold</p>}
//               <button type="submit" onClick={(e) => { e.preventDefault(); sendEmail(price.email); }}>Approve</button>
//             </div>
//           ))}
//         </div>
//       </form>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

//----------------------------------More modified Sold
import React, { useEffect, useRef, useState } from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/PricesonMarketplace.css'; 
import { useParams } from 'react-router-dom';
import axios from 'axios';
import bg from "../images/bg.png";


export default function PricesonMarketplace() {
  const form = useRef();

  const [prices, setPrices] = useState([]);
  const { email } = useParams();

  const fetchPrices = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/getprices`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch prices');
      }
  
      const data = await response.json();
      setPrices(data.prices);
    } catch (error) {
      console.error('Error fetching prices:', error);
    }
  };
  
  const sendEmail = async (email) => {
    try {
      const res = await axios.post('http://localhost:5001/name', { name: email });
      console.log(res);
      console.log("hogaya");
  
      // Find the user by email in the prices array
      const updatedPrices = prices.map((price) => {
        if (price.email === email) {
          // Update the reward points for the specific user using immutability
          const updatedPrice = { ...price, rewardPoints: (price.rewardPoints || 0) + 2, sold: true };
          return updatedPrice;
        }
        return price;
      });
  
      setPrices(updatedPrices);

      // Update rewardPoints in the database
      await axios.post('http://localhost:5000/api/updatepoints', {
        email,
        points: 2,
      });
  
    } catch (error) {
      console.error(error, "Error updating reward points");
    }
    console.log("Sending email...");
  };
  

  useEffect(() => {
    fetchPrices();
  }, [email]);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <h1>Orders Received</h1>

      <form ref={form} >
        <div className='container'>
          {prices.map((price, index) => (
            <div
              key={price._id}
              style={{
                border: "5px solid #325343 ",
                width: "calc(50% - 20px)", // 50% width with margin
                height:"300px",
                borderRadius: "15px",
                margin: "10px",
                padding: "28px 20px 50px 20px",
                backgroundColor: price.sold ? "white" : "",
                boxShadow: price.sold ? "0 0 5px rgba(0, 0, 0, 0.1)" : "",
                float: index % 2 === 0 ? "left" : "right", // alternate float left/right
                clear: index % 2 === 0 ? "both" : "none", // clear float on every even index
              }}
            >
              <label name="from_name" style={{color: "black", fontSize: "20px"}}>Name: {price.name}</label><br></br>
              <label name="from_email"  style={{color: "black", fontSize: "20px"}}>Price: {price.price}</label>
              <p  style={{color: "black", fontSize: "20px"}}>Email: {price.email}</p>
              {!price.sold && (
                <>
                  <p style={{ color: 'green' , fontSize: "25px"}}>Item Available</p>
                  <button type="submit" onClick={(e) => { e.preventDefault(); sendEmail(price.email); }}  style={{color: "black", fontSize: "20px"}}>Approve</button>
                </>
              )}
               <p style={{ color: "black", fontSize: "20px", margin: "10px 5px 10px 5px" }}>
                  Reward Points: {price.rewardPoints !== undefined ? price.rewardPoints : 0}
                  <div style={{ background: `url(${bg}) no-repeat`, marginLeft: "5px", verticalAlign: "middle", width: "20px", height: "20px", backgroundSize: "cover" }}></div>
                </p>

              {price.sold && <p style={{ color: 'red',  fontSize: "20px" }}>Item Sold</p>}
            </div>
          ))}
        </div>
      </form>

      <div>
        <Footer />
      </div>
    </div>
  );
}
