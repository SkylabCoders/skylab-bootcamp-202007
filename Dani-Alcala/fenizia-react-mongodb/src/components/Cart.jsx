import React, { useState, useEffect } from "react";
import cartStore from "../stores/cartStore";
import CartList from "./CartList";
import "./CartList.css";

function Cart() {
  const [cart, setCart] = useState(cartStore.getCart());
  const [count, setCount] = useState(0);

  useEffect(() => {
    cartStore.addChangeListener(onChange);
    setCart(cartStore.getCart());
    return () => {
      cartStore.removeChangeListener(onChange);
    };
  }, [count]);

  function onChange() {
    setCart(cartStore.getCart());
  }

  function toRender() {
    setCount(count + 1);
  }

  return (
    <>
    <section className="main-contain-cart">
      <h2 className="title">Cesta de la compra</h2>
      <div className="nav-contain">
        <p>ARTÍCULO</p>
        <p className="flex-grow-right"></p>
        <p>CANTIDAD</p>
        <p className="flex-grow-left"></p>
        <p>PRECIO UNIDAD</p>
        <p className="flex-grow-left"></p>
        <p>PRECIO</p>
      </div>
  
      {cart.map((cartProduct) => (
        <CartList
          key={cartProduct.product.id}
          id={cartProduct.product.id}
          title={cartProduct.product.product.title}
          author={cartProduct.product.product.author}
          price={cartProduct.product.product.price}
          cover={cartProduct.product.product.cover}
          amount={cartProduct.amount}
          toRender={toRender}
        />
      ))}
      </section>
    </>
  );
}

export default Cart;
