import React, { useState, useEffect } from 'react';
import { addToCart, checkInCart, loadProductsList } from '../actions/productsActions';
import productsStore from '../stores/productsListStore';

function ProductsList() {
	const [productsList, setProductsList] = useState(productsStore.getProducts());

	useEffect(() => {
		productsStore.addChangeListener(onChange);

		if (productsList.length === 0) {
			loadProductsList();
		}
		console.log('INSIDE USEEFFECT',productsList);

		return () => productsStore.removeChangeListener(onChange);
	}, [productsList]);

	function onChange() {
		setProductsList(productsStore.getProducts());
	}

	function combinedClick(product){
		checkInCart(product)
		addToCart(product)
	}
	
	return (
		<section>
			<ul>
				{productsList.map((product) => (
					<li key={product.id}>
						<div>
							<div>{product.name}</div>
							<div>{product.price}</div>
							<div>
								{!product.inCart && 
								<button onClick={() => combinedClick(product)}>CART</button>
								}
								{product.inCart && 
								<button>FUCK YOU!!!!</button>
								}
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}

export default ProductsList;
// COLOR CARRITO: 7fa00;
