import React from 'react';
import HeroList from '../hero.mock'
import heroList from '../hero.mock';
import {Prompt} from 'react-router-dom'



class HeroDetail extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			heroName:'',
			heroId: null,
			formIsDirty: true			
		};
		this.onFieldChange = this.onFieldChange.bind(this); //le asigno el contexto que me interesa, que es el objeto que se crea con esta clase. El form tiene su propio contexto
	}
	
	getHeroById(id){
		return heroList.find((hero) => hero.id === id)
	}
	
	onFieldChange(event) {
		this.setState({
			// heroName: event.target.value //es pot fer aixi, més fàcil
			[event.target.name]: event.target.value //propiedad dinamica, així està preparat per si poso un altre input amb el name associat correctament a this.state
		});
		console.log(this.state.heroName);
	}

	componentDidMount() {
		const hero = this.getHeroById(+this.props.match.params.heroId)
		this.setState({
			heroName: hero.name,
			heroId: hero.id
		})
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
				<Prompt when={this.state.formIsDirty} message="Are you sure you want to navigate?" />
			</form>
		);
	}
}

export default HeroDetail;
