import React from 'react'
import HeroList from './HeroList'
import HeroDashboard from './HeroDashboard'
//import HeroDetail from './HeroDetail'
import heroList from '../hero-service'
import { generate } from 'shortid'



function TourHero() { 
    function handleClickDashboard() {
    
        let heroTopList = heroList.slice(0, 4);
        return (
            <>
            {
                heroTopList.map((hero) => (
                <HeroDashboard 
                key={generate()}
                name={hero.name}
                />
            ))
            }
            </>
        )
    }
    
    function handleClickList() {
        return (
            <div>
                {   
                    heroList.map((hero) => (
                    <HeroList 
                    key={generate()}
                    id={hero.id}
                    name={hero.name}
                    />
                    )) 
                }
            </div>
        )
    }
    return (
        <>
            <h1>Tour of Heroes</h1>
            <button className="btn btn-link" onClick={handleClickDashboard}>Dashboard</button>
            <button className="btn btn-link" onClick={handleClickList}>Heroes</button>

            {/* <HeroDetail /> */}
        </>
    );
}



export default TourHero