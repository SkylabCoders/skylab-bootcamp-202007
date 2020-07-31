import React from 'react';
import heroData from '../heroData';
import { Prompt } from 'react-router-dom'

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

	componentDidMount() {
		const heroe = this.findHeroById(+this.props.match.params.heroId)
		this.setState({
			heroName: heroe.name,
			heroId: heroe.id
		})
	}

	findHeroById(heroId) {
		return heroData.find((hero) => hero.id === heroId)

	}

	onFieldChange(myEvent) {
		this.setState({
			[myEvent.target.name]: myEvent.target.value, //[myEvent.target.name] = heroName 
			formIsDirty: true

		});
	}

	render() {
		return (
			<form>
				<p>{this.state.heroName} details!</p>
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
					message='Are you sure you wamt to exit this page?'
				/>
			</form>
		);
	}
}

export default HeroDetail;
