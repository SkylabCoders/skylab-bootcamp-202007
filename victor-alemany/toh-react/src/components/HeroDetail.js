import React from 'react';
import heroListItem from '../hero.mock'

class HeroDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroName: '',
			heroId: 14
		};
		this.onFieldChange = this.onFieldChange.bind(this);
	}

	onFieldChange(myEvent) {
		this.setState({
			[myEvent.target.name]: myEvent.target.value
		});
    }
/* 
    getHeroByName(){
        const heroSearch = heroListItem.find((hero) => hero.name === +);
        return heroSearch;
    } */

    getHeroById(){
        const path = window.location.pathname;
        const id = path.split('/')[2];
        const heroSearch = heroListItem.find((hero) => hero.id === +id);
        return heroSearch;
    }

    componentDidMount(){
        const getHero = this.getHeroById();
        console.log(getHero);
        this.setState({
            heroName: getHero.name,
            heroId: getHero.id
        })
    }

	render() {
		return (
			<form>
                <div>
                    <h2>{this.state.heroName} details</h2>
                </div> 
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