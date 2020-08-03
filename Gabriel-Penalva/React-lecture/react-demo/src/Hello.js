import React from 'react';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { now: new Date().toLocaleTimeString() };


    }
    componentDidMount() {
        let newDate = {};
        setInterval(() => {
            newDate = { now: new Date().toLocaleTimeString() }
            this.setState(newDate);
        }, 1000
        );

    }
    componentWillUnmount() {
        clearInterval(this.interval);

    }

    render() {
        return <h1>Hello at {this.state.now}</h1>
    }
}

export default Hello;