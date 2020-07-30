import React from 'react';
import Book from './Book';

function Turn(props){
    return(
        <div className='row'>
            <div className='col-4 offset-1'>
                <img
                    src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fmedia3.giphy.com%2Fmedia%2F12NUbkX6p4xOO4%2Fgiphy.gif%3Fcid%3D6104955e008297d7617f2670aa5c789cd8d6c875a8f8d877%26rid%3Dgiphy.gif"
                    alt="Book Author "
                    className="author-image"
                ></img>

            </div>
            <div className='col-6'>
                <Book title={'El Quijote'} />
			    <Book title={'The Infinite Game'} />
            </div>
            
        </div>

    );
}

export default Turn;