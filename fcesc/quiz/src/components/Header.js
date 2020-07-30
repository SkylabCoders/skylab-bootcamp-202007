import React from 'react';
import './Header.css';
import Date from './Date';

function Header(props){
    return (
        <header>
            <h1>Welcome to {props.appData.title} app</h1>
            <Date 
                timer={props.timer} 
                date={props.date}
            />
        </header>
    );
}

export default Header;