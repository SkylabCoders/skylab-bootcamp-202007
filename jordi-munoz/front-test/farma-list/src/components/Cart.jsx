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
      <p>cart works with {cartItems.length}</p>
    </div>
  )
}