import React from 'react';
import loginComponent from '../loginComponent/loginComponent';
import registerComponent from '../registerComponent/registerComponent';
import charListComponent from '../charListComponent/charListComponent';
import detailsComponent from '../detailsComponent/detailsComponent';
import planetComponent from '../planetComponent/planetComponent';
import sagaComponent from '../sagaComponent/sagaComponent';

import { Route, Switch } from "react-router-dom";

function App(props) {

  return (
    <div>
      <Switch>
        <Switch>
          <Route path='/login' component={loginComponent} />
          <Route path='/register' component={registerComponent} />
        </Switch>
        <Switch>
          <navComponent />
          <Switch>
            <Route path='/' exact component={homeComponent} />

            <Route path='/charList' component={charListComponent} />
            <Route path='/details' component={detailsComponent} />
            <Route path='/planet' component={planetComponent} />
            <Route path='/saga' component={sagaComponent} />
            <Route component={PageNotFound} />
          </Switch>
        </Switch>
        <footerComponent />
      </Switch>

    </div>
  );
}

export default App;