import React from 'react';
import Book from './Book';
import './Turn.css';

function Turn(props) {
    return (

        <div className='row'>
            <div className='col-4 offset-1'>
                <img src='./logo192.png' alt='Book Author' className='author-image'/>
            </div>

            <div className='col-6'>
                <Book title={'The Infinite Game'} />
                <Book title={'El Quijote'} />
                <Book title={'Clean Code'} />
                <Book title={'Como matar a un Ruiseñor'} />
            </div>
        </div>
    )
}

export default Turn;