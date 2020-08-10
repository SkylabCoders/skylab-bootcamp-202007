import React from 'react';
import './../css/app.css';
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
import * as ROUTES from './../config/routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App(){
  return(
    <div className="app__container">
      <Router>
        <Header/>
        <MainMenu/>
        <Switch>
          <Route path={ROUTES.HOME} exact><PaginatedList/></Route>
          <Route path={ROUTES.HERO_LIST_PAGINATED_WILDCARD}><PaginatedList/></Route>
          <Route path={ROUTES.TOP_HEROES} exact><TopHeroes/></Route>
          <Route path={ROUTES.HERO_DETAIL_WILDCARD}><HeroDetail/></Route>
          <Route path={ROUTES.HERO_SEARCH}><HeroQuery/></Route>
          <Route path={ROUTES.HERO_DETAIL_RANDOM}><HeroDetail/></Route>
          <Route path={ROUTES.HERO_LIST_FULL}><FullList/></Route>
          <Route><PageNotFound/></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;