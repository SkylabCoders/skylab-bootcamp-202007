import React from 'react';
import heroMock from '../Assets/heroMock';
import { Prompt } from 'react-router-dom';

class Details extends React.Component {
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
		//const pahtHeroId = this.getIdFromPathName();

		const pahtHeroId = this.props.match.params.heroId;
		const heroSearch = this.getHeroById(pahtHeroId);
		this.setState({
			heroName: heroSearch.name,
			heroId: heroSearch.id
		});
	}

	getHeroById(id) {
		return heroMock.find((hero) => hero.id === id);
	}

	onFieldChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
			formIsDirty: true
		});
	}

	// Pongo el name del control igual que el nombre de mi propiedad del state (input name=heroName || state-> heroName)
	// Declaro el valor del control (input value) -> propiedad del estado (el name del state)
	// Vinculo el evento sintetico a un callbck
	// Que el callback cambie el setState y ponga el valor nuevo a las propiedades
	// Garantizar que la funcion SIEMPRE se ejecute contexto del componente (el bind)

	render() {
		return (
			<div>
				<h2>{this.state.heroName} details</h2>
				<form>
					<p>id: {this.state.heroId}</p>
					<label htmlFor="heroName">
						name:
						<input
							placeholder="Hero name"
							name="heroName"
							value={this.state.heroName}
							onChange={this.onFieldChange}
						/>
					</label>
				</form>
				<Prompt
					when={this.state.formIsDirty}
					message="Are you sure you want to leave the page?"
				/>
			</div>
		);
	}
}

export default Details;
