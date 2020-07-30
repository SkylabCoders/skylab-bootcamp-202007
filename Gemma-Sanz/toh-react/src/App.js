import React from 'react';
import HeroDetail from './components/HeroDetail';
import HeroList from './components/HeroList';
import Header from './components/Header';
import HeroDashboard from './components/HeroDasboard';
import { Route } from 'react-router-dom';


function App() {
    /* Sense rutes ho podriem fer així
         const route = 'dashboard';
        let component = < HeroDashboard />
        if (route === 'dashboard') {
            component = <HeroDashboard />;
        } else if (route === 'hero') {
            component = <HeroList />;
        } else if (route === 'hero/14') {
            component = <HeroDetail />;
        } */
    return (
        <div>
            <Header />
            <Route path="/" exact component={HeroDashboard} />
            <Route path="/hero" exact component={HeroList} />
            <Route path="/hero/:heroId" component={HeroDetail} />

        </div>
    )
}

export default App;