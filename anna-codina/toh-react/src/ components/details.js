import React from 'react';
import '../ToH.css';
import heroList from './list.mock';
import { Link } from 'react-router-dom';

class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroName: '',
			heroId: null
		};
		this.onFieldChange = this.onFieldChange.bind(this);
	}
	getHeroById(id) {
		return heroList.find(
			(heroItem) => heroItem.id === +this.props.match.params.heroId
		);
	}
	componentDidMount() {
		const hero = this.getHeroById(+this.props.match.params.heroId);
		this.setState({
			heroName: hero.name,
			heroId: hero.id
		});
	}

	onFieldChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	render() {
		return (
			<div id="hero-detail__container">
				<h2>
					<span id="hero-detail__name">{this.state.heroName}</span> Details!
				</h2>
				<form>
					<p>
						id: <span id="hero-detail__id">{this.state.heroId}</span>
					</p>
					<label htmlFor="heroId">
						Id:
						<input
							id="hero-detail__id-control"
							placeholder="hero id"
							type="text"
							name="heroId"
							value={this.state.heroId}
							onChange={this.onFieldChange}
						></input>
					</label>
					<label htmlFor="heroName">
						{' '}
						name:
						<input
							id="hero-detail__name-control"
							placeholder="hero name"
							type="text"
							name="heroName"
							value={this.state.heroName}
							onChange={this.onFieldChange}
						/>
					</label>
				</form>

				<Link
					onClick={(event) => {
						event.preventDefault();
						this.props.history.goBack();
					}}
					class="hero-detail__back"
				>
					Back
				</Link>
			</div>
		);
	}
}
export default Details;
