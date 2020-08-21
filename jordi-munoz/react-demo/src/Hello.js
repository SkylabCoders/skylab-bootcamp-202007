import React from 'react';

class Hello extends React.Component {
    interval = null;

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
        }, 1000);

        console.log('Component is now loaded, this goes right after the render')
    }
    componentWillUnmount() {
        clearInterval(this.interval);
        console.log('this goes before the component is destroyed');
    }
    render() {
        return <h1>Hello at {this.state.now}</h1>
    }
}

export default Hello;