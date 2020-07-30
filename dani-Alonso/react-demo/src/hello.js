import React from 'react';


class Hello extends React.Component {
    interval = null
    constructor(props) {
        super(props);
        this.state = {
            now: new Date().toISOString()
        }
    }
    //it's executed just after the render
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                now: new Date().toISOString()
            })
        }, 1000);
    }
    componentWillUnmmount() {
        clearInterval(this.interval)
    }
    render() {
        console.log('Render: ', 'just before componentDidMount')
        return <h1>Hello at {this.state.now}</h1>
    }
}
export default Hello;