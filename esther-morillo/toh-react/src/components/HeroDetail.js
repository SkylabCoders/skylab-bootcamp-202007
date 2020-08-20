import React, { useEffect, useState } from 'react';
import { Prompt } from 'react-router-dom';
import heroStore from '../stores/heroStore';
import { loadHeroes, saveHero } from '../actions/heroActions';
import TextInput from './TextInput';

function HeroDetail(props) {
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
				setHeroName(hero.name);
				setHeroId(hero.id);
			}
		}
		return () => heroStore.removeChangeListener(onChange);
	}, [heroes.length, props.match.params.heroId]); //Esto es un array de condiciones. Si se cumple uno u otro vuelve a ejecutar. Si es un array vacío se ejecuta solo una vez

	function onChange() {
		setHeroes(heroStore.getHeroes());
	}

	function onFieldChange(value, setValue) {
		setValue(value);
		setIsFormDirty(true);
	}

	function handleSubmit(event) {
		event.preventDefault();
		//para que no coja espacios o que alguien escriba un espacio y ya lo coja como nombre
		const name = heroName.trim();
		
		if(name) {
			saveHero({ name, id: heroId }).then(() =>
				props.history.push('/heroes')
			);
		} else {
			alert('hero name is empty')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			{/* Si no hay un ID muestro el h2. Solo funciona ocn booleano delante (truco). No es decir esta condición y esta otra */}
			{!heroId && <h2>Register a new hero:</h2>}
			{/* SI hay un ID haz esto */}
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
