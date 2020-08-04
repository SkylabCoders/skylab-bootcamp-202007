import React from 'react'
import Book from './Book'
import './Turn.css'



function Turn (props) {
    return (
        // ver columnas en fila row y de 12 columnas voy cogiendo y dejando a los lados con offset
        <div className="row">
            <div className="col-4 offset-1">
                <img src="./logo192.png" className="author-image" alt="Book author"/>
            </div>
            <div className="col-6 offset-1">
                <Book title={'El Quijote'} />
                <Book title={'The Infinite Game'} />
                <Book title={'Clean Code'} />
                <Book title={'El hombre mediocre'} />
                <Book title={'Como matar a un ruiseñor'} />
            </div>
        </div>

    );
}

export default Turn;