import React from 'react';
import './HeroDetail.css'
import heroList from '../hero-service';

class HeroDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroName: '',
			heroId: null
		};
		this.onFieldChange = this.onFieldChange.bind(this);
	}

	onFieldChange(myEvent) {
		this.setState({
			[myEvent.target.name]: myEvent.target.value
		});
	}

	componentDidMount() {
		const pathHeroId = this.getIdFromPathName();
		//Llamo a la función con el id de la url que he capturado
		const heroSearch = this.getHeroId(pathHeroId);
		//Actualizamos state
		this.setState({
			heroName: heroSearch.name,
			heroId: heroSearch.id
		})
	}

	getIdFromPathName() {
		//Cogemos de la url hero/id
		const urlParam = window.location.pathname;
		//Con un split separo esa parte de la dirección por la / y me quedo con la segunda parte
		const pathHeroId = urlParam.split('/')[2];
		//Devolvemos el id de la url
		return pathHeroId;
	}

	getHeroId(id) {
		//Me devuelve el objeto entero que coincida con el id que pasamos (pathHeroId)
		//¡Cuidado! Que el id de la url viene como string
		return heroList.find((hero) => hero.id === +id);
		
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

export default HeroDetail;
