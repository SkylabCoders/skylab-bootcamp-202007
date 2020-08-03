import React from 'react';

function MyButton( {letter } ) {
    return (
        <button
        onClick={() => {
            console.log(letter);
        }}
        >
        {letter}
        </button>
    );
}

export default MyButton;