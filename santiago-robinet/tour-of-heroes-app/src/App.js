import React from 'react';
import HeroDetail from './HeroDetailsG';
import Header from './HeroHeaderG';
import HeroList from './HeroListG';
import HeroDashboard from './HeroDashboardG';
import {Route} from 'react-router-dom';

function App() {
  const route = 'dashboard';
  let component = 'Nothing to see here!';
  
  if(route === 'dashboard'){
    component = <HeroDashboard/>;
  } else if( route === 'hero'){
    component = <HeroList/>
  } else if( route === 'hero/14'){
    component = <HeroDetail/>
  }


  return (
    <div>
      <Header/>
      <Route path="/" component={HeroDashboard}/>
      <Route path="/hero" component={HeroList}/>
      <Route path="/hero/:heroId" component={HeroDetail}/>
      
    </div>
  );
}
export default App;