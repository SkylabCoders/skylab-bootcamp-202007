import React from 'react';

class SayHi extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			now: new Date().toISOString()
		};
	}
	componentDidMount() {
		setInterval(() => {
			this.setState({
				now: new Date().toISOString()
			});
		}, 1000);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	render() {
		console.log('render:');
		return <h1>Hello at {this.state.now}</h1>;
	}
}
export default SayHi;
