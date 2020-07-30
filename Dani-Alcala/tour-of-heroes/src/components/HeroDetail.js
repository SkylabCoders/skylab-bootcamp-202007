import React from 'react';

class HeroDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroName: 'Bombasto',
			heroId: 14,
		};
		this.onFieldChange = this.onFieldChange.bind(this);//le asigno el contexto que me interesa, que es el objeto que se crea con esta clase. El form tiene su propio contexto
	}
	onFieldChange(event) {
		this.setState({
			// heroName: event.target.value //es pot fer aixi, més fàcil
			[event.target.name]: event.target.value //propiedad dinamica, així està preparat per si poso un altre input amb el name associat correctament a this.state
		})
		console.log(this.state.heroName)
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
			</form>
		);
	}
}

export default HeroDetail;
