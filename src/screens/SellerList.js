import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Card2 from "../components/Card2"; // Assuming you have a Card component
import Image1 from "../images/shop1.png";
import Image2 from "../images/Shop2.jpg";
import Image3 from "../images/Shop3.jpg";
import Image4 from "../images/Shop4.jpg";
import Image5 from "../images/Shop5.jpg";
import Image6 from "../images/Shop6.jpg";

// ... (Previous code)

function SellerList() {
  const sellersData = [
    {
      id: 1,
      name: "E Waste Recyclers, India",
      description:
        "E-Waste Recycling in India is a certified e-waste recycling company that offers a wide range of services, including e-waste collection, transportation, and recycling. They also offer buyback programs for select electronic items.",
      image: Image1,
    },
    {
      id: 2,
      name: "Green Electronics, USA",
      description:
        "Green Electronics is committed to environmentally friendly electronics recycling. They provide secure and responsible recycling solutions for a variety of electronic devices.",
      image: Image2,
    },
    {
      id: 3,
      name: "Tech Renew, Canada",
      description:
        "Tech Renew specializes in the recycling and refurbishment of electronic devices. They focus on reducing electronic waste and promoting sustainable practices in the tech industry.",
      image: Image3,
    },
    {
      id: 4,
      name: "EcoTech Solutions, UK",
      description:
        "EcoTech Solutions is a leading electronic waste recycling company in the UK. They offer comprehensive e-waste management services, including collection, recycling, and data destruction.",
      image: Image4,
    },
    {
      id: 5,
      name: "GreenIT Recyclers, Australia",
      description:
        "GreenIT Recyclers is dedicated to the responsible recycling of electronic waste in Australia. They prioritize the proper disposal of electronic devices to minimize environmental impact.",
      image: Image5,
    },
    {
      id: 6,
      name: "Sustainable Electronics, Germany",
      description:
        "Sustainable Electronics focuses on sustainable practices in electronics recycling. They aim to reduce the environmental footprint of electronic waste through innovative recycling solutions.",
      image: Image6,
    },
    // Add data for more sellers
  ];

  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <div className="d-flex"></div>

      <div className="container mt-5">
        <div className="row">
          {sellersData.map((seller) => (
            <div key={seller.id} className="col-md-4 mb-4">
              <Card2
                title={seller.name}
                description={seller.description}
                image={seller.image}
                buttonText="Know More"
                link={`/shop${seller.id}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ... (Previous code) */}
    </div>
  );
}

export default SellerList;