import React from 'react';
class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            now: new Date().toISOString()
        }
    }
    //it's executed just after the render
    componentDidMount() {
        console.log('componentDidMount', 'Component is now loaded, this goes right after the render')
    }
    componentWillUnmmount() {
        console.log('componentWillUnMount', 'this goes right before the component is destroyed')
    }
    render() {
        console.log('Render: ', 'just before componentDidMount')
        return <h1>Hello at {this.state.now}</h1>
    }
}
export default Hello;