import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productStore from '../store/productsStore';
import { loadProducts } from '../actions/producstActions';


function ProductList() {
	const [productList, setProductList] = useState(productStore.getProducts());

	useEffect(() => {
		productStore.addChangeListener(updateList);
		if (products.length === 0) loadProducts();
		return () => productStore.removeChangeListener(updateList);
	}, [products.length]);

	function updateList() {
		setProductList(productStore.getProducts());
	}

	return (
		<ul>
			{products && products.map((products) => (
				<li key={products.id} className="product-list__item">
					<Link>
						{products.name}: {products.price}
					</Link>
					
				</li>
			))}
		</ul>
	);
}

export default ProductList;