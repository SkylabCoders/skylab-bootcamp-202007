import React from 'react';
import DashBoard from './components/DashBoard';
import HeroList from './components/HeroList';
import Header from './components/Header-heros';
import Detail from './components/Details';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import heroList from './hero.mock'
import PageNotFound from './NotFound'


function App(props) {

    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path='/' exact > <DashBoard heroList={heroList} /></Route>
                    <Route path='/herolist' component={() => <HeroList heroList={heroList} />} />
                    <Route path='/id/:heroId' component={(props) => <Detail heroList={heroList} {...props} />} />
                    <Route component={PageNotFound} />
                </Switch>

            </div>
        </Router>
    );
}

export default App;