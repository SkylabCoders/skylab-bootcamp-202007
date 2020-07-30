import React from 'react';
import heroList from './component/hero.mock';

class HeroDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroName: '',
			heroId: null
		};
		this.onFieldChange = this.onFieldChange.bind(this);
	}

	onFieldChange(event) {
		this.setState({
            heroName: event.target.value
        })
	}

	getHeroById(){
		const path = window.location.pathname;
		const id = path.split('/')[2];
		const heroSearch = heroList.find((hero) => hero.id === +id);
		return heroSearch;
	}


	componentDidMount(){
		const getHero = this.getHeroById();
		this.setState({
			heroName: getHero.name,	
			heroId: getHero.id
		})
	}


	render() {
		return (
			<form>
				<h2>{this.state.heroName} details!!</h2>
				<p>
					id: <span>{this.state.heroId}</span>
				</p>
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
