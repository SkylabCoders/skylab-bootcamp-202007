import React from 'react';

// function Hello(props) {
//     return <h1>Hello at {props.now} {props.x}</h1>
// }

// export default Hello;

// import React from 'react';

function Hello({ now, x }) {
    return <h1>Hello at {now}{x}</h1>  ///con destructuring
}

export default Hello;