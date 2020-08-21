import React from 'react';
import './heroDetails.css';

class HeroDetails extends React.Component {
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
			<div className="HeroDetails">
				<h1>Tour of heroes</h1>
				<h3>Magneto Details!</h3>

				<form>
					<p>id:{this.state.heroId}</p>
					<label htmlfor="heroName">
						name:
						<input
							name="heroName"
							placeholder="Hero name"
							value={this.state.heroName}
							onChange={this.onFieldChange}
						/>
					</label>
				</form>
			</div>
		);
	}
}

export default HeroDetails;
