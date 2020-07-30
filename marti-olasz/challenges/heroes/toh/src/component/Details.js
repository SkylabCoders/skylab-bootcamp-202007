import React from 'react';
import heroList from '../hero.mock';

class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.getHerofromURL();
		this.onFieldChange = this.onFieldChange.bind(this);
	}
	onFieldChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	getHerofromURL() {
		let url = window.location.pathname;
		let id = +url.substr(url.length - 2);
		return heroList.find((i) => id === i.id);
	}

	render() {
		return (
			<form>
				<p>{this.state.name} details!</p>
				<p>id: {this.state.id}</p>
				<label htmlFor="heroName">
					name:{' '}
					<input
						value={this.state.name}
						name="heroname"
						onChange={this.onFieldChange}
					></input>
				</label>
			</form>
		);
	}
}

export default Details;
