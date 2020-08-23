import React, { useEffect, useState } from 'react';
import { loadProducts } from '../actions/productActions';
import productStore from '../stores/productStore';
import ProductListItem from './ProductListItem';
import './ProductList.css';

function ProductList() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		productStore.addChangeListener(onChange);
		setProducts(productStore.getProduct());
		if (products.length === 0) loadProducts();

		return () => productStore.removeChangeListener(onChange);
	}, [products]);

	function onChange() {
		setProducts(productStore.getProduct());
	}

	// function addNumberCart() {
	//   cartStore.updateNumberCart();

	// }

	return (
		<>
			<div className="ProductList__Title">PRODUCT LIST</div>
			{products.map((product) => (
				<ProductListItem
					key={product._id}
					id={product._id}
					title={product.title}
					type={product.type}
					description={product.description}
					price={product.price}
					cover={product.cover}
					rating={product.rating}
					// addNumberCart={addNumberCart}
				/>
			))}
		</>
	);
}
export default ProductList;
