import React from 'react';
import './heroDetails.css';
import HeroList from './heroList';
import LIST_HEROES from './hero-list-mock';
import { Prompt } from 'react-router-dom';

class HeroDetails extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			heroName: '',
			heroId: null
		};
		this.onFieldChange = this.onFieldChange.bind(this);
	}
	getHeroById(id) {
		return LIST_HEROES.find((hero) => hero.id === id);
	}
	onFieldChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	componentDidMount() {
		const hero = this.getHeroById(+this.props.match.params.heroId);
		this.setState({
			heroName: hero.name,
			heroId: hero.id
		});
	}
	render() {
		return (
			<div className="HeroDetails">
				<h1>Tour of heroes</h1>
				<h3>{this.state.heroName} Details!</h3>

				<form>
					<p>id:{this.state.heroId}</p>
					<label htmlfor="heroName">
						<Prompt
							when={this.state.formIsDirty}
							message="Are you sure you want to navigate away?"
						/>
						name:
						<input
							name="heroName"
							placeholder="Hero name"
							value={this.state.heroName}
							onChange={this.onFieldChange}
						/>
					</label>
				</form>
			</div>
		);
	}
}

export default HeroDetails;
