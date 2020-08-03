import React from 'react';
import './Footer.css';

function Footer(props){
    return (
        <header>
            <p>{props.appData.bootcamp} - {props.appData.moto}</p>
        </header>
    );
}

export default Footer;