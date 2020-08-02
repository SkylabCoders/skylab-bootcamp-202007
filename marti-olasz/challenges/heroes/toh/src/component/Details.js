import React from 'react';
import heroList from '../hero.mock';
import { Prompt } from 'react-router';
import heroStore from '../stores/heroStore';

class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.getHerofromURL();
		this.onFieldChange = this.onFieldChange.bind(this);
	}
	onFieldChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
			isDirty: true
		});
	}
	getHerofromURL() {
		let id = +this.props.match.params.id;
		return heroStore.getHeroById(id);
	}

	render() {
		return (
			<form>
				<h2>{this.state.name} details!</h2>
				<p>id: {this.state.id}</p>
				<label htmlFor="name">
					<Prompt when={this.state.isDirty} message="Cerdo!" />
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
