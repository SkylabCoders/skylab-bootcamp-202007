import React from 'react';
import HeroList from '../component/HeroList'
import HeroDetails from '../component/HeroDetails'
import HeroDashboard from '../component/HeroDashboard'
import heroList from './hero.mock'

function TourOfHeroes(props){

    return(
        <div className='contenedor'>
            <div className='header'>
                <h1>Tour Of Heroes</h1>
                <button>Dashboard</button><button>Heroes</button>
            </div>
            <main>
                <HeroDashboard heroes={heroList}/>
                <HeroDetails />
                <HeroList heroes={heroList}/>
            </main>
        </div>

    );

}

export default TourOfHeroes;