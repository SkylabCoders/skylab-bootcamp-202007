import React, { useState, useEffect } from 'react';
import cartStore from '../stores/cartStore';

function Cart() {
	const [cartItems, setCartItems] = useState(cartStore.getItems());

	useEffect(() => {
		cartStore.addChangeListener(onChange);
        console.log(cartItems);
		return () => cartStore.removeChangeListener(onChange);
	}, [cartItems.length]);

	function onChange() {
		setCartItems(cartStore.getItems());
    }
    


	return (
		<section>
			<div>MI CESTA:</div>
			{cartItems.length !== 0 && <div>
				{cartItems.map((item) => (
					<li key={item.id}>
						<img src={item.photo} alt="product"/>
						<div>{item.name}</div>
						<div>{item.price}</div>
					</li>
				))}
			</div>
                }

            {cartItems.length === 0 && <p>No products for now</p>}
                <div>TOTAL ({cartItems.length} productos) </div>
		</section>
	);
}

export default Cart;
// COLOR CARRITO: 7fa00;
