import React from 'react';
import DashBoard from './DashBoard';
import HeroList from './HeroList';
import Header from './Header-heros';
import Detail from './Details';
import { Route } from "react-router-dom";
import heroList from './hero.mock'


function App(props) {

    return (
        <div>
            <Header />
            <Route path='/' exact component={() => <DashBoard heroList={heroList} />} />
            <Route path='/herolist' component={() => <HeroList heroList={heroList} />} />
            <Route path='/id/:heroId' component={(props) => <Detail heroList={heroList} {...props} />} />


        </div>
    );
}

export default App;