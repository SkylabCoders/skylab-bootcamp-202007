import React from 'react';
import DashBoard from './DashBoard';
import HeroList from './HeroList';
import Header from './Header-heros';
import Detail from './Details';
import { Route } from "react-router-dom";


function App(props) {

    return (
        <div>
            <Header />
            <Route path='/' exact component={DashBoard} />
            <Route path='/herolist' component={HeroList} />
            <Route path='/id/:heroId' component={Detail} />


        </div>
    );
}

export default App;