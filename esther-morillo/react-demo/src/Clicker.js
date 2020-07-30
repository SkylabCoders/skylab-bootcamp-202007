import React from 'react';


function Clicker({ handleClick, MyButton }) {
    const myLastName = ['M', 'O', 'R', 'I', 'L', 'l', '0']
    return (
        <>
            {
                myLastName.map((letter) => (
                    <MyButton key={letter} letter={letter} handleClick={handleClick} />
                ))
            }
        </>
    )
}

export default Clicker;