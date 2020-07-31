import React from 'react';
import DashBoard from './DashBoard';
import HeroList from './HeroList';
import Header from './Header-heros';
import Detail from './Details';
import { Route, Switch } from "react-router-dom";
import heroList from './hero.mock'
import PageNotFound from './NotFound'


function App(props) {

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/' exact > <DashBoard heroList={heroList} /></Route>
                <Route path='/herolist' component={() => <HeroList heroList={heroList} />} />
                <Route path='/id/:heroId' component={(props) => <Detail heroList={heroList} {...props} />} />
                <Route component={PageNotFound} />
            </Switch>

        </div>
    );
}

export default App;