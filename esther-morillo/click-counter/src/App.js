import React from 'react';
import './App.css';


function App({ clicks, clickChange, resetCounter }) {
  return (
    <div onClick={clickChange} onMouseLeave={resetCounter}>This div has been clicked {clicks} times!</div>
  );
}



/*class App extends React.Component {  
  render() {
    return (
      <div 
      onClick={this.props.clickChange} 
      onMouseLeave={this.props.resetCounter}
      >
        This div has been clicked {this.props.clicks} times!
      </div>
    );
  }
}*/

export default App;
