import React, { useState } from 'react';
import './App.css';
import ProductList from './filteredData/ProductList';
import Pricing from './design/Pricing';

function App() {
  const products = [
    {
      name: 'Product 1',
      category: 'Electronics',
      price: 799.99,
      available: true,
    },
    {
      name: 'Product 2',
      category: 'Books',
      price: 19.99,
      available: true,
    },
    {
      name: 'Product 3',
      category: 'Home & Kitchen',
      price: 49.99,
      available: false,
    },
    {
      name: 'Product 4',
      category: 'Toys & Games',
      price: 29.99,
      available: true,
    },
    {
      name: 'Product 5',
      category: 'Electronics',
      price: 599.99,
      available: true,
    },
    {
      name: 'Product 6',
      category: 'Books',
      price: 9.99,
      available: true,
    },
  ];
  return (
    <div className='container'>
    <div className="app">
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
<div>
  <Pricing/>
</div>
    </div>
  );
}

export default App;
