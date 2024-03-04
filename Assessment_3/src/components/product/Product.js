import React from 'react';

const Product = ({ title, type, description, url, price, rating }) => {
    return (
      <div className="product">
        <img src={url} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Type: {type}</p>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
        <div className='buttons'>
          <button>LIKE</button>
          <button>SHARE</button>
          <button>PURCHASE</button>
        </div>
      </div>
    );
  };
  
  export default Product;
