import React from 'react';
import loginComponent from '../loginComponent/loginComponent';
import registerComponent from '../registerComponent/registerComponent';
import charListComponent from '../charListComponent/charListComponent';
import detailsComponent from '../detailsComponent/detailsComponent';
import planetComponent from '../planetComponent/planetComponent';
import sagaComponent from '../sagaComponent/sagaComponent';
import homeComponent from '../homeComponent/homeComponent'

import { Route, Switch } from "react-router-dom";
import navComponent from '../navComponent/navComponent';

function App(props) {

  return (
    <div>
      <navComponent />
      <Switch>
        <Route path='/login' component={loginComponent} />
        <Route path='/register' component={registerComponent} />
        <Route path='/' exact component={homeComponent} />
        <Route path='/charList' component={charListComponent} />
        <Route path='/details' component={detailsComponent} />
        <Route path='/planet' component={planetComponent} />
        <Route path='/saga' component={sagaComponent} />
      </Switch>
      <footerComponent />

    </div>
  );
}

export default App;