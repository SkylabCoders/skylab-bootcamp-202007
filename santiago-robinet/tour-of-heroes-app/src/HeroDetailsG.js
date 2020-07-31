import React from 'react';
import heroList from './component/hero.mock';
import { Prompt } from 'react-router-dom';

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

	onFieldChange(event) {
		this.setState({
			heroName: event.target.value,
			formIsDirty: true
		})
		
	}

	getHeroById(){
		// const path = window.location.pathname;
		// const id = path.split('/')[2]
		
		const id = this.props.match.params.heroId;
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
				<h2 className="details__title">{this.state.heroName} details!!</h2>
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
				<Prompt when={this.state.formIsDirty} 
						message="Are you sure you want to navigate away?"/>
			</form>
		);
	}
}

export default HeroDetail;
