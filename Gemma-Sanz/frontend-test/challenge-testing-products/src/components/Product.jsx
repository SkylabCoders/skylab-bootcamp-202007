import React, { useState } from 'react';
import './productList.css';

function Product({ product, onSubmit }) {
	const [state, setState] = useState(false);

	return (
		<li key={product.name}>
			<div className="details__product">
				<p className="product__name" data-testid="name">
					{product.name}
				</p>
				<p>
					<span
						data-testid="price"
						className={state ? 'cart__disabled__text' : ''}
					>
						{product.price} €
					</span>
				</p>
			</div>
			<img
				src="https://trello-attachments.s3.amazonaws.com/5f6708afcfada7261d3ec502/190x104/9b28c893288dfa5ed3eb5e8e0577af80/add-to-cart.png"
				alt="cart__img"
				data-testid="image"
				className={state ? 'cart__disabled' : ''}
				onClick={(event) => {
					event.preventDefault();
					onSubmit(product);
					setState(true);
				}}
			></img>
		</li>
	);
}

export default Product;
