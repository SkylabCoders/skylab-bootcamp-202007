import React, { useEffect } from 'react';
import './detail.css';
import { Prompt } from 'react-router';
import store from '../../stores/heroStore';

class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroName: '',
			heroId: null,
			formIsDirty: false
		};
		this.onFieldChange = this.onFieldChange.bind(this);
	}

	onFieldChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
			formIsDirty: true
		});
	}

	getHeroById() {
		const heroes = store.getHeroes();
		const id = this.props.match.params.heroId;
		const heroSearch = heroes.find((hero) => hero.id === +id);
		return heroSearch;
	}

	componentDidMount() {
		const getHero = this.getHeroById();

		this.setState({
			heroName: getHero.name,
			heroId: getHero.id
		});
	}

	render() {
		return (
			<form>
				<p className="hero-detail__name">{this.state.heroName} details!</p>
				<p className="hero-detail__label">id: {this.state.heroId}</p>
				<label className="hero-detail__label" htmlFor="heroName">
					name:
					<input
						name="heroName"
						placeholder="Hero Name"
						value={this.state.heroName}
						onChange={this.onFieldChange}
					/>
				</label>
				<Prompt
					when={this.state.formIsDirty}
					message="Are you sure you want to navigate away"
				/>
			</form>
		);
	}
}
export default Detail;
