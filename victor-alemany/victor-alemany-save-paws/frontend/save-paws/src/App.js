import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.css';
import Alert from './components/alert';
import Header from './components/header';
import PageNotFound from './components/pageNotFound';
import AlertList from './components/alertList';
import Footer from './components/footer';
import Profile from './components/profile';
import Home from './components/home';
import Categories from './components/categories';
import AlertForm from './components/alertForm';
import AlertsFiltered from './components/alertsFiltered';
import UserAlerts from './components/userAlerts';

function App() {
  return (
    <div className="App">

        <Header />
        <Switch>
          <Route path="/" exact component={Home} />  
          <Route path="/categories" exact component={Categories} /> 
          <Route path="/categories/alerts/:category" exact component={AlertsFiltered} />   
          <Route path="/alerts" exact component={AlertList} />
          <Route path="/alerts/:alertId" exact component={Alert} />
          <Route path="/newalert" exact component={AlertForm} />
          <Route path="/user/alerts/:userId" exact component={UserAlerts} />
          <Route path="/profile" exact component={Profile} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />

    </div>
  );
}

export default App;
