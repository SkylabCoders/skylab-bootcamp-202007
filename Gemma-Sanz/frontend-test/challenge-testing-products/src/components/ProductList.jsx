import React, { useEffect, useState } from 'react';
import productStore from '../store/productStore';
import './productList.css';
import { loadProducts } from '../actions/productActions';
import Product from './Product';

function ProductList() {
	const [products, setProducts] = useState(productStore.getProducts());

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

	return (
		<ul>
			{products.map((product) => (
				<Product product={product} key={product.id} />
			))}
		</ul>
	);
}

export default ProductList;
