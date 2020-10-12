import React from 'react';
import './CartList.scss';

const CartList = ({ id, user, image, name, price, onDeleteToCart}) => { 

    return (
        <section className="cart">
            <img className="cart__img" src={image} alt={name}/>
            <div className="cart-column">
                <p className="cart-column__name">{name}</p>
                <p className="cart-column__price">{price}€</p>
            </div>
            <button 
                className="cart__delete" 
                onClick={() => {
                    onDeleteToCart(id, user)
                }}
            >
            </button>
        </section>
    )
}

export default CartList;