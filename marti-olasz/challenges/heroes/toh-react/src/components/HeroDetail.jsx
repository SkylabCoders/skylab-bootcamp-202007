import React, { useEffect, useState } from 'react';
import { Prompt } from 'react-router-dom';
import heroStore from '../stores/heroStore';
import { loadHeroes, saveHero } from '../actions/heroActions';
import TextInput from './TextInput';

function HeroDetail(props) {
	const actualHero = null;
	const [heroes, setHeroes] = useState(heroStore.getHeroes());
	const [heroId, setHeroId] = useState(null);
	const [heroName, setHeroName] = useState('');
	const [isFormDirty, setIsFormDirty] = useState(false);

	useEffect(() => {
		heroStore.addChangeListener(onChange);
		const heroId = +props.match.params.heroId;
		if (heroes.length === 0) {
			loadHeroes();
		} else if (heroId) {
			const hero = heroStore.getHeroById(heroId);
			if (hero) {
				console.log(hero);
				setHeroName(hero.name);
				setHeroId(hero.id);
			}
		}
		return () => heroStore.removeChangeListener(onChange);
	}, [heroes.length, props.match.params.heroId]);

	function onChange() {
		setHeroes(heroStore.getHeroes());
	}

	function onFieldChange(value, setValue) {
		setValue(value);
		setIsFormDirty(true);
	}

	function onSave(event, id) {}

	function handleSubmit(event) {
		event.preventDefault();
		saveHero({ name: heroName, id: heroId }).then(() =>
			props.history.push('/heroes')
		);
	}

	return (
		<form onSubmit={handleSubmit}>
			{!heroId && <h2>Register a new hero:</h2>}
			{heroId && (
				<>
					<h2>{heroName} details!</h2>
					<p>Id: {heroId}</p>
				</>
			)}

			<TextInput
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
				<button type="submit" onClick={(event) => onSave(event, heroId)}>
					Save Hero
				</button>
			</p>
		</form>
	);
}

export default HeroDetail;
