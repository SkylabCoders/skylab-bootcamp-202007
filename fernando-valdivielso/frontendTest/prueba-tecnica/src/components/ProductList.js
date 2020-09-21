import React from 'react';
import '../styles/ProductList.css';

const cart =
	'https://trello-attachments.s3.amazonaws.com/5efafdc8c11d2a7055ac17ca/5f6708afcfada7261d3ec502/effece3bfc67a6ca5c71e84345f3a583/add-to-cart.png';

export default function ProductList() {
	return (
		<div>
			<ul className="product-list">
				<li className="product-list__item">
					<div className="product-list__item__name">
						LaJusticia colágeno con magnesio 450comp
					</div>
					<div className="product-list__item__price">14,35 €</div>
					<button className="product-list__item__cart">
						<img className="cart__image" src={cart} alt="shopping cart" />
					</button>
				</li>
				<li className="product-list__item">
					<div className="product-list__item__name">
						Xhekpon® crema facial 40ml
					</div>
					<div className="product-list__item__price">6,49 €</div>
					<button className="product-list__item__cart">
						<img className="cart__image" src={cart} alt="shopping cart" />
					</button>
				</li>
				<li className="product-list__item">
					<div className="product-list__item__name">
						Cerave ® Crema Hidrantante 340ml
					</div>
					<div className="product-list__item__price">11,70 €</div>
					<button className="product-list__item__cart">
						<img className="cart__image" src={cart} alt="shopping cart" />
					</button>
				</li>
				<li className="product-list__item">
					<div className="product-list__item__name">Hyabak solución 10ml</div>
					<div className="product-list__item__price">9,48 €</div>
					<button className="product-list__item__cart">
						<img className="cart__image" src={cart} alt="shopping cart" />
					</button>
				</li>
				<li className="product-list__item">
					<div className="product-list__item__name">
						Fotoprotector ISDIN® Fusion Water SPF 50+ 50ml
					</div>
					<div className="product-list__item__price">19.74 €</div>
					<button className="product-list__item__cart">
						<img className="cart__image" src={cart} alt="shopping cart" />
					</button>
				</li>
				<li className="product-list__item">
					<div className="product-list__item__name">
						Piz Buin® Allergy SPF50+ loción 200ml
					</div>
					<div className="product-list__item__price">8,65 €</div>
					<button className="product-list__item__cart">
						<img className="cart__image" src={cart} alt="shopping cart" />
					</button>
				</li>
			</ul>
		</div>
	);
}
