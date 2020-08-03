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
	}, [heroes.length, props.match.params.heroId]);

	function onChange() {
		setHeroes(heroStore.getHeroes());
	}

	function onFieldChange(value, setValue) {
		setValue(value);
		setIsFormDirty(true);
	}

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
				<button type="submit">Save Hero</button>
			</p>
		</form>
	);
}

export default HeroDetail;












// class HeroDetail extends React.Component {
// constructor(props) {
// 	super(props);

// 	this.state = {
// 		heroName: '',
// 		heroId: '',
// 		formIsDirty: false
// 	};

// 	this.onFieldChange = this.onFieldChange.bind(this);
// }


// componentDidMount() {

// 	let heroe = this.findHeroById(+this.props.match.params.heroId)
// 	this.setState({
// 		heroName: heroe.name,
// 		heroId: heroe.id
// 	})
// }

// findHeroById(heroId) {
// 	return heroData.find((hero) => hero.id === heroId)

// }

// onFieldChange(myEvent) {
// 	this.setState({
// 		[myEvent.target.name]: myEvent.target.value, //[myEvent.target.name] = heroName 
// 		formIsDirty: true

// 	});

// }


// render() {
// 	return (
// 		<form>
// 			<p>{this.state.heroName} details!</p>
// 			<p>id: {this.state.heroId}</p>
// 			<label htmlFor="heroName">

// 				name:
// 					<input
// 					name="heroName"
// 					placeholder="Hero name"
// 					value={this.state.heroName}
// 					onChange={this.onFieldChange}
// 				/>

// 			</label>
// 			<button>Create Hero</button>
// 			<button>Update Hero</button>
// 			<Prompt
// 				when={this.state.formIsDirty}
// 				message='Are you sure you wamt to exit this page?'
// 			/>
// 		</form>
// 	);
// }
// }

// export default HeroDetail;
