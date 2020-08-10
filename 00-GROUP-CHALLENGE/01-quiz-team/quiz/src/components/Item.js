import React from "react";
import { NavLink } from 'react-router-dom';
import './../css/styles.css'
import './../css/Item.css'

function Item(props) {
    return (
        <>
            <NavLink activeClassName="my-active-class" to="/" >
                <div className="item__container">
                    <img className="img__item" src={props.themeImgurl} alt="item theme"></img>
                    <h2 className="title">{props.themeTitle}</h2>
                </div>
            </NavLink>
        </>
    )
}

export default Item;