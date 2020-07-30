import React from 'react';
import HeroDetail from './HeroDetailsG';
import Header from './HeroHeaderG';
import HeroList from './HeroListG';
import HeroDashboard from './HeroDashboardG';
import {Route} from 'react-router-dom';
import heroList from './component/hero.mock';


function App() {

  return (
    <div>
      <Header/>
      <Route path="/" exact component={() => <HeroDashboard heroes={heroList}/>}/>
      <Route path="/heroes" component={() => <HeroList heroes={heroList}/>}/>
      <Route path="/hero/:heroId" component={HeroDetail}/>
      
    </div>
  );
}
export default App;