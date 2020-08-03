import React from 'react';

function Clicker({ handleClick, MyButton, nombre }) {
    return (
        <>
            {nombre.map((letter) => (
                <MyButton key={letter} letter={letter} handleClick={handleClick} />
            ))}
        </>
    );
}

export default Clicker;