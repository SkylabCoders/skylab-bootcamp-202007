import React from 'react'
import { generate } from 'shortid'



function HeroList({ id, name }) {
    return (
        <ul>
            <a key={generate()} href="https://getbootstrap.com/"><span>{id}</span><span>{name}</span></a>
        </ul>
       
    );   
}


export default HeroList;