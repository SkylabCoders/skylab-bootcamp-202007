import React from 'react';

function Clicker({ MyButton, data }) {
    
    return (<>
      {data.map((letter) => (
          <MyButton key={letter} letter={letter}/>
      ))}

    </>);
}

export default Clicker;