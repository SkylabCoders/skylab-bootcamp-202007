import React from 'react';
import { Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import StoreList from './components/StoreList';
import InfoStore from './components/InfoStore';
import ProfileUser from './components/auth/ProfileUser';
import ProfileStore from './components/auth/ProfileStore';
import ProfileStoreProducts from './components/auth/ProfileStoreProducts';
import Cart from './components/Cart';
import TermsConditions from './components/TermsConditions';
import NotFoundPage from './components/NotFoundPage';


function App() {
  return (
   
    <Switch>
      <Route path="/" exact component={StoreList}/> 
      <Route path="/cart" exact component={Cart}/> 
      <Route path="/auth/profile" exact component={ProfileUser}/> 
      <Route path="/auth/store" exact component={ProfileStore}/>
      <Route path="/auth/products" exact component={ProfileStoreProducts}/>
      <Route path="/:storeId" exact component={ProductList} /> 
      <Route path="/info/:storeId" exact component={InfoStore}/> 
      <Route path="/:storeId/:productId" exact component={ProductDetail}/> 
      <Route path="/terms-conditions" exact component={TermsConditions}/>      
      <Route component={NotFoundPage}/> 
    </Switch>
   
  );
}

export default App;