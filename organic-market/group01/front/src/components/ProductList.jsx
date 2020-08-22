import React, { useEffect, useState } from "react";
import { loadProducts } from "../actions/productActions";
import productStore from "../stores/productStore";
import genreStore from "../stores/genreStore";
import ProductListItem from "./ProductListItem";
import "./ProductList.css";
import cartStore from "../stores/cartStore";

function ProductList(props) {

  
  const [products, setProducts] = useState(
    productStore.getProduct()
  );


  useEffect(() => {
    productStore.addChangeListener(onChange);
    setProducts(productStore.getProduct());
    if (products.length === 0) loadProducts();
    return () => productStore.removeChangeListener(onChange);
  }, [products.length]);

  function onChange() {
    setProducts(productStore.getProduct());
  }

  function addNumberCart() {
    cartStore.updateNumberCart();

  }


  return (
    <>
      <div className="ProductList__Title">LISTA DE PRODUCTOS</div>
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          id={product.id}
          title={product.title}
          type={product.type}
          description={product.description}
          price={product.price}
          rating={product.rating}
          addNumberCart={addNumberCart}
        />
      ))}
    </>
  );
}
export default ProductList;
