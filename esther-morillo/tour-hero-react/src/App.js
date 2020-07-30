import React from 'react';

import HeroDetail from './components/HeroDetail';
import Header from './components/Header';
import HeroDashboard from './components/HeroDashboard';
import HeroList from './components/HeroList';


function App() {
    const route = 'dashboard'
    let component = 'Nothing to see here!'

    if (route === 'dashboard') {
        component = <HeroDashboard />;
    } else if (route === 'hero') {
        component = <HeroList />
    } else if (route === 'hero/14')

    return (
        <div>
            <Header />
            {route === 'dashboard' && <HeroDashboard />}
            {route === 'hero' && <HeroList />}
            {route === 'hero/14' && <HeroDetail />}            
        </div>
    )
}

export default App;