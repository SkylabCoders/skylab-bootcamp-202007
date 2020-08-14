import React, { useEffect, useState } from 'react';
import heroList from './component/hero.mock';
import { Prompt } from 'react-router-dom';
import heroStore from './stores/heroStore';
import {loadHeroes} from './actions/heroActions';

function HeroDetail(props) {
	const [heroes,setHeroes] = useState(heroStore.getHeroes());
	const [isFormDirty, setIsDirty] =  useState(false);
	const [heroName, setHeroName] = useState('');
	const [heroId, setHeroId] =  useState(null);

	useEffect(() => {
		heroStore.addChangeListener(onChange);
		const heroId = +props.match.params.heroId;
		if (heroes.length === 0) {
			loadHeroes();
		} else if (heroId){
			const hero = heroStore.getHeroById(heroId);
			if(hero){
				setHeroName(hero.name);
				setHeroId(hero.id);
			}
		}
		return () => heroStore.removeChangeListener(onChange);
	}, heroes.length, props.match.params.heroId);

	function onFieldChange(value,setValue) {
		setValue(value)
		setIsDirty(true)
	}

	function onChange () {
		setHeroes(heroStore.getHeroes());
	}

	function getHeroById() {
		// const path = window.location.pathname;
		// const id = path.split('/')[2]

		const id = this.props.match.params.heroId;
		const heroSearch = heroList.find((hero) => hero.id === +id);
		return heroSearch;
	}


	return (
		<form>
			<h2 className="details__title">{this.state.heroName} details!!</h2>
			<p>
				id: <span>{this.state.heroId}</span>
			</p>
			<label htmlFor="heroName">
				name:
				<input
					name="heroName"
					placeholder="Hero name"
					value={this.state.heroName}
					onChange={this.onFieldChange}
				/>
			</label>
			<Prompt
				when={this.state.formIsDirty}
				message="Are you sure you want to navigate away?"
			/>
		</form>
	);
}

export default HeroDetail;
