import React from 'react';

class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroName: '',
			heroId: 0
		};
		this.onFieldChange = this.onFieldChange.bind(this);
	}
	onFieldChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}
	render() {
		return (
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
		);
	}
}

export default Details;
