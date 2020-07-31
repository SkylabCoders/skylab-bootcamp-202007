import React from 'react';
import heroListItem from '../hero.mock'
import {Prompt} from 'react-router-dom'

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

	onFieldChange(myEvent) {
		this.setState({
            [myEvent.target.name]: myEvent.target.value,
            formIsDirty: true
		});
    }
/* 
    getHeroByName(){
        const heroSearch = heroListItem.find((hero) => hero.name === +);
        return heroSearch;
    } */

  /*   getHeroById(){
        const path = window.location.pathname;
        const id = path.split('/')[2];
        const heroSearch = heroListItem.find((hero) => hero.id === +id);
        return heroSearch;
    } */

   /*  

    componentDidMount(){
        const getHero = this.getHeroById();
        this.setState({
            heroName: getHero.name,
            heroId: getHero.id
        })
    } */

    componentDidMount(){
       const hero = this.getHeroById(this.props.match.params.heroId);
        this.setState({
            heroId: hero.id,
            heroName: hero.name
        })
    }

    getHeroById(id){
        return heroListItem.find((hero) => hero.id === +id);
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
						onChange={this.onFieldChange}/>
				</label>
                <Prompt when={this.state.formIsDirty} message="Are you sure yo want to navigate away?" />
			</form>
            
        );
        
	}
}

export default HeroDetail;