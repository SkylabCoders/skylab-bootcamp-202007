import React, { useState, useEffect } from 'react';
import cartStore from '../stores/cartStore';

export default function Cart() {
  const [cartItems, setCartItems] = useState(cartStore.getCartItems())

  useEffect(() => {
    cartStore.addChangeListener(callback);
    return () => cartStore.removeChangeListener(callback);
  }, [cartItems.length]);

  function callback() {
    setCartItems(cartStore.getCartItems());
  }

  return (
    <div>
      <h2>MI CESTA</h2>
      <ul>
        {cartItems.map((cart) => (
          <li className="container-list__element" key={cart.name}>
            <img src={cart.img} />
            <p className="element-name">{cart.name}</p>
            <p className="element-price">{`${cart.price} €`}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}