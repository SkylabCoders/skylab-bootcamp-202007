import React from 'react';
import MyButton from './MyButton';
function Clicker({ handleClick, myButton }) {
    const myLastName = ['D', 'A', 'N', 'I']

    return (<>

        {myLastName.map((letter) => (
            <MyButton key={letter} letter={letter} handleClick={handleClick} />
        ))}

    </>)
}

export default Clicker;