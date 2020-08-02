import React from 'react'



function Clicker ({handleClick , MyButton}){
    
    const myName = ['S', 'A', 'N', 'T', 'I'];
    
    return(
        <div>
            {myName.map((letter) =>( 
                 <MyButton key={letter} letter={letter} handleClick={handleClick}/>
            ))}
           
        </div>

    ); 
}

export default Clicker;