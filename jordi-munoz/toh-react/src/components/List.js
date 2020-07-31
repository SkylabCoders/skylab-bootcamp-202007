import React from 'react';
import './List.css';

function List({heroesList}) {
    return (
        <div className='containerList'>
            {heroesList}
        </div>
    )
}

export default List;