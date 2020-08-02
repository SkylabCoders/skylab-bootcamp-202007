import React from 'react';
import heroList from '../hero.mock';

class Details extends React.Component {
	constructor(props) {
		super(props);
		//hero = this.getHeroById(this.props.query.heroIdUrl)
		this.state = {
			id: 'Waiting',
			name: 'Waiting...',
			stateChange: true
		};

		this.onFieldChange = this.onFieldChange.bind(this);
	}

	getHeroById(id) {
		return heroList.find((hero) => hero.id === id);
	}

	onFieldChange(myEvent) {
		this.setState({
			[myEvent.target.name]: myEvent.target.value
		});
	}
	componentDidMount() {
		const hero = this.getHeroById(+this.props.match.params.id);
		this.setState({
			id: hero.id,
			name: hero.name
		});
	}

	render() {
		return (
			<form>
				<h2>{this.state.name}</h2>
				<p>id: {this.state.id}</p>
				<label htmlFor="name">
					name:
					<input
						name="name"
						placeholder="Hero name"
						value={this.state.name}
						onChange={this.onFieldChange}
					/>
				</label>
			</form>
		);
	}
}

export default Details;
