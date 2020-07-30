import React from 'react';
import './detail.css';

class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroName: 'Bombasto',
			heroId: 14
		};
		this.onFieldChange = this.onFieldChange.bind(this);
	}

	onFieldChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<form>
				<p>{this.state.heroName} details!</p>
				<p>id: {this.state.heroId}</p>
				<label htmlFor="heroName">
					name:
					<input
						name="heroName"
						placeholder="Hero Name"
						value={this.state.heroName}
						onChange={this.onFieldChange}
					/>
				</label>
			</form>
		);
	}
}
export default Detail;
