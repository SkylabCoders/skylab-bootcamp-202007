import React from 'react';
// import AuthorQuiz from './AuthorQuiz';
import Book from './Book'
import './Turn.css'

function Turn() {
    return (
        <div className='row'>
            <div className='col-4 offset-1'>
                <img src='./logo192.png' alt='book author' className='author-image'></img>
            </div>
            <div className='col-5'>
                <Book title={'El Quijote'} />
                <Book title={'The Infinite Game'} />
                <Book title={'Clean Code'} />
                <Book title={'El Hombre Invisible'} />
            </div>

        </div>
    )
}

export default Turn;