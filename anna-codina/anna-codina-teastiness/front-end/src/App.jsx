import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import TeaDetail from './components/TeaDetail';
import MainPage from './components/mainPage';
import HeaderComponent from './components/HeaderComponent';
import ShopDetail from './components/ShopDetail';
import MapPage from './components/MapPage';
import Footer from './components/Footer';
import Profile from './components/ProfilePage';
import ShopFromPage from './components/ShopFormPage';
import ShopDeletePage from './components/ShopDeletePage';
import TeaDeletePage from './components/TeaDeletePage';
import TeaFormPage from './components/TeaFormPage';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <>
      <HeaderComponent />
      <Switch>
        <main>
          <Route path="/" exact component={MainPage} />
          <Route path="/tea/:teaId" component={TeaDetail} />
          <Route path="/shop/:shopId" component={ShopDetail} />
          <Route path="/deleteshop/:shopId" component={ShopDeletePage} />
          <Route path="/map" component={MapPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/shopform/:shopId" component={ShopFromPage} />
          <Route path="/teaform/:teaId" component={TeaFormPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/deletetea/:teaId" component={TeaDeletePage} />
        </main>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
