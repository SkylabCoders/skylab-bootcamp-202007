import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import HeroDetail from './components/HeroDetail'
import HeroDashboard from './components/HeroDashboard';
import HeroList from './components/HeroList';
import { Route } from 'react-router-dom'

function App(props) { 
  return (
    <div>
      <Header />
      <Route path="/" exact component={HeroDashboard} />
      <Route path="/hero" component={HeroList} />
      <Route path="/hero/:heroId" component={HeroDetail} />
    </div>
  );
}

export default App;
