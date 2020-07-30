import React from 'react';
import HeroDetail from './HeroDetail';
import HeroDashboard from './HeroDashboard';
import Header from './Header';
import { Route } from 'react-router-dom';


function App(props) {
    const route = 'hero';
    let component = null;
    if(route === 'dashboard') {
        component = <HeroDashboard />;
    } else if (route === 'hero') {
        component = <HeroList />;
    } else if (route === 'hero/14') {
        component = <HeroDetail />;
    }
  return (
    <div>
      <Header />
      <Route path='/' exact component={HeroDashboard} />
      <Route path='/hero' component={HeroList} />
      <Route path='/hero/:heroId' component={HeroDetail} />
    </div>
  );
}
export default App;
