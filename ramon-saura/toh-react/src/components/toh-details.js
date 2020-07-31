import React from 'react';
import { NavLink, Prompt } from 'react-router-dom';
import HeroList from '../toh.moks';

class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroName: '',
			heroId: null,
			formIsDirty: true
		};
		this.onFieldChange = this.onFieldChange.bind(this);
	}
	onFieldChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}
	getHeroById(id) {
		return HeroList.find((hero) => hero.id === id);
	}
	componentDidMount() {
		const hero = this.getHeroById(+this.props.match.params.heroId);
		this.setState({
			heroName: hero.name,
			heroId: hero.id
		});
	}

	render() {
		return (
			<>
				<form>
					<h1>{this.state.heroName} details!</h1>
					<div>id: {this.state.heroId}</div>
					<label htmlFor="heroName">
						name:
						<input
							name="heroName"
							placeholder="Hero name"
							value={this.state.heroName}
							onChange={this.onFieldChange}
						></input>
					</label>
				</form>
				<Prompt
					when={this.state.formIsDirty}
					message="Are you sure you want to navigete away?"
				/>
				<NavLink activeClassName="my-active-class" to="/" exact>
					Back to Dashboard
				</NavLink>
			</>
		);
	}
}

export default Details;
