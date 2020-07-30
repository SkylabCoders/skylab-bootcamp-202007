import React from 'react'
class Hello extends React.Component {
    interval = null;
   
    constructor(props){
        super(props);
        this.state = {
            now : new Date().toISOString(),
        }
    }
    //it’s executed just after the render
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                now: new Date().toISOString()
            });
        }, 1000);
    
    }


    componentWillUnmmount(){
        console.log('componentWillUnMount','this goes right before the component is destroyed');
        clearInterval(this.interval);
    }
    render(){
        console.log('Render:','just before componentDidMount')
    return <h1>Hello at {this.state.now}</h1>
    }
}
export default Hello;