import React, { useState, useEffect } from "react";
import cartStore from '../stores/cartStore';
import CartItem from './CartItem';
import './cart.scss'

export default function Cart() {
    const [cart, setCart] = useState(cartStore.getCart());
    let add = 0;

    useEffect(() => {
        cartStore.addChangeListener(onChange);

        return () => cartStore.removeChangeListener(onChange);
    }, [cart.length]);

    function onChange() {
        setCart(cartStore.getCart());
    }
console.log('cart', cart)
    return (
        <>
            <div className="cart-container">
                <p className="cart-title">Mi cesta: </p>
                {cart && 
                    cart.map((product) => (
                        <CartItem 
                        image={product.image}
                        productName={product.productName}
                        price={product.price}
                    /> 
                    ))                                               
                }
                    
                <div className="cart__total">
                    <p className="cart__total-title">Total <span>({cart.length} productos)</span></p> 
                    <p className="cart__total-price"> 
                        {cart && 
                            cart.forEach((element) => {
                                add += element.price;
                            })
                    }{add.toFixed(2)}€</p>
                </div>
            </div>           
        </>
    )
}

