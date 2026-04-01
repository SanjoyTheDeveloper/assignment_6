import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductsSection = ({ addToCart, checkProductInCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/src/data/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
          inCart={checkProductInCart(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductsSection;
