import React from 'react';
import './ProductListItem.css';

function ProductListItem({
	title,
	id,
	type,
	description,
	price,
	cover,
	rating
}) {
	return (
		<div className="main-box">
			<img className="box__image" src={cover} alt={title} />
				<div className="box__text">
					<h3 className="box__title">{title}</h3>
					<p className="box__sinopsis"><b>Description: </b>{description}</p>
				</div>
				<div className="box__hidden"></div>
				<div className="box__button">
					<div className="box__complet-price">
						<p className="box__number-price">
							{price}
							<span>€</span>
						</p>
						<p className="box__vat">VAT INCLUDED</p>
					</div>
					<div className="box__column-button">
						<form
							action="http://192.168.0.152:3001/cart/add/"
							method="POST"
							name="productsForm"
						>
							<button
								className="box__button-cart"
								type="submit"
								name="productId"
								value="2"
								title="add product"
							>
								Add to cart
							</button>
						</form>
						<p className="box__button-star">Add to favorites</p>
					</div>
				</div>
		</div>
	);
}

export default ProductListItem;
