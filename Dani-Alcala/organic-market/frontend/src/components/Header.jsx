import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import productStore from "../stores/productStore";
// import TextInput from "./TextInput";

function Header() {
  // const [productName, setProductName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [genre, setGenre] = useState("");
  const [numberCart, setNumberCart] = useState(productStore.getNumberCart());

  setInterval(() => setNumberCart(productStore.getNumberCart()), 100);

  useEffect(() => {
    productStore.addChangeListener(onChange);
    return () => productStore.removeChangeListener(onChange);
  },[])

  function handleClick() {
    setShowForm(true);
  }

  function onChange(){
    setNumberCart(productStore.getNumberCart()); 
  }
  
  return (
    <>
      <section className="main-nav">
        

        <Link to="/" className="icon__logo"></Link>

        <div>

          <p className="header__logo-text">ORGANIC MARKET</p>
          
        </div>

        <div className="hidden"></div>

        {/* {searchForm} */}

        <Link to={handleClick} className="icon__search"></Link>

        <Link to="/login" className="icon__login"></Link>
        
        <Link to="/cart" className="icon__bag">
          <div className="icon__number">{numberCart}</div>
        </Link>
      
      </section>
    </>
  );
}

export default Header;
