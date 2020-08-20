import React from "react";
import "./CarouselImageGenerator.css";

function CarouselImageGenerator({ products }) {
  return (
    <div className="main-carousel__render">
      <div className="main-carousel__render__image">
        <img src={products.product.cover} alt={products.product.title}></img>
      </div>
      <div className="main-carousel__render__text">
        <p>{products.product.title}</p>
      </div>
      <div className="main-carousel__render__text">
        <button>Comprar por {products.product.price}€</button>
      </div>
    </div>
  );
}

export default CarouselImageGenerator;
