import React from 'react';
import HeroDetail from './HeroDetail';
import HeroDashboard from './HeroDashboard';
import HeroList from './HeroList';
import Header from './Header';
import { Route } from 'react-router-dom';
import heroListArray from '../hero.mock'


function App(props) {
    return (
        <div>
            <Header />
            <Route path='/' exact component={() => <HeroDashboard heroListArray={heroListArray} />} />
            <Route path='/heroes' component={() => <HeroList heroListArray={heroListArray} />} />
            <Route path='/hero/:heroId' component={HeroDetail} />
        </div>
    );
}
export default App;
