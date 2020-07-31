import React from 'react';
import heroData from './hero.mock';
import { Link, Prompt } from 'react-router-dom';

class HeroDetail extends React.Component {
	constructor(props) {
		super(props);
		//this.state = this.getId();
		//this.state = this.getHeroById(+this.props.match.params.heroId);
		this.state = { heroId: null, heroName: '', formIsDirty: false };
		this.onFieldChange = this.onFieldChange.bind(this);
	}

	onFieldChange(myEvent) {
		this.setState({ heroName: myEvent.target.value, formIsDirty: true });
		console.log(this.formIsDirty);
		//this.setState({ [myEvent.target.name]: myEvent.target.value });
		//console.log(myEvent.target.name, '=>', myEvent.target.value);
	}

	/* 	getId() {
		//const urlId = +window.location.pathnamesplit('/')[2]; // different approaches to get the hero id
		//const urlId = +this.props.location.pathname.split('/')[2];
		const urlId = +this.props.match.params.heroId;
		return heroData.find((element) => element.id === urlId);
	} */

	getHeroById(id) {
		return heroData.find((hero) => hero.id === id);
	}

	componentDidMount() {
		const hero = this.getHeroById(+this.props.match.params.heroId);
		this.setState({
			heroId: hero.id,
			heroName: hero.name
		});
	}

	render() {
		return (
			<main className="hero-details">
				<h3>
					<span>{this.state.heroName}</span> details!
				</h3>
				<form>
					<p className="hero-details__element">
						<span className="hero-details__id">id:</span>
						<span className="hero-details__id">{this.state.heroId}</span>
					</p>
					<label className="hero-details__name" htmlFor="heroName">
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
						message="Discard changes and go back?"
					/>
				</form>

				<Link className="button-back hero-element" to="/hero">
					Back
				</Link>
			</main>
		);
	}
}

export default HeroDetail;
