import React, { useState, useEffect } from 'react';
import heroStore from '../stores/heroStore';
import { getHero } from '../actions/heroActions';

function HeroDetail(props){
    const [heroes, setHeroes]= useState([]);

    useEffect(()=>{
        heroStore.addChangeListener(onChange);
        if(heroes.length === 0) getHero();
        return ()=> heroStore.removeChangeListener(onChange);
    },[]);

    function onChange(){
        const id = props.match.params.heroId
        setHeroes(heroStore.getHeroById(id));
    }

    useEffect(()=>{
        heroStore.addChangeListener(onChange);
        if(heroes.length === 0) updateHero();
        return ()=> heroStore.removeChangeListener(onChange);
    },[]);

    function onChange(){
        const id = props.match.params.heroId
        setHeroes(heroStore.getHeroById(id));
    }

		return (
			<form>
                <div>
                    <h2>{heroes.name} details</h2>
                </div> 
				<p>id: {heroes.id}</p>
				<label htmlFor="heroName">
					name:
					<input
						name="heroName"
						placeholder="Hero name"
						value={heroes.name}
                        onChange={this.onFieldChange}/>
				</label>
			</form>
            
        );	
}

export default HeroDetail;