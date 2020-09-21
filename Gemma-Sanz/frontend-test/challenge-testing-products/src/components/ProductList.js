import React, { useEffect, useState } from 'react';
import productStore from '../store/productStore';
import './productList.css';
import { loadProducts } from '../actions/productActions';

function ProductList() {
	const [products, setProducts] = useState(productStore.getProducts());
	// 	const [state, setState] = useState(false);

	useEffect(() => {
		productStore.addChangeListener(onChange);
		loadProducts();
		console.log('hey', products);
		return () => {
			productStore.removeChangeListener(onChange);
		};
	}, [products]);

	function onChange() {
		setProducts(productStore.getProducts());
	}

	function onClick(id) {
		productStore.addProductToCart(id);
	}

	return (
		<>
			<ul>
				{products.map((product) => {
					return (
						<li key={product.name}>
							<div className="details__product">
								<p className="product__name">{product.name}</p>
								<p>
									<span>{product.price} €</span>
								</p>
							</div>
							<img
								src="https://trello-attachments.s3.amazonaws.com/5f6708afcfada7261d3ec502/190x104/9b28c893288dfa5ed3eb5e8e0577af80/add-to-cart.png"
								alt="cart__img"
								onClick={(event) => {
									event.preventDefault();
									return onClick(product.id);
								}}
							></img>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default ProductList;
