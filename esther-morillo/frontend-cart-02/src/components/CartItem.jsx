import React from 'react';
import '../components/cart.scss';

const CartItem = ({ image, productName, price }) => {
    return (
        <>
        <section className="cart-section">
            <div className="cart">
                <img data-testid="image" className="cart__img" src={image} alt={image}/>
                <p className="cart__title">{productName}</p>
                <p className="cart__price">{price}€</p>
            </div>
            <div className="cart__line"></div>
        </section>
    </>
    )
}

export default CartItem;