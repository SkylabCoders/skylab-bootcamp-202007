import React, { useEffect, useState } from 'react';
import cartStore from '../stores/cart-store';
import { loadCart } from '../actions/cart-actions';

import './list.css';

export default function Cart() {
	const [cart, setCart] = useState(cartStore.getCart());

	useEffect(() => {
		cartStore.addChangeListener(onChange);
		if (cart.length === 0) {
			loadCart();
		}
		return () => cartStore.removeChangeListener(onChange);
	}, [cart.length]);

	function onChange() {
		setCart(cartStore.getCart());
	}

	return (
		<ul>
			{cart.map(
				(product) =>
					product && (
						<li key={product.id} className="list__items">
							<div className="list__img">{product.img}</div>
							<div className="list__name">{product.name}</div>
							<div className="list__price">
								<div>{product.price}€</div>
							</div>
						</li>
					)
			)}
		</ul>
	);
}
