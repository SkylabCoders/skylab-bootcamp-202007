import React from 'react';

class GetDate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			now: new Date().toISOString()
		};
	}
	componentDidMount() {
		console.log('Did mount');
	}
	componentWillMount() {
		console.log('Will mount');
	}

	render() {
		return <h1>Hello at {this.state.now}</h1>;
	}
}

export default GetDate;
