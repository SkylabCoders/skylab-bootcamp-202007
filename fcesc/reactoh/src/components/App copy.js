import React from 'react';
import './App.css';
import heroService from './../services/hero.service.js';
import PaginatedList from './PaginatedList';
import HeroDetail from './HeroDetail';
import HeroQuery from './HeroQuery';
import Header from './Header';
import Footer from './Footer';
import MainMenu from './MainMenu';
import PageNotFound from './PageNotFound';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import NewPaginatedList from './NewPaginatedList';
import FullList from './FullList';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayingComponent: 'PaginatedList',
      currentPage: 0,
      itemsPerPage: 25,
      data: heroService.getHeroListPage,   //heroService.getAsyncHeroList();
      numberOfPages: heroService.getHeroListTotalPages,
      numberOfHeroes: heroService.getHeroListTotalItems,
      currentHeroId: undefined,
      currentHero: heroService.getHeroByIdWorkaround
    }
  }

  render(){
    return(
      <div className="app__container">
        <Header/>
        <MainMenu/>
        <Switch>
          <Route path="/" exact>
            <PaginatedList
              click={(value)=>{
                //this.setState((state) => {return {displayingComponent: 'HeroDetail'}});
                this.setState((state) => {return {currentHeroId: value}});
                //return this.render();
                }}
              data={this.state.data(this.state.currentPage, this.state.itemsPerPage)}
              numberOfPages={this.state.numberOfPages(this.state.itemsPerPage)}
              currentPage={this.state.currentPage}
              numberOfHeroes={this.state.numberOfHeroes()}
              itemsPerPage={this.state.itemsPerPage}
              // itemsPerPageChange={(value)=>{console.log(value)}}
              nextPage={()=>{if (this.state.currentPage < this.state.numberOfPages(this.state.itemsPerPage)){
                this.setState((state) => {return {currentPage: state.currentPage++}});
                //return this.render();
              }}}
              previousPage={()=>{if (this.state.currentPage > 0){
                this.setState((state) => {return {currentPage: state.currentPage--}});
                //return this.render();
              }}}
            />
          </Route>
          <Route path="/hero/:heroId">
            <HeroDetail 
            />
          </Route>
          <Route path="/hero-search" component="HeroSearch"/>
          <Route path="/random-hero" component="HeroDetail"/>
          <Route path="/full-flux" component="FullList"/>
          <Route path="/paginated-flux" component="NewPaginatedList"/>
          <Route compoent="PageNotFound"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;