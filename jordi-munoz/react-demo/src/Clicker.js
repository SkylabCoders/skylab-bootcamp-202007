import React from 'react';

function Clicker({ handleClick, MyButton }) {
    const myLastName = ['C', 'A', 'O'];
    return (<>
      {myLastName.map((letter) => (
          <MyButton key={letter} letter={letter} handleClick={handleClick} />
      ))}

    </>);
}

export default Clicker;