import React from 'react';
import './App.css';
import HeroDetail from './HeroDetail';
import HeroQuery from './HeroQuery';
import Header from './Header';
import Footer from './Footer';
import TopHeroes from './TopHeroes';
import MainMenu from './MainMenu';
import PageNotFound from './PageNotFound';
import { Route, Switch } from 'react-router-dom';
import PaginatedList from './PaginatedList';
import FullList from './FullList';

function App(){
  return(
    <div className="app__container">
      <Header/>
      <MainMenu/>
      <Switch>
        <Route path="/" exact><PaginatedList/></Route>
        <Route path="/hero-list/:currentPage"><PaginatedList/></Route>
        <Route path="/top-heroes" exact><TopHeroes/></Route>
        <Route path="/hero/:heroId"><HeroDetail/></Route>
        <Route path="/hero-search"><HeroQuery/></Route>
        <Route path="/random-hero"><HeroDetail/></Route>
        <Route path="/full-flux"><FullList/></Route>
        <Route><PageNotFound/></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;