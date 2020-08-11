import React from "react";
import { NavLink } from 'react-router-dom';
import './../css/item.scss';
import * as ROUTES from './../config/routes';

function Item(props) {
    return (
        <>
            <NavLink activeClassName="my-active-class" className="anchor__link" to={`${ROUTES.THEME_ROOT}/${props.themeSlug}`} >
                <div className="item__container">
                    <img className="img__item" src={props.themeImgurl} alt="item theme"></img>
                    <h2 className="img__title">{props.themeTitle}</h2>
                </div>
            </NavLink>
        </>
    )
}

export default Item;