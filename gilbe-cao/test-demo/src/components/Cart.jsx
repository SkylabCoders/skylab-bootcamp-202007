import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import cartStore from '../stores/cart.store';

export default function Cart() {
	const [cartItems, setCartItems] = useState(cartStore.getItems());

	useEffect(() => {
		cartStore.addListener(callb);
		return () => cartStore.removeMyListener(callb);
	}, [cartItems.length]);

	function callb() {
		setCartItems(cartStore.getItems());
	}

	return (
		<>
			<p>Cart works with {cartItems.length}</p>
		</>
	);
}
