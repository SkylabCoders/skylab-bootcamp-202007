import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import productStore from '../stores/product.store';
import { addToCart, loadProducts } from '../actions/action-creators';

export default function List() {
	const [productList, setProductList] = useState(productStore.getProducts());

	useEffect(() => {
		productStore.escuchaCambios(actualizarLista);
		if (productList.length === 0) loadProducts();

		return () => productStore.dejeDeEscucharCambios(actualizarLista);
	}, [productList.length]);

	function actualizarLista() {
		setProductList(productStore.getProducts());
	}

	return (
		<>
			<p>there are {productList.length} items in the list</p>
			<button onClick={() => addToCart()}>to pa'yaaa !</button>
		</>
	);
}
