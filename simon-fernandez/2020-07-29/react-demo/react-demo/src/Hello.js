import React from 'react';
import { render } from 'react-dom';

class Hello extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			now: new Date().toISOString()
		};
	}
	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				now: new Date().toISOString()
			});
		}, 10);
	}
	componentWillMount() {
		console.log('componentWillMount', 'this go right after the render');
	}
	componentWillUnmount() {
		console.log(
			'componentWillUnount',
			'this go right before the component is destroyed'
		);
	}
	render() {
		console.log('Render: ', 'Rendering data in the DOM');
		return <h1>Hello at {this.state.now}</h1>;
	}
}
export default Hello;
