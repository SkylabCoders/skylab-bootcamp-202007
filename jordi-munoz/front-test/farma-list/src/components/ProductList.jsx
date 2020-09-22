import React, { useState, useEffect } from 'react';
import productStore from '../stores/productStore';
import { addToCart, loadProducts } from '../actions/productActions';
import './productList.css';
import Cart from './Cart';

function ProductList() {

  const [products, setProducts] = useState(productStore.getProducts());

  useEffect(() => {
    productStore.addChangeListener(onChange);
    if (products.length === 0) loadProducts();
    return () => productStore.removeChangeListener(onChange);
  }, [products.length]);

  function onChange() {
    setProducts(productStore.getProducts());
  }

  return (
    <div className="container-list">
      <ul>
        {products.map((product) => (
          <li className="container-list__element" key={product.name}>
            <p className="element-name">{product.name}</p>
            <p className="element-price">{`${product.price} €`}</p>
            <button
              onClick={() => { addToCart(product.id) }}
              className="element-button"><img src="https://trello-attachments.s3.amazonaws.com/5efafdc8c11d2a7055ac17ca/5f6708afcfada7261d3ec502/effece3bfc67a6ca5c71e84345f3a583/add-to-cart.png" /></button>
          </li>
        ))}
      </ul>
      <Cart />
    </div>
  );

}

export default ProductList;
