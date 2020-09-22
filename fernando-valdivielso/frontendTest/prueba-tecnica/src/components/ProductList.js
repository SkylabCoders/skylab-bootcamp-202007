import React, { useState, useEffect } from 'react';
import productStore from '../store/productStore.js';
import { loadProducts } from '../actions/productActions';
import '../styles/ProductList.css';

const cart =
	'https://trello-attachments.s3.amazonaws.com/5efafdc8c11d2a7055ac17ca/5f6708afcfada7261d3ec502/effece3bfc67a6ca5c71e84345f3a583/add-to-cart.png';

export default function ProductList() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		productStore.addChangeListener(onChange);
		loadProducts();

		return () => productStore.removeChangeListener(onChange);
	}, [products.length]);

	function onChange() {
		setProducts(productStore.getProducts());
	}

	return (
		<div>
			<ul className="product-list">
				{products.map((product) => (
					<li key={product.price} className="product-list__item">
						<div className="product-list__item__name" data-testid="name">
							{product.name}
						</div>
						<div className="product-list__item__price">{product.price} €</div>
						<button className="product-list__item__cart">
							<img className="cart__image" src={cart} alt="shopping cart" />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
