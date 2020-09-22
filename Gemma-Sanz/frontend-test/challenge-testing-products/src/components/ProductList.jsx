import React, { useEffect, useState } from 'react';
import productStore from '../store/productStore';
import './productList.css';
import { loadProducts, addToCart } from '../actions/productActions';
import Product from './Product';

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

	function onSubmit(product) {
		product.cart = true;
		addToCart(product);
	}

	return (
		<>
			<ul>
				{products.map((product) => {
					return (
						<Product product={product} onSubmit={onSubmit} key={product.id} />
					);
				})}
			</ul>
		</>
	);
}

export default ProductList;
