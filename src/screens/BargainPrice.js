import React, { useState } from "react";
import "../styles/bargain.css";
function BargainPrice() {
  const [currentPrice, setCurrentPrice] = useState(100);

  const updatePrice = () => {
    // Update the price in the state
    // You can use `currentPrice` in your JSX to display it.
  };

  const increasePrice = () => {
    setCurrentPrice((prevPrice) => prevPrice + 50);
    updatePrice();
  };

  const decreasePrice = () => {
    if (currentPrice >= 50) {
      setCurrentPrice((prevPrice) => prevPrice - 50);
      updatePrice();
    }
  };

  updatePrice();

  return (
    <div>
      <div className="phone">
        <label htmlFor="phone">Enter Your Product:</label>
        <input type="text" id="phone" />
      </div>
      <div className="price-container">
        <button className="control-button" id="green" onClick={decreasePrice}>
          -50
        </button>
        <span className="price" id="currentPrice">
          ${currentPrice}
        </span>
        <button className="control-button" id="red" onClick={increasePrice}>
          +50
        </button>
      </div>
      <div className="price-container">
        <button className="proceed">Proceed</button>
      </div>
    </div>
  );
}

export default BargainPrice;
