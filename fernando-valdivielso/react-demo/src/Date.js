import React from 'react';

// function Hello(props) {
//     return <h1>Hello at {props.now} {props.x}</h1>
// }

// export default Hello;

// import React from 'react';

// function Hello({ now, x }) {
//     return <h1>Hello at {now}{x}</h1>  ///con destructuring
// }

class Hello extends React.Component {
    interval = null;
    constructor(props) {
        super(props);
        this.state = {
            now: new Date().toISOString()
        };
    }
    render() {
        // console.log('We are rendering the data in the DOM')
        return <h1>Hello at {this.state.now}</h1>
    }


    componentDidMount() {
        // console.log('componentDidMount--> component is now loaded. Thid goes right after the render')
        this.interval = setInterval(() => {
            this.setState({
                now: new Date().toISOString()
            });
        }, 100);
    }

    componentWillUnmount() {
        // console.log('componentWillUnmount--> this will go right before the  component is destroyed')
        clearInterval(this.interval);
    }

}

export default Hello;