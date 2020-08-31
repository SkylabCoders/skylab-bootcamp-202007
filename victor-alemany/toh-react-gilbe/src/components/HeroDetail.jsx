import React, { useEffect, useState } from 'react';
import { Prompt } from 'react-router-dom';
import heroStore from '../stores/heroStore';
import { loadHeroes, saveHero } from '../actions/hero-actions';
import TextInput from './TextInput';

function HeroDetail(props) {
	const [heroes, setHeroes] = useState(heroStore.getHeroes());
	const [heroId, setHeroId] = useState(+props.match?.params?.heroId);
	const [heroName, setHeroName] = useState('');
	const [ObjId, setObjId] = useState('');

	const [isFormDirty, setIsFormDirty] = useState(false);

	useEffect(() => {
		heroStore.addChangeListener(onChange);
		if (heroes.length === 0) {
			loadHeroes();
		} else if (heroId) {
			const hero = heroStore.getHeroById(heroId);
			if (hero) {
				setHeroName(hero.name);
				setHeroId(hero.id);
				setObjId(hero._id);
			}
		}
		return () => heroStore.removeChangeListener(onChange);
	}, [heroes.length, props.match.params.heroId, heroId]);

	function onChange() {
		setHeroes(heroStore.getHeroes());
	}

	function onFieldChange(value, setValue) {
		setValue(value);
		setIsFormDirty(true);
	}

	function handleSubmit(event) {
		event.preventDefault();

		// Delete leading and trailing white spaces from name input before saving
		const name = heroName.trim();

		if (name) {
			saveHero({ name, id: ObjId }).then(() => props.history.push('/heroes'));
		}
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
				<button type="submit">Save Hero</button>
			</p>
		</form>
	);
}

export default HeroDetail;
