import React, { useEffect, useState } from "react";
import { loadProducts } from "../actions/productActions";
import productStore from "../stores/productStore";
import genreStore from "../stores/genreStore";
import ProductListItem from "./ProductListItem";
import "./ProductList.css";
import cartStore from "../stores/cartStore";

function ProductList(props) {

  const genre = props.match.params.genre;
  const [products, setProducts] = useState(
    productStore.getProduct(genre)
  );


  useEffect(() => {
    productStore.addChangeListener(onChange);
    setProducts(productStore.getProduct(genre));
    if (products.length === 0) loadProducts();
    return () => productStore.removeChangeListener(onChange);
  }, [products.length, genre]);

  function onChange() {
    setProducts(productStore.getProduct(genre));
  }

  function addNumberCart() {
    cartStore.updateNumberCart();

  }


  return (
    <>
      <div className="ProductList__Title">{props.match.params.genre.toUpperCase()}</div>
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          id={product.id}
          title={product.product.title}
          author={product.product.author}
          price={product.product.price}
          cover={product.product.cover}
          description={product.product.description}
          addNumberCart={addNumberCart}
        />
      ))}
    </>
  );
}
export default ProductList;
