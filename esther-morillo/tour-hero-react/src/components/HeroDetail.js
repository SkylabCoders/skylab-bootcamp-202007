import React from 'react';
import './heroDetail.css';
import heroList from '../hero-service';
import { Prompt } from 'react-router-dom';


class HeroDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroName: '',
			heroId: null,
			forIsDirty: false
		};
		this.onFieldChange = this.onFieldChange.bind(this);
	}

	onFieldChange(myEvent) {
		this.setState({
			[myEvent.target.name]: myEvent.target.value,
			forIsDirty: true
		});
	}

	getHeroId(id) {
		//Me devuelve el objeto entero que coincida con el id que pasamos (pathHeroId)
		return heroList.find((hero) => hero.id === id);
	}

	componentDidMount() {
		//¡Cuidado! Que el id de la url viene como string (+)
		// heroId se lo hemos puesto nosotros en App.js ==> :heroId 
		// console.log(this.props.match.params) ==> me devuelve => {heroId: "16"} 
		// this.props.match.params.heroId => Me devuelve el id
		console.log(this.props.match.params)
		const hero = this.getHeroId(+this.props.match.params.heroId);
		//Actualizamos state
		this.setState({
			heroName: hero.name,
			heroId: hero.id
		})
	}


	render() {
		return (
			<div className="form__container">
			<form className="form">
				<h2 className="detail__title">{this.state.heroName} details!</h2>
				<p className="detail__name">id: {this.state.heroId}</p>
				<label className="detail__name" htmlFor="heroName">
					name:
					<input
						className="input"
						name="heroName"
						placeholder="Hero name"
						value={this.state.heroName}
						onChange={this.onFieldChange}
					/>
				</label>

				<Prompt 
					when={this.state.forIsDirty}
					message="Are you sure you want to navigate away?"
				/>

			</form>
			</div>
		);
	}
}

export default HeroDetail;
