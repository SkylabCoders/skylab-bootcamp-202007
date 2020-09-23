import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <section className="main-container">
      <ProductList/>
      <Cart/>
    </section>
  );
}

export default App;
