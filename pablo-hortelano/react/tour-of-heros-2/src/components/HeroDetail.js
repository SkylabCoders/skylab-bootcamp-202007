import React from 'react';
import { Button, Container } from 'react-bootstrap';

class HeroDetail extends React.Component {
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
			heroName: event.target.value
		});
	}

	render() {
		return (
			<Container>
				<form>
					<p>
						id: <span>{this.state.heroId}</span>
					</p>
					<label htmlFor="heroName">
						name:
						<input
							name="heroName"
							placeholder="Hero name"
							value={this.state.heroName}
							onChange={this.onFieldChange}
						/>
					</label>
				</form>
			</Container>
		);
	}
}

export default HeroDetail;
