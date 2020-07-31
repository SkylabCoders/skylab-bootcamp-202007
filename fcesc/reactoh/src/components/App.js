import React from 'react';
import './App.css';
import heroService from './../services/hero.service.js';
import PaginatedList from './PaginatedList';
import HeroDetail from './HeroDetail';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayingComponent: 'PaginatedList',
      currentPage: 0,
      itemsPerPage: 20,
      data: heroService.getHeroListPage,   //heroService.getAsyncHeroList();
      numberOfPages: heroService.getHeroListTotalPages,
      numberOfHeroes: heroService.getHeroListTotalItems,
      currentHeroId: undefined,
      currentHero: heroService.getHeroByIdWorkaround
    }
  }

  stateRender(){
    if(this.state.displayingComponent === 'PaginatedList'){
      return (
        <PaginatedList 
          click={(value)=>{
            this.setState((state) => {return {displayingComponent: 'HeroDetail'}});
            this.setState((state) => {return {currentHeroId: value}});
            return this.render();
            }}
          data={this.state.data(this.state.currentPage, this.state.itemsPerPage)}
          numberOfPages={this.state.numberOfPages(this.state.itemsPerPage)}
          currentPage={this.state.currentPage}
          numberOfHeroes={this.state.numberOfHeroes()}
          itemsPerPage={this.state.itemsPerPage}
          // itemsPerPageChange={(value)=>{console.log(value)}}
          nextPage={()=>{if (this.state.currentPage < this.state.numberOfPages(this.state.itemsPerPage)){
            this.setState((state) => {return {currentPage: state.currentPage++}});
            return this.render();
          }}}
          previousPage={()=>{if (this.state.currentPage > 0){
            this.setState((state) => {return {currentPage: state.currentPage--}});
            return this.render();
          }}}
        />
      );
    } else if (this.state.displayingComponent === 'HeroDetail'){
      const hero = this.state.currentHero(this.state.currentHeroId)
      return(
        <HeroDetail
          hero={hero}
          click={()=>{
            this.setState((state) => {return {displayingComponent: 'PaginatedList'}});
            this.setState((state) => {return {currentHeroId: undefined}});
            return this.render();
            }}
        />
      );
    }
  }

  render(){
    return this.stateRender();
  }
}

export default App;