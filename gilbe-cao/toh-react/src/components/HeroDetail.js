import React from 'react';
import heroList from '../hero.mock';
import { Prompt } from 'react-router-dom';

class HeroDetail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			heroName: '',
			heroId: null,
			isFormDirty: false
		};

		this.onFieldChange = this.onFieldChange.bind(this);
	}

	onFieldChange(myEvent) {
		this.setState({
			[myEvent.target.name]: myEvent.target.value,
			isFormDirty: true
		});
	}

	getHeroById(id) {
		return heroList.find((hero) => hero.id === id);
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
					when={this.state.isFormDirty}
					message="Are you sure you want to navigate away?"
				/>
			</form>
		);
	}
}

export default HeroDetail;
