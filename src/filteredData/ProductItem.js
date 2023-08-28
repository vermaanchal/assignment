import React from 'react';

function ProductItem({ product }) {
  return (
    <div className={`product-item ${product.available ? 'available' : 'unavailable'}`}>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>{product.available ? 'Available' : 'Not available'}</p>
    </div>
  );
}

export default ProductItem;
