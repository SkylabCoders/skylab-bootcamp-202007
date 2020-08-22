import React,  {useState} from "react";
import { Link } from "react-router-dom";
import "./ProductListItem.css";


function ProductListItem({ title, id, type,  description, price, cover, rating }) {
  // const [isLogged, setIsLogged] = useState(authStore.isLogged());
  // function addToCart(id) {
  //   cartStore.addCartProduct(id);
  //   addNumberCart();
  // }


  return (
    <div className="main-box">
      <img className="box__image" src={cover} alt={title} />
      <div className="box__contain">
        <div className="box__text">
          <h3 className="box__title">{title}</h3>
          {/* <p className="box__author">{author}</p> */}
          <p className="box__sinopsis">Description</p>
          <p className="box__description">{description}</p>
        </div>
        <div className="box__button">
          <div className="box__complet-price">
            <p className="box__number-price">
              {price}
              <span>€</span>
            </p>
            <p className="box__vat">VAT INCLUDED</p>
          </div>
          <div className="box__column-button">
            <p className="box__button-cart">
              Add to cart
            </p>
            <p className="box__button-star">
              Add to favorites
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
