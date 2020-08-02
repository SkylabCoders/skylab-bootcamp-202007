import React from 'react';
import './Date.css';

function Date(props){
    let min = 0;
    let sec = 0;
    
    if (props.timer > 60){
        min = formater(parseInt(props.timer / 60));
        sec = formater(props.timer % 60);
    } else {
        sec = formater(props.timer);
    }

    function formater(num){
        return (num < 10) ? num = '0' + num : num;
    }

    return (
        <div className="Date__container">
            <p>App started on {props.date.day}/{props.date.month}/{props.date.year} @ {props.date.hour}:{props.date.minutes}. Time since start: {min}:{sec}.</p>
        </div>
    );
}

export default Date;