import React, { useEffect, useState } from "react";
import "./Carousel.css";
import CarouselImageGenerator from "./CarouselImageGenerator";
import productStore from "../stores/productStore";
import { loadProducts } from "../actions/productActions";

function Carousel() {
  let carouselPage = 0;
  const carouselStep = 5;

  const [products, setProducts] = useState(
    productStore.getCarouselPage(carouselPage, carouselStep)
  );

  useEffect(() => {
    productStore.addChangeListener(onChange);
    if (products.length === 0) loadProducts();

    setInterval(() => {
      //Le falta esta variable necesito pasarla por las variablesde la funcion? no deberia leerlo del scope global?
      ++carouselPage;

      setProducts(productStore.getCarouselPage(carouselPage, carouselStep));
    }, 5000);

    return () => productStore.removeChangeListener(onChange);
  }, [products.length]);
  function onChange() {
    setProducts(productStore.getProduct());
  }
  return (
    <div className="main-carousel">
      {products.map((element) => {
        return <CarouselImageGenerator products={element} key={element.id} />;
      })}
    </div>
  );
}

export default Carousel;
