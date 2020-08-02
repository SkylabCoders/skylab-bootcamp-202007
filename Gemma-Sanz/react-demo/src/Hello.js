import React from 'react';

class Hello extends React.Component {
    interval = null;

    constructor(props) {
        super(props);
        this.state = {
            now: new Date().toISOString(),
        };
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                now: new Date().toISOString()
            });
        }, 1000);

        /*         console.log(
                    "componentDidMount: ",
                    "Compoanent is now loaded, this goes right after the render"
                ) */
    }
    componentWillUnmount() {
        clearInterval(this.interval);
/*         console.log("componentWilUnmount: ",
            "This goes right before the component is destroyed")
    */ }
    render() {
/*         console.log("render: ", "We are rendering data in the DOM")
 */        return <h1>Hello at {this.state.now}</h1>
    }
}

export default Hello;