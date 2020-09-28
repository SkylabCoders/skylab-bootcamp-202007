import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.sass';
import Header from './common/Header';
import Footer from './common/Footer';
import Welcome from './welcome/Welcome';
import Profile from './profile/Profile';
import Portfolio from './portfolio/Portfolio';
import Signup from './signup/Signup';
import Project from './project/Project';
import PageNotFound from './PageNotFound';
import PageNotAuthorised from './PageNotAuthorised';
import DonutChart from './graphics/DonutChart';
import Map from './common/Map';

function App() {
  return (
    <>
      <div className="main__container">
          <Header />
      </div>
      <div className="main__container">
        <main>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/login' component={Welcome} />
            <Route path='/profile' component={Profile} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/project/:projectSlug/:budgetId' component={Project} />
            <Route path='/project/:projectSlug' component={Project} />
            <Route path='/signup' component={Signup} />
            <Route exact path='/401' component={PageNotAuthorised} />
            <Route path='/chart' component={DonutChart} />
            <Route path='/map' component={Map} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
