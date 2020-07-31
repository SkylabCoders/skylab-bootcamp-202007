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
		let id = +this.props.match.params.id;
		return heroList.find((i) => id === i.id);
	}

	render() {
		return (
			<form>
				<h2>{this.state.name} details!</h2>
				<p>id: {this.state.id}</p>
				<label htmlFor="name">
					name:{' '}
					<input
						value={this.state.name}
						name="name"
						onChange={this.onFieldChange}
					></input>
				</label>
			</form>
		);
	}
}

export default Details;
