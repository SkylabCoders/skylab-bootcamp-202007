import React from 'react';
import heroData from './hero.mock';

class HeroDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.getId();
		//this.state = { heroId: null, heroName: '' };
		this.onFieldChange = this.onFieldChange.bind(this);
	}

	onFieldChange(myEvent) {
		this.setState({ name: myEvent.target.value });
		//this.setState({ [myEvent.target.name]: myEvent.target.value });
		//console.log(myEvent.target.name, '=>', myEvent.target.value);
	}

	getId() {
		const url = window.location.pathname;
		const urlId = +url.split('/')[2];
		return heroData.find((element) => element.id === urlId);
	}

	render() {
		return (
			<main className="hero-details">
				<h3>
					<span>{this.state.name}</span> details!
				</h3>
				<form>
					<p className="hero-details__element">
						<span className="hero-details__id">id:</span>
						<span className="hero-details__id">{this.state.id}</span>
					</p>
					<label className="hero-details__name" htmlFor="heroName">
						name:
						<input
							name="heroName"
							placeholder="Hero name"
							value={this.state.name}
							onChange={this.onFieldChange}
						/>
					</label>
				</form>
				<span className="id btn btn-secondary">Back</span>
			</main>
		);
	}
}

export default HeroDetail;
