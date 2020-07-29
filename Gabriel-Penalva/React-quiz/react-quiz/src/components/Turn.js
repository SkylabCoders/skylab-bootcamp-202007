import React from 'react';

import Book from './Book';
function Turn(props) {
    return (
        <div className='row'>
            <div className='col-4 offset-1'><img src='./logo192.png' alt='Book Author Img' /></div>
            <div className='col-6 offsert-1'>
                <Book title={"el Quijote"} />
                <Book title={"The Infinite Game"} />
                <Book title={"El Hombre Mediocre"} />
                <Book title={"Como matar a un ruiseñor"} />
            </div>
        </div >
    )
}

export default Turn;
