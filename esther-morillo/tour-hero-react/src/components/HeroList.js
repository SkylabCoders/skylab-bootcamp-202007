import React from 'react'


function HeroList({ id, name }) {
    return (
        <ul>
            <a href="https://getbootstrap.com/"><span>{id}</span><span>{name}</span></a>
        </ul>
       
    );   
}


export default HeroList;