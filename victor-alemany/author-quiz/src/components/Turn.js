import React from 'react';
import '../bootstrap.min.css';
import './Turn.css';
import Book from './Book';

function Turn(props) {
    return (
        <div className="row">
            <div className="col-4 offset-1">
            <img src="./logo192.png" className="author-image" alt="Book Author"/>
            </div>
            <div className="col-6">
            <Book title={'El Quijote'} />
            <Book title={'The Infinite Game'} />
            <Book title={'Clean Code'} />
            <Book title={'El hombre mediocre'} />
            <Book title={'Cómo matar a un ruiseñor'} />
            </div>
        </div>
    )
}

export default Turn;