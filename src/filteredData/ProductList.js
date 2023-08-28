import React, { useState } from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  const [filterCategory, setFilterCategory] = useState('All');

  const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));
  const categories = ['All', ...uniqueCategories];

  const filteredProducts = products.filter((product) =>
    filterCategory === 'All' ? true : product.category === filterCategory
  );

  return (
    <div className="product-list">
      <div className="filter-section">
        <label>Filter by Category:</label>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="products">
        {filteredProducts.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
