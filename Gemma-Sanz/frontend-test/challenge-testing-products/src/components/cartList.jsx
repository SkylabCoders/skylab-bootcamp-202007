import React, { useState, useEffect } from 'react';
import productStore from '../store/productStore';
// import { loadProducts } from '../actions/productActions';

function CartList() {
	const [cart, setCart] = useState(productStore.getCart());

	useEffect(() => {
		productStore.addChangeListener(onChange);
		console.log('hey CartList', cart);

		return () => {
			productStore.removeChangeListener(onChange);
		};
	}, [cart]);

	function onChange() {
		console.log('this is cart..onchange..', cart);
		setCart(productStore.getCart());
	}
	return (
		<>
			<h3>MI CESTA</h3>
			<ul>
				{cart.map((product) => {
					return <li>{product.name}</li>;
				})}
			</ul>
		</>
	);
}

export default CartList;
