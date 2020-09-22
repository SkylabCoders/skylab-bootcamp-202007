import React from 'react';
import './../css/displayInlineArray.css';

function HeroAlias(props){
    let list = [];
    for (let i=0; i<props.aliases.length; i++){
    list.push(<li key={i} className='inline__array'>{props.aliases[i]}</li>);
    }
    let result = (        
        <ul className="inline__array">
            {list}
        </ul>
    );
    return result;
}

export default HeroAlias;