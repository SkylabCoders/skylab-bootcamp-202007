import React from 'react'


class Hello extends React.Component {
    interval = null;

    constructor (props) {
        super(props);
        this.state = {
            now: new Date().toISOString()
        };
    }

    componentDidMount() {
        this.internal = setInterval(() => {
            this.setState ({
                now: new Date().toISOString()
            })
        }, 1000) 
    }



    componentWillUnmount() {
        clearInterval(this.internal);
    }
    
    render () {
        console.log('render: ', 'We are rendering data in the DOM')
    return <h1>Hello at {this.state.now}</h1>
    }
}

export default Hello;