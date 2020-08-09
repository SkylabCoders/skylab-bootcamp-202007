import React, { useState, useEffect } from 'react';
import LoginComponent from '../loginComponent/loginComponent';
import RegisterComponent from '../registerComponent/registerComponent';
import CharListComponent from '../charListComponent/charListComponent';
import DetailsComponent from '../detailsComponent/detailsComponent';
import PlanetComponent from '../planetComponent/planetComponent';
import SagaComponent from '../sagaComponent/sagaComponent';
import HomeComponent from '../homeComponent/homeComponent';
import FooterComponent from '../footerComponent/footerComponent';
import GameComponent from "../gameComponent/gameComponent";
import authStore from '../../stores/authStore'
import { Route, Switch } from "react-router-dom";
import NavComponent from '../navComponent/navComponent';
import ProfileComponent from '../profileComponent/profileComponent';
import AboutComponent from '../aboutComponent/aboutComponent';


function App(props) {

  const [isLogged, setIsLogged] = useState(authStore.isLogged());

  useEffect(() => {
    authStore.addChangeListener(onAuthChange);
    return () => authStore.removeChangeListener(onAuthChange)
  }, [isLogged])

  function onAuthChange() {
    setIsLogged(authStore.isLogged())
  }


  return (
    <div>
      <NavComponent />
      <div className='bodyClass'>
        <Switch>
          <Route path='/login' component={LoginComponent} />
          <Route path='/register' component={RegisterComponent} />
          <Route path='/' exact component={HomeComponent} />
          <Route path='/charList/:filter/:name' component={CharListComponent} />
          <Route path='/details/:name' component={DetailsComponent} />
          <Route path='/planet' component={PlanetComponent} />
          <Route path='/saga' component={SagaComponent} />
          <Route path='/game/:enemy' component={GameComponent} />
          <Route path='/profile' component={ProfileComponent} />
          <Route path='/about' component={AboutComponent} />
        </Switch>
      </div>
      <FooterComponent />

    </div>
  );
}

export default App;