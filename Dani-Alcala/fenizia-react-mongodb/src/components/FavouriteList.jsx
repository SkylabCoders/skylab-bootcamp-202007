import React, { useState } from'react'
import productStore from '../stores/productStore'
import { Link } from "react-router-dom";
import userStore from '../stores/userStore'

function FavouriteList({id, toRender}) {
    const[productObject,setProductObject]=useState(productStore.getProductById({id}))
     function removeFavourite(event) {
         console.log('FavouriteList=',productObject.id)
         event.preventDefault();
         userStore.removeFavouriteProduct(productObject.id);
         toRender()
     }
    return <>
    <div className="main-box-cart">
      <img className="box__image box__image--small" src={productObject.product.cover} alt="Book" />
      <div className="box__text">
        <div className="box__title--contain">
          <h3 className="box__title">{productObject.product.title}</h3>
          <p className="box__author">{productObject.product.author}</p>
        </div>
      </div>
      <div className="trash-contain">
            <Link onClick={(event) => removeFavourite(event)} className="trash"></Link>
          </div>
      <p className="flex-grow-right"></p>
      <p className="flex-grow-left"></p>
      <p className="box__price--price">
        {productObject.product.price}
        <span>€</span>
      </p>
    </div>
  </>;
  }
  
  export default FavouriteList;