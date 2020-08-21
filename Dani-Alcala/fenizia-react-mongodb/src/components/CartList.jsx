import React from 'react'
import "./CartList.css";
import { Link } from "react-router-dom";
import cartStore from "../stores/cartStore";

function CartList({ title, author, id, price, cover, amount, toRender }) {
  function deleteToCart(id) {
    cartStore.removeCartProduct(id);
    cartStore.deleteNumberCart();
    toRender();
  }

  return (
    <>
      <div className="main-box-cart">
        <img className="box__image box__image--small" src={cover} alt="Book" />
        <div className="box__text">
          <div className="box__title--contain">
            <h3 className="box__title">{title}</h3>
            <p className="box__author">{author}</p>
          </div>
          <div className="trash-contain">
            <Link onClick={() => deleteToCart(id)} className="trash"></Link>
          </div>
        </div>
        <p className="flex-grow-right"></p>
        <p className="box__price--amount">{amount}</p>
        <p className="flex-grow-left"></p>
        <p className="box__price--price">
          {price}
          <span>€</span>
        </p>
        <p className="flex-grow-left"></p>
        <p className="box__price--total">
          {Math.round((price * amount) * 100) / 100}
          <span>€</span>
        </p>
      </div>
    </>
  );
}

export default CartList;
