import React from 'react';
import './dropdown.sass';

function Dropdown() {
  const data = ['ongoing', 'planned', 'closed'];

  return (
    <div className='dropdown'>
      <ul className='dropdown__list'>
        {(data !== undefined) ? 
          data.map((v, i)=>{
            return (<li key={i} onClick={(event)=>{event.preventDefault(); }}>{v}</li>)
          }) : '' }
      </ul>
    </div>  
  );
}

export default Dropdown();