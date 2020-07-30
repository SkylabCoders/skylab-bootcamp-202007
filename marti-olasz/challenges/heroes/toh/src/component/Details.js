import React from 'react';

class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.hero.name,
			id: props.hero.id
		};
		this.onFieldChange = this.onFieldChange.bind(this);
	}
	onFieldChange(event) {
		this.setState({
			name: event.target.value
		});
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
