import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productStore from "../stores/productStore";
import { loadProducts } from "../actions/productActions";
import "./Slider.scss";

function Slider({ order, url, text }) {
  const [products, setProducts] = useState(productStore.getProduct(order));

  useEffect(() => {
    productStore.addChangeListener(onChange);
    if (products.length === 0) loadProducts();
    return () => productStore.removeChangeListener(onChange);
  }, [products.length]);

  function onChange() {
    setProducts(productStore.getProduct(order));
  }

  // slice must be done in the store!
  const mainProducts = products.slice(0, 10);
  const currency = "euros";

  return (
    <section className="slider">
      <div className="slider__text">
        <Link className="slider__title" to={url}>
          LIBROS - {text}
        </Link>
        <Link className="slider__view-all" to={url}>
          <p>VER TODO</p>
        </Link>
      </div>
      <div className="slider__content">
        {mainProducts.map((element) => (
          <div className="slider__content-wrapper">
            <div key={element.id} className="slider__item">
              <img
                key={element.id}
                alt={element.product.title}
                className="slider__image"
                // src= {require('../img/el-mentiroso.jpg')}
                src={element.product.cover}
              />
              <div key={element.id} className="slider__item-text">
                <div key={element.id}>{element.product.title}</div>
                <div key={element.id}>{element.product.author}</div>
                <div key={element.id}>
                  {element.product.price} {currency}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Slider;
