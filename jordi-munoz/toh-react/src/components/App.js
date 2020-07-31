import React from 'react';
import HeroDetail from './HeroDetail';
import HeroDashboard from './HeroDashboard';
import HeroList from './HeroList';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import heroListArray from '../hero.mock'
import PageNotFound from './PageNotFound';


function App(props) {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/' exact component={() => <HeroDashboard heroListArray={heroListArray} />} />
                <Route path='/heroes' component={() => <HeroList heroListArray={heroListArray} />} />
                <Route path='/hero/:heroId' component={HeroDetail} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}
export default App;
