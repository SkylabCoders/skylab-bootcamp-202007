// import React from 'react';
// import './Hello.css';

// class Hello extends React.component {
// 	interval = null;
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			now: new Date().toISOString()
// 		};
// 	}

// 	componentDidMount() {
// 		this.interval = setInterval(() => {
// 			this.setState({
// 				now: new Date().toISOString()
// 			});
// 		}, 1000);

// 		console.log('something');
// 	}

// 	componentWillUnmount() {
// 		clearInterval(this.interval);
// 		console.log('something else');
// 	}

// 	render() {
// 		return <h1>Hello at {this.state.now}</h1>;
// 	}
// }

// export default Hello;

// ejercicio de no hacer props sino state y con clases
// import React from 'react';
// import './Hello.css';

// function Hello(props) {
//   return (
//     <h1>Hello at {props.now}</h1>
//   );
// }

// export default Hello;
