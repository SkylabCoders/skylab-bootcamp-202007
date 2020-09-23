import React, { useEffect, useState } from 'react';
import listStore from '../stores/list-store';
import { loadList } from '../actions/list-actions';
import { addCart } from '../actions/cart-actions';

import './list.css';

export default function List() {
	const [list, setList] = useState(listStore.getList());

	useEffect(() => {
		listStore.addChangeListener(onChange);
		if (list.length === 0) {
			loadList();
		}
		return () => listStore.removeChangeListener(onChange);
	}, [list.length]);

	function onChange() {
		setList(listStore.getList());
	}

	return (
		<ul>
			{list.map((product) => (
				<li key={product.id} className="list__items">
					<div className="list__left">{product.name}</div>
					<div className="list__right">
						<div>{product.price}€</div>
						<button onClick={() => addCart(product)}>
							<img
								className="list__button--img"
								src="https://trello-attachments.s3.amazonaws.com/5efafdc8c11d2a7055ac17ca/5f6708afcfada7261d3ec502/effece3bfc67a6ca5c71e84345f3a583/add-to-cart.png"
							></img>
						</button>
					</div>
				</li>
			))}
		</ul>
	);
}
