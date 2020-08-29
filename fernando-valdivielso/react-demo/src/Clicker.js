import React from 'react';
import MyButton from './MyButton'


function Clicker({ handleClick }) {
    const myLastName = ['L', 'E', 'O', 'N']
    return (
        <div>
            {myLastName.map((letter) =>
                <MyButton key={letter} letter={letter} handleClick={handleClick} />
            )}
        </div>
    )
}



// function Clicker({ handleClick, a }) {
//     return (
//         <div>
//             <button onClick={() => handleClick('F')}>F</button>
//             <button onClick={() => handleClick('E')}>E</button>
//             <button onClick={() => handleClick('R')}>R</button>
//             <p>{a}</p>

//         </div>
//     )
// }


// function Clicker(props) {
//     return (
//         <div>
//             <button onClick={() => props.handleClick('F')}>F</button>
//             <button onClick={() => props.handleClick('E')}>E</button>
//             <button onClick={() => props.handleClick('R')}>R</button>

//         </div>
//     )
// }

export default Clicker;    