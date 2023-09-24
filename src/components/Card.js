import React from 'react';

function Card({ imageUrl, description }) {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt="Card" />
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;
