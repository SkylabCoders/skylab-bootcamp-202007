import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import CategorySlider from './components/CategorySlider';
import Header from './components/Header';
import Results from './components/Results';
import Footer from './components/Footer';
import RegisterProject from './components/RegisterProject';
import Login from './components/Login';
import Profile from './components/Profile';
import RegisterUser from './components/RegisterUser';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/form' component={CategorySlider} />
          <Route path='/results' component={Results} />
          <Route path='/project-register' component={RegisterProject} />
          <Route path='/login' component={Login} />
          <Route path='/user-register' component={RegisterUser} />
          <Route path='/profile' component={Profile} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


