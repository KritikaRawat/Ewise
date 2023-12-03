// import React from 'react'

// export default function About() {
//   return (
//     <div>About</div>
//   )
// }
// import React from 'react';
// import AboutImage from '../images/about.png'; // Import your about image

// export default function About() {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6">
//           <h2 className="font-weight-bold">About</h2> 
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
//           </p>
//         </div>
//         <div className="col-md-6">
//           <img
//             src={AboutImage}
//             alt="About Us"
//             className="img-fluid"
//             style={{ height: '400px' }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AboutImage from '../images/about.png'; // Import your about image

export default function About() {
  return (
    <div>
    <div>
      <Navbar/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 style={{ fontWeight: 'bold', marginTop: '150px', fontSize: '80px', color: "black"}}>About Us</h2> 
        </div>
        <div className="col-md-6">
          <img
            src={AboutImage}
            alt="About Us"
            className="img-fluid"
            style={{ height: '300px' }}
          />
        </div>
      </div>
        <div className='row col-md-12'>
        <p>
            <h5 style={{ fontWeight: 'bold', marginTop: '20px', color:'skyblue' }}>About E-Wise: Your Path to Responsible E-Waste Management</h5>
            <p style = {{color: "black"}}>Welcome to E-Wise, where we empower individuals and businesses to make informed, eco-conscious decisions when it comes to managing electronic waste (e-waste). Our mission is simple: "Be wise with e-waste – Make Every Gadget Count!" We're committed to revolutionizing the way we handle electronic devices, promoting recycling, repair, and responsible disposal, all while fostering a community that values sustainability.</p>

            <h5 style={{ fontWeight: 'bold', marginTop: '20px', color:'skyblue' }}>Our Vision</h5>
            <p style = {{color: "black"}}>In a world increasingly dependent on technology, electronic waste has become a pressing global issue. E-Wise envisions a future where every electronic device is handled with care and responsibility, minimizing its environmental impact. We strive to create a sustainable ecosystem where your old gadgets can find new life, and everyone can contribute to a greener, more sustainable planet.</p>
          </p>
        </div>
        <div><Footer/></div>
        
    </div>
    </div>
  );
}

