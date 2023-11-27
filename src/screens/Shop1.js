// // import React from "react";
// // import Footer from "../components/Footer";
// // import Navbar from "../components/Navigation";
// // import Image1 from "../images/shop1.png";

// // export default function Blog1() {
// //   return (
// //     <div>
// //       <div>
// //         <Navbar />
// //       </div>
// //       <div className="d-flex">
// //         <div style={{ marginTop: 50, marginLeft: 50 }}>
// //           <img src={Image1}></img>
// //         </div>
// //         <div>
// //           <h1 style={{ marginTop: 40, marginLeft: 30, color: "skyblue" }}>
// //             E Waste Recyclers, India
// //           </h1>
// //           <p style = {{marginLeft: 50, marginRight: 50}}>
// //             E-Waste Recycling in India is a certified e-waste recycling company
// //             that offers a wide range of services, including e-waste collection,
// //             transportation, and recycling. They also offer buyback programs for
// //             select electronic items.
// //           </p>
// //           <br />
// //         <bold style={{ fontSize: "20px", color: "skyblue" }}>Location</bold>
// //         <p>G-110, Sector-63, Noida, Uttar Pradesh 201301, India</p>
// //         <bold style={{ fontSize: "20px", color: "skyblue" }}>Hours</bold>
// //         <p>Monday-Saturday: 10:00 AM - 7:00 PM; Sunday: Closed</p>
// //         <bold style={{ fontSize: "20px", color: "skyblue" }}>
// //           Phone/Contact
// //         </bold>
// //         <p>+91 97173 93992</p>
// //         </div>
// //       </div>
// //       <div>
// //         <Footer />
// //       </div>
// //     </div>
// //   );
// // }

// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import Footer from "../components/Footer";
// import Navbar from "../components/Navigation";
// import Image1 from "../images/shop1.png";

// export default function Blog1() {
//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>
//       <div className="d-flex">
//         <div style={{ marginTop: 50, marginLeft: 50 }}>
//           <img src={Image1} alt="Shop 1"></img>
//         </div>
//         <div>
//           <h1 style={{ marginTop: 40, marginLeft: 30, color: "skyblue" }}>
//             E Waste Recyclers, India
//           </h1>
//           <p style={{ marginLeft: 50, marginRight: 50 }}>
//             E-Waste Recycling in India is a certified e-waste recycling company
//             that offers a wide range of services, including e-waste collection,
//             transportation, and recycling. They also offer buyback programs for
//             select electronic items.
//           </p>
//           <br />
//           <bold style={{ fontSize: "20px", color: "skyblue" }}>Location</bold>
//           <p>G-110, Sector-63, Noida, Uttar Pradesh 201301, India</p>
//           <bold style={{ fontSize: "20px", color: "skyblue" }}>Hours</bold>
//           <p>Monday-Saturday: 10:00 AM - 7:00 PM; Sunday: Closed</p>
//           <bold style={{ fontSize: "20px", color: "skyblue" }}>
//             Phone/Contact
//           </bold>
//           <p>+91 97173 93992</p>

//           {/* Add a Link to the next page */}
//           <Link to="/next-page">
//             <button style={{ marginTop: 10, backgroundColor: "skyblue", color: "white", padding: "10px" }}>
//               Go to Next Page
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Footer from "../components/Footer";
import Navbar from "../components/Navigation";
import Image1 from "../images/shop1.png";

export default function Blog1() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="d-flex">
        <div style={{ marginTop: 50, marginLeft: 50 }}>
          <img src={Image1} alt="Shop 1"></img>
        </div>
        <div>
          <h1 style={{ marginTop: 40, marginLeft: 30, color: "skyblue" }}>
            E Waste Recyclers, India
          </h1>
          <p style={{ marginLeft: 50, marginRight: 50 }}>
            E-Waste Recycling in India is a certified e-waste recycling company
            that offers a wide range of services, including e-waste collection,
            transportation, and recycling. They also offer buyback programs for
            select electronic items.
          </p>
          <br />
          <bold style={{ fontSize: "20px", color: "skyblue" }}>Location</bold>
          <p>G-110, Sector-63, Noida, Uttar Pradesh 201301, India</p>
          <bold style={{ fontSize: "20px", color: "skyblue" }}>Hours</bold>
          <p>Monday-Saturday: 10:00 AM - 7:00 PM; Sunday: Closed</p>
          <bold style={{ fontSize: "20px", color: "skyblue" }}>
            Phone/Contact
          </bold>
          <p>+91 97173 93992</p>

          {/* Add a Link to the next page */}
          <Link to="/selectitems">
            <button style={{ marginTop: 10, backgroundColor: "skyblue", color: "white", padding: "10px" }}>
              Go to Next Page
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
