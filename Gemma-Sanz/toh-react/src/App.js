import React from 'react';
import HeroDetail from './components/HeroDetail';
import HeroList from './components/HeroList';
import Header from './components/Header';
import HeroDashboard from './components/HeroDasboard';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

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
            <Switch>
                <Route path="/" exact component={HeroDashboard} />
                <Route path="/hero" exact component={HeroList} />
                <Route path="/hero/:heroId" exact component={HeroDetail} />
                <Redirect from="/redirect" to="/" />
                <Route component={PageNotFound} />
            </Switch>

        </div >
    )
}

export default App;