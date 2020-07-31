import React from 'react';
import './detail.css';
import heroList from '../../heroMock';

class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroName: 'Bombasto',
			heroId: 14
		};
		this.onFieldChange = this.onFieldChange.bind(this);
	}

	onFieldChange(event) {
		this.setState({
			heroName: event.target.value,
			heroId: event.target.value
		});
	}

	getHeroById() {
		const path = window.location.pathname;
		const id = path.split('/')[2];
		const heroSearch = heroList.find((hero) => hero.id === +id);
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
			</form>
		);
	}
}
export default Detail;
