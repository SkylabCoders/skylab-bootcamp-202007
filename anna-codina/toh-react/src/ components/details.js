import React, { useState, useEffect } from 'react';
import '../ToH.css';
import { Link, Prompt } from 'react-router-dom';
import { loadHeroes, saveHero } from '../actions/heroActions';
import heroStore from '../stores/heroStore';

function Details(props) {
	const [heroes, setHeroes] = useState(heroStore.getHeroes());
	const [heroId, setHeroId] = useState(null);
	const [heroName, setHeroName] = useState(null);
	const [isFormDirty, setIsFromDirty] = useState(false);
	useEffect(() => {
		heroStore.addChangeListener(onChange);
		const heroId = +props.match.params.heroId;
		if (heroes.length === 0) {
			loadHeroes();
		} else if (heroId) {
			const hero = heroStore.getHeroById(heroId);
			if (hero) {
				setHeroName(hero.name);
				setHeroId(hero.id);
			}
			return () => heroStore.removeChangeListener(onChange);
		}
	}, [heroes.length, props.match.params.heroId]);
	function onChange() {
		setHeroes(heroStore.getHeroes());
	}
	function onFieldChange(value, setValue) {
		setValue(value);
		setIsFromDirty(true);
	}
	function handleSubmit(event) {
		event.preventDefault();
		const name = heroName.trim();
		if (name) {
			saveHero({ name: heroName, id: heroId }).then(() =>
				props.history.push('/heroes')
			);
		}
	}
	return (
		<div id="hero-detail__container">
			<h2>
				<span id="hero-detail__name">{heroName}</span> Details!
			</h2>
			<form onSubmit={handleSubmit}>
				{!heroId && <h2>Register a new hero:</h2>}
				{heroId && <p>Id: {heroId}</p>}
				<input
					name="heroName"
					value={heroName}
					placeholder="Hero name"
					onChange={(event) => onFieldChange(event.target.value, setHeroName)}
				/>
				<Prompt
					when={isFormDirty}
					message="Are you sure you want to navigate away?"
				/>
				<p>
					<button type="submit">Save Hero</button>
				</p>
			</form>
		</div>
	);
}

export default Details;
