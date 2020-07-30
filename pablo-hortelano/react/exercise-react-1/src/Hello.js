import React from 'react';

class Hello extends React.Component {
	interval = null;
	constructor(props) {
		super(props);

		this.state = {
			now: new Date().toISOString(),
			clicks: 12
		};
	}
	componentWillMount() {
		console.log(
			'componentWillMount',
			'Component is now loades, this goes right before the render'
		);
	}
	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				now: new Date().toISOString()
			});
		}, 1000);
		this.setState({
			clicks: 7149
		});
		console.log(
			'componentDidUnmount',
			'Component is now loades, this goes right aftert the render'
		);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
		console.log(
			'componentWillUnmount',
			'this goes right before component is destroyed'
		);
	}

	render() {
		return <h1>Hellos at {this.state.now}</h1>;
	}
}

export default Hello;
