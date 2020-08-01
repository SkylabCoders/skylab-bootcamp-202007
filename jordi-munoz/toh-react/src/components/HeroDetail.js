import React from 'react';
import './HeroDetail.css';
import heroListArray from '../hero.mock'
import { Prompt } from 'react-router-dom';

class HeroDetail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			heroName: '',
			heroId: null,
			formIsDirty: false
		};

		this.onFieldChange = this.onFieldChange.bind(this);
	}

	onFieldChange(myEvent) {
		this.setState({
			[myEvent.target.name]: myEvent.target.value
		});
	}

	getHeroById(id) {
		return heroListArray.find((hero) => hero.id === id);
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
			<form>
				<p>id: {this.state.heroId}</p>
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
}

export default HeroDetail;