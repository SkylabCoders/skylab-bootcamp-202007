import React from "react";
import { NavLink } from 'react-router-dom';
import './Item.css'

function Item(props){
    return(
        <>
            <div className="item__container">
                <h2>Sports</h2>
                
                <NavLink activeClassName="my-active-class" to="/" >
                    <img src="" alt="item theme"></img>
                    ?
                </NavLink>
            </div>
        </>

    )
}

export default Item;