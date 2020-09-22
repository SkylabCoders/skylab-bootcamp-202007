import React, { useEffect, useState } from 'react';
import productStore from '../store/productStore';
import './productList.css';
import { loadProducts, addToCart } from '../actions/productActions';

function ProductList() {
	const [products, setProducts] = useState(productStore.getProducts());

	// 	const [state, setState] = useState(false);

	useEffect(() => {
		productStore.addChangeListener(onChange);
		if (!products.length) loadProducts();
		return () => {
			productStore.removeChangeListener(onChange);
		};
	}, [products.length]);

	function onChange() {
		setProducts(productStore.getProducts());
	}

	function onClick(product) {
		product.cart = true;
		addToCart(product);
	}

	return (
		<>
			<ul>
				{products.map((product) => {
					return (
						<li key={product.name}>
							<div className="details__product">
								<p className="product__name" data-testid="name">
									{product.name}
								</p>
								<p>
									<span>{product.price} €</span>
								</p>
							</div>
							{!product.cart && (
								<img
									src="https://trello-attachments.s3.amazonaws.com/5f6708afcfada7261d3ec502/190x104/9b28c893288dfa5ed3eb5e8e0577af80/add-to-cart.png"
									alt="cart__img"
									onClick={(event) => {
										event.preventDefault();
										onClick(product);
									}}
								></img>
							)}
							{product.cart && (
								<img
									src="https://trello-attachments.s3.amazonaws.com/5f6708afcfada7261d3ec502/190x104/9b28c893288dfa5ed3eb5e8e0577af80/add-to-cart.png"
									alt="cart__img"
									className="cart__disabled"
									onClick={(event) => {
										event.preventDefault();
										onClick(product);
									}}
								></img>
							)}
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default ProductList;
