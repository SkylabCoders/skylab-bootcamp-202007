import React from "react";
import { NavLink } from 'react-router-dom';
<<<<<<< HEAD
import './../css/styles.css'
=======
>>>>>>> a8868aadee8bf3af7fa026975d4a31806774c6fd
import './../css/Item.css'

function Item(props) {
    return (
        <>
            <NavLink activeClassName="my-active-class" to="/" >
                <div className="item__container">
                    <img className="img__item" src={props.themeImgurl} alt="item theme"></img>
<<<<<<< HEAD
                    <h2 className="title">{props.themeTitle}</h2>
=======
                    <h2 className="img__title">{props.themeTitle}</h2>
>>>>>>> a8868aadee8bf3af7fa026975d4a31806774c6fd
                </div>
            </NavLink>
        </>
    )
}

export default Item;